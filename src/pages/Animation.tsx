import { Bounce } from "react-basic-motion";
import CodeBox from "../component/common/CodeBox";
import Table from "../component/common/Table";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getContent } from "../component/contents/content";
import { ContentType } from "../type/content";

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

  const text = [
    {
      name: "name",
      type: "string",
      value: '"x", "y"',
      unit: "-",
    },
    {
      name: "range",
      type: "number",
      value: "any number you want",
      unit: "px",
    },
    {
      name: "duration",
      type: "number",
      value: "any number you want",
      unit: "s",
    },
    {
      name: "timing",
      type: "string",
      value: '"linear", "ease-in", "ease-out", "ease-in-out"',
      unit: "-",
    },
    {
      name: "count",
      type: "number | string",
      value: '"forwards", "infinite" or any number you want',
      unit: "-",
    },
  ];
  return (
    <div className="pl-[330px] p-10 text-sm">
      <div className="text-3xl font-bold">{title}</div>
      {content && <div>{content.description}</div>}
      <div className="mt-9 mb-6">
        <div className="mb-3 text-lg">| Example</div>
        <div className="w-[300px] h-[170px] text-center bg-white shadow rounded-xl flex justify-center items-center mx-1">
          <Bounce
            type="x"
            range={10}
            duration={1}
            timing="ease-in-out"
            count="infinite"
          >
            <div>Bounce!</div>
          </Bounce>
        </div>
      </div>
      {content && (
        <div className="mt-9 mb-6">
          <div className="mb-3 text-lg">| Code</div>
          <div className="flex my-1">
            <div className="">
              <CodeBox
                title="Bounce"
                name="x"
                range={10}
                duration={1}
                timing="ease-in-out"
                count="infinite"
              />
            </div>
            <div className="ml-6">{/* <Table text={content.text} /> */}</div>
          </div>
        </div>
      )}
    </div>
  );
}
