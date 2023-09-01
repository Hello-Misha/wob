import Link from "next/link";
import { useTranslation } from "next-i18next";
const BtnComponent = ({ link, btnText, bg, color, classes, locale }) => {
  const { t } = useTranslation(locale);
  return (
    <Link href={link}>
      <div className={` button  ${bg} ${classes}`}>
        <h4 className={`btn-text ${color}`}>{t(btnText)}</h4>
      </div>
    </Link>
  );
};

export default BtnComponent;
