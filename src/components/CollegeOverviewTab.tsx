import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import newtonCollegeLogo from "../assets/Newton-college.png";

const CollegeOverviewTab = () => {
  return (
    <>
      {/* Info Blocks */}
      <div className="flex gap-[20px] w-[1104px] mb-8">
        {/* Left Box */}
        <div className="bg-white w-[786px] h-[237px] rounded-2xl border border-gray-200 p-8 shadow-xs">
          <div className="grid grid-cols-2 gap-x-[64px] mb-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Title</p>
              <a href="#" className="text-sm font-semibold inline-flex items-center gap-1 text-black underline">
                Newton College <BsBoxArrowUpRight />
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Website</p>
              <a href="#" className="text-sm font-semibold inline-flex items-center gap-1 text-black underline">
                www.newton.edu.au <BsBoxArrowUpRight />
              </a>
            </div>
          </div>
          <hr className="mb-6 border-gray-200" />
          <div className="grid grid-cols-3 gap-x-[64px]">
            <div>
              <p className="text-sm text-gray-500 mb-1">CRICOS Provider Code</p>
              <a href="#" className="text-sm font-semibold inline-flex items-center gap-1 text-black underline">
                011449J <BsBoxArrowUpRight />
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">RTO Code</p>
              <a href="#" className="text-sm font-semibold inline-flex items-center gap-1 text-black underline">
                011449J <BsBoxArrowUpRight />
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Status</p>
              <span className="inline-flex items-center px-3 py-[2px] rounded-full bg-green-50 text-green-700 text-sm font-medium">
                • Active
              </span>
            </div>
          </div>
        </div>
        {/* Right Box: Logo */}
        <div className="bg-white w-[298px] h-[237px] rounded-2xl border border-gray-200 p-8 flex flex-col shadow-xs">
          <p className="text-sm font-medium mb-4">Logo</p>
          <img
            src={newtonCollegeLogo}
            alt="Newton College Logo"
            className="h-[120px] w-[200px] object-contain mx-auto"
          />
        </div>
      </div>
      {/* Introduction Box */}
      <div className="bg-white w-[1104px] h-[168px] rounded-2xl border border-gray-200 p-8 shadow-xs">
        <p className="text-sm font-medium text-gray-900 mb-2">Introduction</p>
        <p className="text-sm text-gray-700 w-[1040px] leading-relaxed">
          This qualification reflects the role of individuals who work in
          accounting and bookkeeping jobs. This course provides skills and
          knowledge in financial record keeping, preparing business activity
          statements, and general ledger reconciliation, preparing financial
          reports, payroll, and computing GST.
        </p>
      </div>
    </>
  );
};

export default CollegeOverviewTab;