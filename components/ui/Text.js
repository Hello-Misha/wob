import BtnComponent from "./BtnComponent";
import { useTranslation } from "next-i18next";
// import { Col } from "react-bootstrap";

import classes from "./UI.module.scss";
const Text = ({ locale, grid, text, link, btnType, btnText, bg, color }) => {
  const { t } = useTranslation(locale);
  return (
    <div className={classes.textContainer}>
      {t(text, {
        returnObjects: true,
      }).map((item, index) => (
        <p key={index} className="text blue pb-3">
          {item}
        </p>
      ))}

      <BtnComponent
        link={link}
        btnType={btnType}
        text={btnText}
        bg={bg}
        color={color}
      />
    </div>
  );
};

export default Text;
