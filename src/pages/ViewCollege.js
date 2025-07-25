import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import CollegeOverviewTab from "../components/CollegeOverviewTab";
import CollegeCampuses from "../components/CollegeCampuses";
import CollegeVideo from "../components/CollegeVideo";
import newtonCollegeLogo from "../assets/Newton-college.png";
const CollegeView = () => {
    const [selectedTab, setSelectedTab] = useState("overview");
    return (_jsxs("div", { className: "bg-[#F9FAFB] min-h-screen p-8", children: [_jsxs("div", { className: "flex justify-between items-start w-[1104px] mb-6", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("img", { src: newtonCollegeLogo, alt: "Newton College Logo", className: "w-12 h-12 rounded-lg object-contain" }), _jsxs("div", { children: [_jsx("h1", { className: "text-xl font-semibold text-gray-900", children: "Newton College" }), _jsx("p", { className: "text-sm text-gray-500", children: "Last updated by Sam Ross on July 20, 2025" })] })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("button", { className: "bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium", children: "Edit College" }), _jsx(BsThreeDotsVertical, { className: "text-xl text-gray-600 cursor-pointer" })] })] }), _jsxs("div", { className: "flex w-[1104px] h-[44px] rounded-lg border border-[#E9EAEB] overflow-hidden mb-8", children: [_jsx("button", { onClick: () => setSelectedTab("overview"), className: `w-1/3 h-full text-sm font-medium ${selectedTab === "overview"
                            ? "bg-white text-gray-900 shadow-sm"
                            : "text-gray-600 hover:bg-gray-100"}`, children: "Overview" }), _jsx("button", { onClick: () => setSelectedTab("campuses"), className: `w-1/3 h-full text-sm font-medium ${selectedTab === "campuses"
                            ? "bg-white text-gray-900 shadow-sm"
                            : "text-gray-600 hover:bg-gray-100"}`, children: "Campuses & Locations" }), _jsx("button", { onClick: () => setSelectedTab("video"), className: `w-1/3 h-full text-sm font-medium ${selectedTab === "video"
                            ? "bg-white text-gray-900 shadow-sm"
                            : "text-gray-600 hover:bg-gray-100"}`, children: "Introduction Video" })] }), selectedTab === "overview" && _jsx(CollegeOverviewTab, {}), selectedTab === "campuses" && _jsx(CollegeCampuses, {}), selectedTab === "video" && _jsx(CollegeVideo, {})] }));
};
export default CollegeView;
