import { Bounce, Pulse } from "react-basic-motion";

export default function Introduction() {
  return (
    <div className="pl-[330px] w-[100%] h-[100vh] p-10 flex flex-col items-center justify-center">
      <div className="text-3xl font-bold flex">
        <p>Hi, It's react-basic-motion!</p>
        <Bounce
          name="x"
          range={10}
          duration={1.5}
          timing="ease-in-out"
          count="infinite"
        >
          😊
        </Bounce>
      </div>
      <div className="my-7 text-lg">
        <p>Add animation on your project.</p>
        <p>Make it easy to put loading ui on your page.</p>
      </div>
    </div>
  );
}
