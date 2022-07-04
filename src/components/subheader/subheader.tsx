import style from "./subheader.module.css";

const SubHeader = (props: any) => {
  return (
    <div className={style.SubHeader}>
      <div className={style.container}>{props.children}</div>
    </div>
  );
};

export default SubHeader;
