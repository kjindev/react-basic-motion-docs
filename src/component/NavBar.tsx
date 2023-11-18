import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  // const { pathname } = useLocation();
  const animationList = ["Bounce", "Fade", "Pulse"];
  const loadingList = ["Ball", "Skeleton"];

  return (
    <div className="fixed bg-zinc-800 text-zinc-100 p-3 w-[270px] h-[100vh] shadow-sm flex flex-col justify-between">
      <div>
        <Link to="/">
          <div className="text-xl text-center px-3 py-2 mt-5">
            React Basic Motion
          </div>
        </Link>

        {/* <div className="flex flex-col">
        <Link to="/" className={titleStyle}>
          Introduction
        </Link>
      </div> */}
        <hr className="my-3" />
        <div className="mt-5 m-2 p-2 font-bold text-sm">Animation</div>
        <div className="flex flex-col">
          {animationList.map((item: string, index: number) => (
            <Link
              key={index}
              to={`animation/${item}`}
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
              to={`loading/${item}`}
              className={`mx-3 my-1 px-3 py-2 hover:shadow rounded-lg hover:bg-zinc-300 hover:cursor-pointer text-sm hover:text-black`}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
      <div className="text-center text-sm py-2 text-zinc-300">
        version 2.0.2
      </div>
    </div>
  );
}
