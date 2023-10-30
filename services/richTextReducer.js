import { marked } from "marked";

function modifyHTML(html) {
  const elementStyles = {
    ul: "ul text blue",
    ol: "ol text blue",
    h1: "h1-title lipstick",
    h2: "h2-title",
    h3: "h3-title",
    h4: "h4-title",
    h5: "h5-title",
    p: "text blue my-2",
    strong: "text-bold",
    em: "text-italic",
    blockquote: "quote",
  };

  let modifiedHTML = html;

  // Apply styles to top-level elements
  for (const element in elementStyles) {
    if (elementStyles.hasOwnProperty(element)) {
      const style = elementStyles[element];
      const regex = new RegExp(`<${element}>`, "g");
      modifiedHTML = modifiedHTML.replace(
        regex,
        `<${element} class="${style}">`
      );
    }
  }

  // Apply styles to nested a elements
  const aRegex = /<p class="text blue my-2"><a/g;
  modifiedHTML = modifiedHTML.replace(
    aRegex,
    `<p><a class="text underline lipstick" target="_blank"`
  );

  const imgRegex = /<p class="text blue my-2"><img/g;
  modifiedHTML = modifiedHTML.replace(imgRegex, `<p><img class="mx-auto my-3"`);

  // Apply styles to nested elements
  for (const element in elementStyles) {
    if (elementStyles.hasOwnProperty(element)) {
      const style = elementStyles[element];
      const nestedRegex = new RegExp(
        `<${element} class="${style}">(.*?)<\/${element}>`,
        "gs"
      );
      modifiedHTML = modifiedHTML.replace(
        nestedRegex,
        (match, innerContent) =>
          `<${element} class="${style}">${modifyHTML(
            innerContent
          )}</${element}>`
      );
    }
  }

  return modifiedHTML;
}

export const RichTextRenderer = (rawRichText) => {
  const parsedRichText = marked(rawRichText);
  let styledText = modifyHTML(parsedRichText);
  return (
    <div
      className="text-container blue mb-5"
      dangerouslySetInnerHTML={{ __html: styledText }}
    />
  );
};
