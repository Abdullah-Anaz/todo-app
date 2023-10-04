import React, { useEffect, useState } from "react";
import Task from "./Task";
import { useGetDataQuery } from "@/redux/services/dataApi";

function Dashboard() {
  const [startIndex, setStartIndex] = useState(0);
  const [pages, setPages] = useState([1]);
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, isFetching, data, error } = useGetDataQuery(null);

  const handlePrevClick = () => {
    if(data && startIndex - 8 >= 0){
      setStartIndex(startIndex - 8);
      setCurrentPage(currentPage-1);
    }
    
  };

  const handleNextClick = () => {
    if (data && startIndex + 8 < data.length) {
      setStartIndex(startIndex + 8);
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page:number)=> {
    setStartIndex(page*8);
    setCurrentPage(page+1);
  }

  useEffect(() => {
    let page = []
    if(data){
      for(let i = 0; i <= (data?.length / 8); i++){
        page.push(i)
      }

      setPages(page);
    }
  },[data, isLoading, isFetching])

  return (
    <div className="w-full rounded-[8px] border-solid border-[1px] border-[#D0D5DD] flex flex-col items-start flex-[0.6]">
      <div className="w-full text-[16px] font-medium leading-[24px] px-[16px] py-[12px] border-solid border-b-[1px] border-[#D0D5DD]">
        Tasks
      </div>

      <div className="flex-1 w-full">
        {error ? (
          <p className="px-[16px] py-[12px]">Oh no, there was an error</p>
        ) : isLoading || isFetching ? (
          <p className="px-[16px] py-[12px]">Loading...</p>
        ) : data ? (
          data
            .slice(startIndex, startIndex + 8)
            .map((data) => (
              <Task
                key={data.id}
                priority={data.priority}
                todo={data.todo}
                completed={data.completed}
                createdAt={data.createdAt}
              />
            ))
        ) : null}
      </div>

      <div className="w-full flex justify-center items-center pt-[26px] pb-[24px] gap-[16px]">
        <div
          className="flex flex-row w-[32px] h-[32px] justify-center items-center rounded-[8px] border-solid border-[1px] border-[#D0D5DD] hover:cursor-pointer"
          onClick={handlePrevClick}
        >
          {"<"}
        </div>

        {pages.map((page): any => (
          <div
            className={`flex flex-row ${
              currentPage == page + 1
                ? "text-[#BC006D] border-[#BC006D]"
                : "text-black border-[#D0D5DD]"
            } w-[32px] h-[32px] justify-center items-center rounded-[8px] border-solid border-[1px] hover:cursor-pointer`}
            onClick={() => handlePageClick(page)}
            key={page}
          >
            {page + 1}
          </div>
        ))}

        <div
          className="flex flex-row w-[32px] h-[32px] justify-center items-center rounded-[8px] border-solid border-[1px] border-[#D0D5DD] hover:cursor-pointer"
          onClick={handleNextClick}
        >
          {">"}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
