import React from "react";
import style from "./subheader.module.css";
import { StockInfo } from "./dataInterface";

const SubHeader = (props: any) => {
  return (
    <div className={style.SubHeader}>
      <div className={style.container}>{props.children}</div>
    </div>
  );
};

export default SubHeader;
