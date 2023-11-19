import React from "react";

interface Props {
  title: string;
  width?: string;
  height?: string;
  size?: number;
  color: string;
  fillColor?: string;
  radius?: string;
  name?: string;
  range?: number;
  xRange?: number[];
  yRange?: number[];
  duration?: number;
  timing: string;
  count: string;
}
export default function CodeBox2({
  title,
  width,
  height,
  size,
  color,
  fillColor,
  radius,
  name,
  range,
  xRange,
  yRange,
  duration,
  timing,
  count,
}: Props) {
  return (
    <pre className="leading-7 bg-[#393939] px-8 py-6 rounded-xl flex flex-col justify-center">
      <code className="">
        <code className="text-cyan-400 italic">{`import`}</code>
        <code className="text-yellow-400">{` {`}</code>
        <code className="text-white">{` ${title}`}</code>
        <code className="text-yellow-400">{` }`}</code>
        <code className="text-cyan-400 italic">{` from`}</code>
        <code className="text-cyan-400">{` "`}</code>
        <code className="text-lime-400">{`react-basic-motion`}</code>
        <code className="text-cyan-400">{`";`}</code>
      </code>
      <code className="">
        <code className="text-gray-500 italic">{`// your code`}</code>
      </code>
      <code className="">
        <code className="text-cyan-400 italic">{`return`}</code>
        <code className="text-purple-400">{` (`}</code>
      </code>
      {<code className="text-yellow-400">{`  <${title}`}</code>}
      {width && (
        <code>
          <code className="text-violet-400">{`        width=`}</code>
          <code className="text-cyan-400">{`"`}</code>
          <code className="text-lime-400">{`${width}`}</code>
          <code className="text-cyan-400">{`"`}</code>
        </code>
      )}
      {height && (
        <code>
          <code className="text-violet-400">{`        height=`}</code>
          <code className="text-cyan-400">{`"`}</code>
          <code className="text-lime-400">{`${height}`}</code>
          <code className="text-cyan-400">{`"`}</code>
        </code>
      )}
      {size && (
        <code>
          <code className="text-violet-400">{`        size=`}</code>
          <code className="text-blue-400">{`{`}</code>
          <code className="text-orange-500">{` ${size}`}</code>
          <code className="text-blue-400">{` }`}</code>
        </code>
      )}
      {color && (
        <code>
          <code className="text-violet-400">{`        color=`}</code>
          <code className="text-cyan-400">{`"`}</code>
          <code className="text-lime-400">{`${color}`}</code>
          <code className="text-cyan-400">{`"`}</code>
        </code>
      )}
      {fillColor && (
        <code>
          <code className="text-violet-400">{`        fillColor=`}</code>
          <code className="text-cyan-400">{`"`}</code>
          <code className="text-lime-400">{`${fillColor}`}</code>
          <code className="text-cyan-400">{`"`}</code>
        </code>
      )}
      {radius && (
        <code>
          <code className="text-violet-400">{`        radius=`}</code>
          <code className="text-cyan-400">{`"`}</code>
          <code className="text-lime-400">{`${radius}`}</code>
          <code className="text-cyan-400">{`"`}</code>
        </code>
      )}
      {range && (
        <code>
          <code className="text-violet-400">{`        range=`}</code>
          <code className="text-blue-400">{`{`}</code>
          <code className="text-orange-500">{` ${range}`}</code>
          <code className="text-blue-400">{` }`}</code>
        </code>
      )}
      {xRange && (
        <code>
          <code className="text-violet-400">{`        xRange=`}</code>
          <code className="text-blue-400">{` {`}</code>
          <code className="text-yellow-400">{` [`}</code>
          <code className="text-orange-500">{` ${xRange[0]}`}</code>
          <code className="text-blue-400">{`,`}</code>
          <code className="text-orange-500">{` ${xRange[1]}`}</code>
          <code className="text-yellow-400">{` ]`}</code>
          <code className="text-blue-400">{` }`}</code>
        </code>
      )}
      {yRange && (
        <code>
          <code className="text-violet-400">{`        yRange=`}</code>
          <code className="text-blue-400">{`{`}</code>
          <code className="text-yellow-400">{` [`}</code>
          <code className="text-orange-500">{` ${yRange[0]}`}</code>
          <code className="text-blue-400">{`,`}</code>
          <code className="text-orange-500">{` ${yRange[1]}`}</code>
          <code className="text-yellow-400">{` ]`}</code>
          <code className="text-blue-400">{` }`}</code>
        </code>
      )}
      {duration && (
        <code>
          <code className="text-violet-400">{`        duration=`}</code>
          <code className="text-blue-400">{`{`}</code>
          <code className="text-orange-500">{` ${duration}`}</code>
          <code className="text-blue-400">{` }`}</code>
        </code>
      )}
      <code>
        <code className="text-violet-400">{`        timing=`}</code>
        <code className="text-cyan-400">{`"`}</code>
        <code className="text-lime-400">{`${timing}`}</code>
        <code className="text-cyan-400">{`"`}</code>
      </code>
      <code>
        <code className="text-violet-400">{`        count=`}</code>
        <code className="text-cyan-400">{`"`}</code>
        <code className="text-lime-400">{`${count}`}</code>
        <code className="text-cyan-400">{`"`}</code>
      </code>
      <code className="text-yellow-400">{`   />`}</code>
    </pre>
  );
}
