import React from "react";
// import css from "./Property.module.scss";

const PropertyLabel = (props: any) => {
  return (
    <li
    // className={css.layout}
    >
      {props.label && <span>{props.label}</span>}
      {props.children}
    </li>
  );
};

export default PropertyLabel;
