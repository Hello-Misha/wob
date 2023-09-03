import Link from "next/link";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";

import { IconContext } from "react-icons";
import { BiRightArrowAlt } from "react-icons/bi";

const BtnTransparent = ({ link, btnText, locale }) => {
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
        <div className={` btnTransparent`}>
          <h3 className={`h3-title lipstick`}>{t(btnText)} </h3>
          <IconContext.Provider
            value={{
              color: "981b46",

              size: "3rem",
            }}
          >
            <BiRightArrowAlt />
          </IconContext.Provider>
        </div>
      </Link>
    </motion.div>
  );
};
export default BtnTransparent;
