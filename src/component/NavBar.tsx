import React from "react";

export default function NavBar() {
  const style =
    "m-2 px-3 py-2 hover:shadow rounded-lg hover:bg-slate-200 hover:cursor-pointer text-sm";
  const hoverStyle = "";

  const list = ["Slide", "Bounce", "Fade", "Pulse", "Rotate", "Scale"];

  return (
    <div className="p-3 w-[270px] h-[100vh] shadow-sm">
      <div className="font-bold text-violet-800 px-3 py-2">
        <div>React -</div>
        <div>Basic Motion</div>
      </div>
      <div className={style}>Introduction</div>
      <div className={style}>Get Start</div>
      <hr className="my-3" />
      {list.map((item: string, index: number) => (
        <div className={style}>{item}</div>
      ))}
    </div>
  );
}
