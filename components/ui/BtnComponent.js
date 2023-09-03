import Link from "next/link";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";

const BtnComponent = ({ link, btnText, bg, classes, color, locale }) => {
  const { t } = useTranslation(locale);

  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        transition: { duration: 1 },
      }}
      whileTap={{ scale: 1 }}
    >
      <Link href={link}>
        <div className={` btnSolid  ${bg} ${classes && classes}`}>
          <h4 className={`btn-text ${color}`}>{t(btnText)}</h4>
        </div>
      </Link>
    </motion.div>
  );
};

export default BtnComponent;
