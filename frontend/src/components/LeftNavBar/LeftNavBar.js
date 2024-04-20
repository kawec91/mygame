import React from "react";
import { Link } from "react-router-dom";

function LeftNavBar() {
  const menu = [
    {
      icon: "",
      label: "poczta",
      link: "/mail",
    },
  ];
  return (
    <div className="border-r-[1px] border-r-black px-4 py-2">
      LeftNavBar
      <ul></ul>
    </div>
  );
}

export default LeftNavBar;
