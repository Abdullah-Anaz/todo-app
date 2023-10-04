import React from "react";

function SideBar() {
  return (
    <div className="min-h-[100vh] bg-[#33074F] w-[50px] lg:flex flex-[0.2] flex-col hidden">
      <div className="h-[80px] bg-[#ebe6ed1a] flex justify-center items-center text-white">
        <h3 className="non-italic text-customFontOne">Acmy Solutions</h3>
      </div>

      <div className="flex px-[12px] py-[8px] flex-row items-start gap-[8px] mt-[60px] ml-[16px] mr-[16px] rounded-[24px] bg-[#ebe6ed1a] text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3 9L9.65533 13.7538C9.85422 13.8959 10.1267 13.8733 10.2995 13.7005L13.7005 10.2995C13.8733 10.1267 14.1458 10.1041 14.3447 10.2462L21 15M6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <p className="text-[16px] non-italic font-normal leading-[24px]">
          Dashboard
        </p>
      </div>
    </div>
  );
}

export default SideBar;
