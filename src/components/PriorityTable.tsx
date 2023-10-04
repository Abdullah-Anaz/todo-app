import React from 'react'
import PieChart from './PieChart';

function PriorityTable() {
  return (
    <div className="w-full rounded-[8px] border-solid border-[1px] border-[#D0D5DD] flex flex-col items-start">
      <div className="w-full pt-[12px] pb-[15px] flex-col justify-center items-start gap-[16px] border-solid border-b-[1px] border-[#D0D5DD]">
        <p className="ml-[16px] mr-[24px] text-[16px] font-medium leading-[24px]">
          Tasks Priorities
        </p>
      </div>

      <div className="w-full flex justify-center items-center">
        <PieChart />
      </div>
    </div>
  );
}

export default PriorityTable