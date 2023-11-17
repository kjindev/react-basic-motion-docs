import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const titleStyle =
    "m-2 p-2 font-bold hover:shadow rounded-lg hover:bg-slate-200 hover:cursor-pointer text-sm";
  const listStyle =
    "m-2 px-3 py-1 hover:shadow rounded-lg hover:bg-slate-200 hover:cursor-pointer text-sm";

  const animationList = ["Bounce", "Fade", "Pulse", "Rotate", "Scale"];
  const loadingList = ["Loop", "Skeleton"];

  return (
    <div className="fixed bg-slate-200 p-3 w-[270px] h-[100vh] shadow-sm">
      <div className="font-bold text-violet-800 px-3 py-2">
        React Basic Motion
      </div>
      <div className="flex flex-col">
        <Link to="/" className={titleStyle}>
          Introduction
        </Link>
        <Link to="getstart" className={titleStyle}>
          Get Start
        </Link>
      </div>
      <hr className="my-3" />
      <div className="m-2 p-2 font-bold rounded-lg text-sm">Animation</div>
      <div className="flex flex-col">
        {animationList.map((item: string, index: number) => (
          <Link key={index} to={`animation/${item}`} className={listStyle}>
            {item}
          </Link>
        ))}
      </div>
      <div className="m-2 p-2 font-bold rounded-lg text-sm">Loading</div>
      <div className="flex flex-col">
        {loadingList.map((item: string, index: number) => (
          <Link key={index} to={`/${item}`} className={listStyle}>
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}
