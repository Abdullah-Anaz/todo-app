import React from "react";
import ActivityFeed from "./ActivityFeed";
import activities from "../dummyData"

function ActivityFeeds() {
  return (
    <div className="w-full rounded-[8px] border-solid border-[1px] border-[#D0D5DD] flex flex-col items-start flex-1">
      <div className="w-full pt-[12px] pb-[15px] flex-col justify-center items-start gap-[16px] border-solid border-b-[1px] border-[#D0D5DD]">
        <p className="ml-[16px] mr-[24px] text-[16px] font-medium leading-[24px]">
          Activity Feed
        </p>
      </div>

      <div className="px-[16px] w-full">
        {activities.map(({id, name, task, profile, date}) => (
          <ActivityFeed key={id} name={name} profile={profile} task={task} date={date}/>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeeds;
