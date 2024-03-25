import React, { useState } from "react";

const FaqTxt = ({ title, no, setOpenId, openId, children }) => {
  const toggleOpen = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="qa-item">
      <button
        className="qa-question"
        onClick={() => toggleOpen(no)}
        onKeyPress={(event) => {
          if (event.key === "Enter") toggleOpen(no);
        }}
      >
        {title}
      </button>
      <p className={`qa-answer ${openId === no ? "open" : ""}`}>{children}</p>
    </div>
  );
};

export default FaqTxt;
