import React from "react";
import SideNavbar from "../components/SideNavbar";

const Dashboard = () => {
  return (
    <div className="h-full flex">
      <SideNavbar />
      <div className="px-8 py-6 w-[50vw]">
        <iframe
          title="job"
          width="1140"
          height="541.25"
          src="https://app.powerbi.com/reportEmbed?reportId=492312fb-b30f-48f6-8b75-7c35844927b7&autoAuth=true&ctid=d1f14348-f1b5-4a09-ac99-7ebf213cbc81"
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
      </div>
    </div>
  );
};

export default Dashboard;
