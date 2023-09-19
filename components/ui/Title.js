import { useTranslation } from "next-i18next";
import { Col } from "react-bootstrap";

const Title = ({ locale, text, hr }) => {
  const { t } = useTranslation(locale);
  return (
    <Col xs="12" className={`mb-3 `}>
      <h2 className="h2-title lipstick">{t(text)}</h2>
      {hr && <hr className="bg-lipstick" />}
    </Col>
  );
};

export default Title;
