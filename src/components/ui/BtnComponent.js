import Link from "next/link";

const BtnComponent = ({ link, text, bg, color, classes }) => {
  return (
    <Link href={link}>
      <div className={` button  ${bg} ${classes}`}>
        <h4 className={`btn-text ${color}`}>{text}</h4>
      </div>
    </Link>
  );
};

export default BtnComponent;
