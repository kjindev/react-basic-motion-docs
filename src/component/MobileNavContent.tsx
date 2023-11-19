import React from "react";
import { Link } from "react-router-dom";

export default function MobileNavContent() {
  const animationList = ["Bounce", "Fade", "Pulse"];
  const loadingList = ["Ball", "Skeleton"];

  return (
    <div className="fixed mt-[60px] text-zinc-100 bg-zinc-800 w-full h-[100vh]">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <div className="mt-5 m-2 p-2 font-bold text-sm">Animation</div>
          <div className="flex flex-col">
            {animationList.map((item: string, index: number) => (
              <Link
                key={index}
                to={`${item}`}
                className={`mx-3 my-1 px-3 py-2 hover:shadow rounded-lg hover:bg-zinc-300 hover:cursor-pointer text-sm hover:text-black`}
              >
                {item}
                {/* {pathname === `/animation/${item}` ? (
                <span className="mx-2">•</span>
              ) : (
                <></>
              )} */}
              </Link>
            ))}
          </div>
          <div className="m-2 p-2 font-bold rounded-lg text-sm">Loading</div>
          <div className="flex flex-col">
            {loadingList.map((item: string, index: number) => (
              <Link
                key={index}
                to={`${item}`}
                className={`mx-3 my-1 px-3 py-2 hover:shadow rounded-lg hover:bg-zinc-300 hover:cursor-pointer text-sm hover:text-black`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div className="text-center text-sm py-2 text-zinc-300">
          version 2.0.3
        </div>
      </div>
    </div>
  );
}
