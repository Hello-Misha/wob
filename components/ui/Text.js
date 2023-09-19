import BtnComponent from "./BtnComponent";
import BtnTransparent from "./BtnTransparent";
import { useTranslation } from "next-i18next";

const Text = ({ locale, text, link, btnType, btnText, bg, color }) => {
  const { t } = useTranslation(locale);
  return (
    <div className="textContainer">
      {t(text, {
        returnObjects: true,
      }).map((item, index) => (
        <p key={index} className="text-s blue pb-3">
          {item}
        </p>
      ))}
      {btnType === "transparent" ? (
        <BtnTransparent locale={locale} link={link} btnText={btnText} />
      ) : (
        <BtnComponent
          locale={locale}
          link={link}
          btnText={btnText}
          bg={bg}
          color={color}
        />
      )}
    </div>
  );
};

export default Text;
