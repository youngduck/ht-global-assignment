import React from "react";
import "./whookItem.scss";
import bts from "@assets/images/whook/bts.png";
import blackpink from "@assets/images/whook/blackpink.webp";

interface IWhook {
  singer: string;
  idx: number;
}

const WhookItem: React.FC<IWhook> = ({ singer, idx }) => {
  return (
    <div className="whookItem-wrapper">
      <img
        src={idx % 2 === 0 ? bts : blackpink}
        alt="newjeans"
        className="whookItem-img"
      />
      <span className="whookItem-contents">
        <b>Whook</b> with <b>{singer}</b>
      </span>
    </div>
  );
};

export default WhookItem;
