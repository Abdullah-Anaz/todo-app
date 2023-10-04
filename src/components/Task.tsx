import React from 'react'
import Image from 'next/image';

function Task({priority, todo, completed, createdAt}: any) {
  const date = new Date(createdAt);

 const formattedDate = new Date(date).toLocaleDateString("en-US", {
   month: "short",
   day: "numeric",
 });

  return (
    <div className="w-full flex flex-col lg:flex-row px-[16px] py-[12px] gap-[8px] items-start lg:items-center border-solid border-b-[1px] border-[#D0D5DD]">
      <div
        className={`w-[20px] h-[20px] ${
          priority == "LOW"
            ? "bg-[#2F80ED]"
            : priority == "MEDIUM"
            ? "bg-[#F2C94C]"
            : priority == "HIGH"
            ? "bg-[#EB5757]"
            : "bg-white"
        } flex items-center justify-center rounded-[4px]`}
      >
        <Image src={"/bell-ringing.svg"} width={12} height={12} alt={"bell"} />
      </div>

      <div className="text-[14px] font-normal leading-[24px] flex flex-col flex-1 gap-[8px]">
        <div>{todo}</div>
        {!completed && (
          <div>
            <p className="hover:cursor-pointer text-[#BC006D] text-[12px] font-medium leading-[22px] w-[fit-content]">
              Mark as done
            </p>
          </div>
        )}
      </div>

      <div
        className={`mr-[6px] inline-flex py-[2px] lg:px-[8px] justify-center items-center gap-[6px] rounded-[16px] ${
          completed ? "bg-[#E8F5E9]" : "bg-[#f2c94c1a]"
        }`}
      >
        <p
          className={`${
            completed ? "text-[#219653]" : "text-[#F2C94C]"
          } text-[12px] font-medium leading-[22px]`}
        >
          {completed ? "Done" : "In Progress"}
        </p>
      </div>

      <div className="text-[12px] text-[#757575] font-normal leading-[22px]">
        {formattedDate}
      </div>
    </div>
  );
}

export default Task