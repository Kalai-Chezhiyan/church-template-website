import React from "react";

export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 active:scale-95 hover:shadow-md ${props.className} ${props.color} ${props.fontColor}`}
    >
      {props.buttonName}
    </button>
  );
}
