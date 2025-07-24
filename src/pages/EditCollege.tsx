import { ArrowLeft, Upload } from "lucide-react";

export default function EditCollege() {
  return (
    <div className="bg-[#F9FAFB] min-h-screen py-6 px-4">
      {/* Top Spacer for Global Topbar */}
      <div className="h-[64px]" />

      {/* Admin Header */}
      <div className="max-w-[860px] mx-auto flex justify-between items-center px-0 mb-6">
        {/* Left Title */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Edit College</h2>
          <p className="text-sm text-gray-500 mt-0.5">Edit college details to manage courses.</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="text-gray-700 border border-gray-300 px-4 py-2 rounded-md text-sm font-medium">Cancel</button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium">✓ Publish Edits</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-6 max-w-[860px] mx-auto">
        {/* Overview */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="text-lg font-semibold text-gray-900 mb-6">Overview</div>
          
          {/* Name and Website Row */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Name</label>
              <input
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                defaultValue="Newton College"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Website</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 py-2 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                  Https://
                </span>
                <input
                  className="flex-1 border border-gray-300 rounded-r-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  defaultValue="www.newton.edu.au"
                />
              </div>
            </div>
          </div>

          {/* CRICOS Provider Code and CRICOS Code Link Row */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">CRICOS Provider Code</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 py-2 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                  CRICOS
                </span>
                <input
                  className="flex-1 border border-gray-300 rounded-r-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  defaultValue="A8290"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">CRICOS Code Link</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 py-2 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                  https://
                </span>
                <input
                  className="flex-1 border border-gray-300 rounded-r-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="www.training.gov.au/..."
                />
              </div>
            </div>
          </div>

          {/* RTO Code and RTO Code Link Row */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">RTO (Registered Training Organisation) Code</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 py-2 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                  RTO
                </span>
                <input
                  className="flex-1 border border-gray-300 rounded-r-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  defaultValue="A8290"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">RTO Code Link</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 py-2 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                  https://
                </span>
                <input
                  className="flex-1 border border-gray-300 rounded-r-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="www.training.gov.au/..."
                />
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div>
            <label className="text-sm font-medium text-gray-700">Introduction</label>
            <textarea
              className="mt-2 border border-gray-300 rounded-md px-3 py-3 text-sm w-full focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              rows={4}
              defaultValue="This qualification reflects the role of individuals who work in accounting and bookkeeping jobs. This course provides skills and knowledge in financial record keeping, preparing business activity statements, and general ledger reconciliation, preparing financial reports, payroll, and computing GST."
            />
          </div>

          {/* Upload Logo */}
          <div className="mt-6">
            <label className="text-sm font-medium text-gray-700">Upload Logo</label>
            <div className="mt-2 border border-gray-300 rounded-md p-4 flex flex-col items-center justify-center text-sm text-gray-500 gap-2">
              <Upload className="w-5 h-5" />
              <span>Click to upload or drag and drop</span>
              <span className="text-xs">JPEG, PNG or SVG. Max 600x400px</span>
            </div>
            <div className="mt-2 text-sm text-gray-700">primary_logo_black.png (80 KB of 100 KB)</div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden mt-1">
              <div className="h-full w-[50%] bg-indigo-600" />
            </div>
          </div>

          {/* Status */}
          <div className="mt-6">
            <label className="text-sm font-medium text-gray-700">Status</label>
            <select className="mt-2 border border-gray-300 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
              <option>Active</option>
              <option>Paused</option>
              <option>Draft</option>
              <option>Archived</option>
            </select>
          </div>
        </div>

        {/* Campuses */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="text-lg font-semibold mb-4">Campuses & Locations</div>
          <div className="grid grid-cols-2 gap-4">
            <input className="border border-gray-300 rounded-md px-4 py-2 text-sm" placeholder="Campus Name" defaultValue="Melbourne" />
            <input className="border border-gray-300 rounded-md px-4 py-2 text-sm" placeholder="Address" defaultValue="Level 10, 190 Queen St., Melbourne, VIC 3000" />
            <input className="border border-gray-300 rounded-md px-4 py-2 text-sm" placeholder="Campus Name" />
            <input className="border border-gray-300 rounded-md px-4 py-2 text-sm" placeholder="Address" />
          </div>
          <button className="mt-4 text-sm text-indigo-600 font-medium">+ Add New Campus</button>
        </div>

        {/* Video Upload */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="text-lg font-semibold mb-4">Introduction Video</div>
          <div className="border border-gray-300 rounded-md p-4 flex flex-col items-center justify-center text-sm text-gray-500 gap-2">
            <Upload className="w-5 h-5" />
            <span>Click to upload or drag and drop</span>
            <span className="text-xs">MP4, MOV, AVI. Max file size: 100MB</span>
          </div>
          <div className="mt-2 text-sm text-gray-700">Introduction video.mp4 (80 MB of 100 MB)</div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden mt-1">
            <div className="h-full w-[80%] bg-indigo-600" />
          </div>
        </div>
      </div>
    </div>
  );
}