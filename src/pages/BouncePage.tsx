import { Bounce } from "react-basic-motion";

export default function BouncePage() {
  return (
    <div className="text-sm">
      <div className="flex justify-center items-center my-1">
        <pre className="leading-7 bg-[#393939] w-[300px] h-[270px] p-5 rounded-xl flex flex-col justify-center mx-1">
          <code className="text-yellow-400">{`<Bounce`}</code>
          <code>
            <span className="text-violet-400">{`      type=`}</span>
            <span className="text-cyan-400">{`"`}</span>
            <span className="text-lime-400">{`x`}</span>
            <span className="text-cyan-400">{`"`}</span>
          </code>
          <code>
            <span className="text-violet-400">{`      range=`}</span>
            <span className="text-blue-400">{`{`}</span>
            <span className="text-orange-500">{`10`}</span>
            <span className="text-blue-400">{`}`}</span>
          </code>
          <code>
            <span className="text-violet-400">{`      duration=`}</span>
            <span className="text-blue-400">{`{`}</span>
            <span className="text-orange-500">{`1`}</span>
            <span className="text-blue-400">{`}`}</span>
          </code>
          <code>
            <span className="text-violet-400">{`      timing=`}</span>
            <span className="text-cyan-400">{`"`}</span>
            <span className="text-lime-400">{`ease-in-out`}</span>
            <span className="text-cyan-400">{`"`}</span>
          </code>
          <code className="text-yellow-400">{`>`}</code>
          <code className="text-white">{`      x-Bounce!`}</code>
          <code className="text-yellow-400">{`</Bounce>`}</code>
        </pre>
        <div className="w-[300px] h-[270px] text-center bg-white shadow rounded-xl flex justify-center items-center mx-1">
          <Bounce
            type="x"
            range={10}
            duration={1}
            timing="ease-in-out"
            count="infinite"
          >
            x-Bounce!
          </Bounce>
        </div>
      </div>
      <div className="flex justify-center items-center my-1">
        <pre className="leading-7 bg-[#393939] w-[300px] h-[270px] p-5 rounded-xl flex flex-col justify-center mx-1">
          <code className="text-yellow-400">{`<Bounce`}</code>
          <code>
            <span className="text-violet-400">{`      type=`}</span>
            <span className="text-cyan-400">{`"`}</span>
            <span className="text-lime-400">{`y`}</span>
            <span className="text-cyan-400">{`"`}</span>
          </code>
          <code>
            <span className="text-violet-400">{`      range=`}</span>
            <span className="text-blue-400">{`{`}</span>
            <span className="text-orange-500">{`-20`}</span>
            <span className="text-blue-400">{`}`}</span>
          </code>
          <code>
            <span className="text-violet-400">{`      duration=`}</span>
            <span className="text-blue-400">{`{`}</span>
            <span className="text-orange-500">{`1.2`}</span>
            <span className="text-blue-400">{`}`}</span>
          </code>
          <code>
            <span className="text-violet-400">{`      timing=`}</span>
            <span className="text-cyan-400">{`"`}</span>
            <span className="text-lime-400">{`linear`}</span>
            <span className="text-cyan-400">{`"`}</span>
          </code>
          <code className="text-yellow-400">{`>`}</code>
          <code className="text-white">{`      y-Bounce!`}</code>
          <code className="text-yellow-400">{`</Bounce>`}</code>
        </pre>
        <div className="w-[300px] h-[270px] text-center bg-white shadow rounded-xl flex justify-center items-center mx-1">
          <Bounce
            type="y"
            range={-20}
            duration={1.2}
            timing="linear"
            count="infinite"
          >
            y-Bounce!
          </Bounce>
        </div>
      </div>
    </div>
  );
}
