import BtnComponent from "./BtnComponent";
import { useTranslation } from "next-i18next";

const Text = ({ locale, text, link, btnType, btnText, bg, color }) => {
  const { t } = useTranslation(locale);
  return (
    <div className="textContainer">
      {t(text, {
        returnObjects: true,
      }).map((item, index) => (
        <p key={index} className="text blue pb-3">
          {item}
        </p>
      ))}

      <BtnComponent
        locale={locale}
        link={link}
        btnType={btnType}
        btnText={btnText}
        bg={bg}
        color={color}
      />
    </div>
  );
};

export default Text;
