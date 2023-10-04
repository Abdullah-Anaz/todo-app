"use client";
import SideBar from "@/components/SideBar";
import Main from "@/components/Main";
import { useGetDataQuery } from "@/redux/services/dataApi";

export default function Home() {
  const { isLoading, isFetching, data, error } = useGetDataQuery(null);

  return (
    <div className="flex h-full">
      <SideBar />
      <Main />
    </div>
  );
}
