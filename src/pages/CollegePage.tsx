import { useParams } from "react-router-dom";
import Topbar from "@/components/Topbar";

export default function CollegePage() {
  const { id } = useParams();

  const college = {
    title: "Newton College",
    website: "www.newton.edu.au",
    cricos: "011449J",
    rto: "011449J",
    status: "Active",
    statusColor: "green",
    logo: "/images/newton-logo.png",
    introduction:
      "This qualification reflects the role of individuals who work in accounting and bookkeeping jobs. This course provides skills and knowledge in financial record keeping, preparing business activity statements, and general ledger reconciliation, preparing financial reports, payroll, and computing GST.",
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Topbar />
      <div className="p-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              {college.title}
            </h1>
            <p className="text-sm text-gray-500">
              Last updated by Sam Ross on July 20, 2025
            </p>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium">
            Edit College
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button className="px-4 py-2 text-sm font-medium text-indigo-600 border-b-2 border-indigo-600">
            Overview
          </button>
          <button className="px-4 py-2 text-sm text-gray-600">Campuses & Locations</button>
          <button className="px-4 py-2 text-sm text-gray-600">Introduction Video</button>
        </div>

        {/* College Info Box */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 flex gap-6">
          <div className="flex-1 grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm text-gray-500 mb-1">Title</h4>
              <a
                href="#"
                className="text-sm font-medium text-indigo-600 hover:underline"
              >
                {college.title}
              </a>
            </div>
            <div>
              <h4 className="text-sm text-gray-500 mb-1">Website</h4>
              <a
                href={`https://${college.website}`}
                className="text-sm font-medium text-indigo-600 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {college.website}
              </a>
            </div>
            <div>
              <h4 className="text-sm text-gray-500 mb-1">CRICOS Provider Code</h4>
              <a
                href="#"
                className="text-sm font-medium text-indigo-600 hover:underline"
              >
                {college.cricos}
              </a>
            </div>
            <div>
              <h4 className="text-sm text-gray-500 mb-1">RTO Code</h4>
              <a
                href="#"
                className="text-sm font-medium text-indigo-600 hover:underline"
              >
                {college.rto}
              </a>
            </div>
            <div>
              <h4 className="text-sm text-gray-500 mb-1">Status</h4>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-green-800 bg-green-100 px-3 py-1 rounded-full w-fit">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                {college.status}
              </span>
            </div>
          </div>

          {/* Logo */}
          <div className="w-[298px] h-[237px] border border-dashed rounded-lg flex items-center justify-center bg-white">
            <img
              src={college.logo}
              alt={`${college.title} Logo`}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>

        {/* Introduction Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-sm font-semibold text-gray-800 mb-2">Introduction</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            {college.introduction}
          </p>
        </div>
      </div>
    </div>
  );
}
