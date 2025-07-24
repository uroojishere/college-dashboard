import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import CollegeOverviewTab from "../components/CollegeOverviewTab";
import CollegeCampuses from "../components/CollegeCampuses";
import CollegeVideo from "../components/CollegeVideo";
import newtonCollegeLogo from "../assets/Newton-college.png";

const CollegeView = () => {
  const [selectedTab, setSelectedTab] = useState("overview");
  
  return (
    <div className="bg-[#F9FAFB] min-h-screen p-8">
      {/* Header */}
      <div className="flex justify-between items-start w-[1104px] mb-6">
        <div className="flex items-center gap-4">
          <img 
            src={newtonCollegeLogo} 
            alt="Newton College Logo" 
            className="w-12 h-12 rounded-lg object-contain"
          />
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Newton College</h1>
            <p className="text-sm text-gray-500">
              Last updated by Sam Ross on July 20, 2025
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium">
            Edit College
          </button>
          <BsThreeDotsVertical className="text-xl text-gray-600 cursor-pointer" />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex w-[1104px] h-[44px] rounded-lg border border-[#E9EAEB] overflow-hidden mb-8">
        <button
          onClick={() => setSelectedTab("overview")}
          className={`w-1/3 h-full text-sm font-medium ${
            selectedTab === "overview"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setSelectedTab("campuses")}
          className={`w-1/3 h-full text-sm font-medium ${
            selectedTab === "campuses"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          Campuses & Locations
        </button>
        <button
          onClick={() => setSelectedTab("video")}
          className={`w-1/3 h-full text-sm font-medium ${
            selectedTab === "video"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          Introduction Video
        </button>
      </div>

      {/* Content Area */}
      {selectedTab === "overview" && <CollegeOverviewTab />}
      {selectedTab === "campuses" && <CollegeCampuses />}
      {selectedTab === "video" && <CollegeVideo />}
    </div>
  );
};

export default CollegeView;