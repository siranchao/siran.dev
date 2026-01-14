"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

function selectTheme(index: number) {
  let val: string = "";
  switch (index) {
    case 0:
      val = "info";
      break;
    case 1:
      val = "success";
      break;
    case 2:
      val = "warning";
      break;
    case 3:
      val = "accent";
      break;
    default:
      val = "error";
      break;
  }
  return val;
}

export default function Card({ record }: { record: any }) {
  const router = useRouter();
  const clickCard = () => {
    router.push(`/projects/${record.path}`);
  };

  return (
    <div
      className="bg-gray-100 rounded-lg shadow-md flex items-center cursor-pointer hover:shadow-2xl hover:-translate-y-1 duration-200 ease-in w-full h-36 dark:bg-gray-200"
      onClick={clickCard}
    >
      <div className="w-1/3 relative h-full">
        {record.new && (
          <span className="absolute top-2 left-2 z-10 px-2 py-0.5 text-[10px] font-medium rounded-full bg-red-500 text-white">
            NEW
          </span>
        )}

        {record.imgUrl && (
          <Image
            src={record.imgUrl}
            alt="Desc Image"
            width={60}
            height={60}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg"
          />
        )}
      </div>
      <div className="w-2/3 h-full p-2">
        <div className="flex flex-nowrap overflow-hidden">
          {record.tag && record.tag.length > 0
            ? record.tag.map(
                (tag: string, index: number) =>
                  index < 3 && (
                    <div
                      key={index}
                      className={`badge badge-sm badge-outline mb-2 mr-2 badge-${selectTheme(
                        index
                      )}`}
                    >
                      <span className="whitespace-nowrap">{tag}</span>
                    </div>
                  )
              )
            : null}
        </div>
        <p className="text-md font-semibold mb-2 line-clamp-1 dark:text-gray-800">
          {record.title}
        </p>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
          {record.description}
        </p>
        <p className="text-gray-400 text-xs text-right">{record.date}</p>
      </div>
    </div>
  );
}
