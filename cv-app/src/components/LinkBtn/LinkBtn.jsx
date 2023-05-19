import React from "react";

export function LinkBtn(props) {
  return (
    <div className={props.className}>
      <a href={props.href}>
        {props.icon}
        {props.text}
      </a>
    </div>
  );
}
