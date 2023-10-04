"use client";
import React from "react";
import Header from "./Header";
import WelcomeBanner from "./WelcomeBanner";
import DashBoard from "./DashBoard";
import ActivityFeeds from "./ActivityFeeds";
import PriorityTable from "./PriorityTable"

function Main() {
  return (
    <div className="flex-[1] lg:flex-[0.8]">
      <Header />
      <div className="p-[24px] flex flex-col gap-[24px]">
        <WelcomeBanner />

        <div className="flex flex-col lg:flex-row gap-[24px]">
          <DashBoard />
          <div className="flex flex-col flex-[0.4] gap-[24px]">
            <ActivityFeeds />
            <PriorityTable/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
