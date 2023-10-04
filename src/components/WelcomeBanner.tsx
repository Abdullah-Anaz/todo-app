import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

function WelcomeBanner() {
  const [height, setHeight] = useState(0);
  const [display, setDisplay] = useState(true);
  const ref = useRef(null);

  const [windowWidth, setWindowWidth] = useState(0);

  const handleCloseClick = () => {
    setDisplay(false);
  }

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  useEffect(() => {
    if (ref.current) {
      setHeight((ref.current as HTMLElement).clientHeight);
    }
  }, [windowWidth]);

  return (
    <>
      {display && (
        <div className="w-full rounded-[8px] border-solid border-[1px] border-[#D0D5DD] flex flex-row items-start">
          <div ref={ref} className="flex-1 mt-[16px] mb-[16px] ml-[18px]">
            <h3 className="text-customFontOne">Welcome back, John Doe</h3>
            <p className="text-customFontTwo text-[#757575] leading-[24px]">
              The end of the year is coming. Are you planning your performance
              interviews? You can do this super efficiently with Acmy. <br />
              <a href="" className="text-[#BC006D] underline">
                Look here for more information
              </a>
            </p>
          </div>

          <div className={`h-[${height + 32}px]`}>
            <Image
              alt="h"
              src="/Group1770.svg"
              width={0}
              height={0}
              style={{
                width: "167px",
                height: height + 32,
                objectFit: "cover",
              }}
            />
          </div>

          <div className="mt-[16px] mr-[18px] ml-[24px] hover:cursor-pointer" onClick={handleCloseClick}>
            <Image
              src="/Close.svg"
              width={24}
              height={24}
              alt="Profile Picture"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default WelcomeBanner;
