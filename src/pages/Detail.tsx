import { Ball, Bounce, Fade, Pulse, Skeleton } from "react-basic-motion";
import CodeBox from "../component/common/CodeBox";
import Table from "../component/common/Table";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getContent } from "../component/api/content";
import { ContentType } from "../type/content";
import CodeBox2 from "../component/common/CodeBox2";

export default function AnimationPage() {
  const { title } = useParams();
  const { pathname } = useLocation();
  const [content, setContent] = useState<ContentType | undefined>(undefined);

  useEffect(() => {
    const contentList = getContent();
    const syncContent = contentList.find(
      (item: ContentType) => item.title === title
    );
    setContent(syncContent);
  }, [pathname]);

  return (
    <div className="pl-[330px] p-10 text-sm">
      <div className="text-3xl font-bold">{title}</div>
      {content && <div>{content.description}</div>}
      <div className="mt-9 mb-6">
        <div className="mb-3 text-lg">| Example</div>
        <div className="w-[300px] h-[170px] text-center bg-white shadow rounded-xl flex justify-center items-center mx-1">
          {title === "Bounce" && (
            <Bounce
              name="x"
              range={10}
              duration={1.5}
              timing="ease-in-out"
              count="infinite"
            >
              <div>{title}!</div>
            </Bounce>
          )}
          {title === "Fade" && (
            <Fade
              name="blink"
              duration={1.5}
              timing="ease-in-out"
              count="infinite"
            >
              <div>{title}!</div>
            </Fade>
          )}
          {title === "Pulse" && (
            <Pulse
              width="100px"
              height="100px"
              color="#232323"
              fillColor="#232323"
              radius="50%"
              range={10}
              duration={1}
              timing="ease-in-out"
              count="infinite"
            />
          )}
          {title === "Ball" && (
            <Ball
              size={20}
              color="#232323"
              timing="ease-in-out"
              count="infinite"
            />
          )}
          {title === "Skeleton" && (
            <Skeleton
              width="100px"
              height="100px"
              radius="30%"
              duration={1}
              timing="ease-in-out"
              count="infinite"
            />
          )}
        </div>
      </div>
      {content && (
        <div className="mt-9 mb-6">
          <div className="mb-3 text-lg">| Code</div>
          <div className="flex flex-col pc:flex-row my-1">
            <div className="mr-0 pc:mr-6">
              {title === "Bounce" || title === "Fade" ? (
                <CodeBox
                  title={title || ""}
                  name={content.code.name}
                  range={content.code.range}
                  duration={1.5}
                  timing="ease-in-out"
                  count="infinite"
                />
              ) : null}
              {title === "Pulse" || title === "Ball" || title === "Skeleton" ? (
                <CodeBox2
                  title={title || ""}
                  size={content.code.size}
                  color={content.code.color}
                  fillColor={content.code.fillColor}
                  duration={content.code.duration}
                  width={content.code.width}
                  height={content.code.height}
                  radius={content.code.radius}
                  timing={content.code.timing}
                  count={content.code.count}
                />
              ) : null}
            </div>
            <div className="mt-5 pc:mt-0">
              <Table text={content.text} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
