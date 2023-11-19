import { Ball, Skeleton } from "react-basic-motion";
import Table from "../component/common/Table";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getContent } from "../component/api/content";
import { ContentType } from "../type/content";
import CodeBox2 from "../component/common/CodeBox2";

export default function Loading() {
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
          <div className="flex my-1">
            <div className="">
              {title === "Ball" || title === "Skeleton" ? (
                <CodeBox2
                  title={title || ""}
                  size={content.code.size}
                  color={content.code.color}
                  duration={content.code.duration}
                  width={content.code.width}
                  height={content.code.height}
                  radius={content.code.radius}
                  timing={content.code.timing}
                  count={content.code.count}
                />
              ) : null}
            </div>
            <div className="ml-6">
              <Table text={content.text} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
