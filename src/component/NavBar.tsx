import { Link, useLocation } from "react-router-dom";
import MobileNavContent from "./MobileNavContent";
import { useState } from "react";

export default function NavBar() {
  // const { pathname } = useLocation();
  const animationList = ["Bounce", "Fade", "Pulse"];
  const loadingList = ["Ball", "Skeleton"];
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  return (
    <>
      <div className="fixed bg-zinc-800 text-zinc-100 p-3 w-full h-[60px] tab:w-[270px] tab:h-[100vh] shadow-sm flex tab:flex-col justify-between items-center">
        <div className="tab:w-[100%]">
          <Link to="/">
            <div className="text-xl text-center tab:px-3 tab:py-2 tab:mt-5 mx-2 tab:mx-0">
              React Basic Motion
            </div>
          </Link>
          <hr className="hidden tab:flex tab:my-3" />
          <div className="hidden tab:flex tab:flex-col">
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
        </div>
        <div className="hidden tab:flex text-center text-sm py-2 text-zinc-300">
          version 2.0.3
        </div>
        {!isShowMobileMenu ? (
          <button
            onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
            className="tab:hidden flex flex-col h-[20px] justify-between mx-1"
          >
            <span className="w-[30px] h-0.5 bg-zinc-100 rounded-lg"></span>
            <span className="w-[30px] h-0.5 bg-zinc-100 rounded-lg"></span>
            <span className="w-[30px] h-0.5 bg-zinc-100 rounded-lg"></span>
          </button>
        ) : (
          <button
            onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
            className="tab:hidden relative w-[30px] h-[20px] mx-1"
          >
            <span
              style={{ rotate: "45deg" }}
              className="right-0 absolute w-[30px] h-0.5 bg-zinc-100 rounded-lg"
            ></span>
            <span
              style={{ rotate: "-45deg" }}
              className="right-0 absolute w-[30px] h-0.5 bg-zinc-100 rounded-lg"
            ></span>
          </button>
        )}
      </div>
      {isShowMobileMenu && <MobileNavContent />}
    </>
  );
}
