import Image from 'next/image'
import React from 'react'

function ActivityFeed({ profile, name, task, date }: any) {
  return (
    <div className="w-full inline-flex items-start gap-[8px] border-solid border-b-[1px] border-[#D0D5DD] last:border-none py-[16px]">
      <Image src={profile} width={32} height={32} alt="profile-img" />

      <div className="flex flex-col items-start">
        <p className="text-[14px] font-semibold leading-[24px]">
          {name} <span className="font-normal">created</span>{" "}
          <span className="text-[#BC006D]">{task}</span>
        </p>

        <p className="text-[12px] font-normal leading-[22px] text-[#757575]">
          {date}
        </p>
      </div>
    </div>
  );
}

export default ActivityFeed