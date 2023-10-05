import { marked } from "marked";

// export const richTextReducer = (rawRichText) => {
//   const parsedRichText = marked(rawRichText);
//   return parsedRichText;
// };

export const RichTextRenderer = (rawRichText) => {
  const parsedRichText = marked(rawRichText);
  let styledText = parsedRichText.replaceAll("<p>", '<p class="mb-3">');
  return (
    <div
      className="text blue mb-5"
      dangerouslySetInnerHTML={{ __html: styledText }}
    />
  );
};
