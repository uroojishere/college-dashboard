import { ExternalLink, Pencil } from 'lucide-react';

export default function ViewCollege() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex">
      {/* Sidebar is assumed to be already part of layout */}

      <div className="flex flex-col w-full px-[40px] py-[32px] gap-[20px]">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500">Colleges / <span className="text-gray-900 font-medium">Newton College</span></div>

        {/* Admin Header */}
        <div className="flex justify-between items-center h-[50px]">
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-gray-900">Newton College</span>
            <span className="text-sm text-gray-500">Last updated by Sam Ross on July 20, 2025</span>
          </div>
          <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium h-[40px]">
            <Pencil className="w-4 h-4" /> Edit College
          </button>
        </div>

        {/* Tabs */}
        <div className="flex bg-[#FAFAFA] border border-[#E9EAEB] rounded-[10px] px-4 py-2 gap-4">
          <button className="bg-white text-sm font-medium rounded-lg px-4 py-2 shadow-sm">Overview</button>
          <button className="text-sm text-gray-600 px-4 py-2">Campuses & Locations</button>
          <button className="text-sm text-gray-600 px-4 py-2">Introduction Video</button>
        </div>

        {/* Overview Section */}
        <div className="flex flex-col bg-white border border-gray-200 rounded-2xl p-8 gap-8">
          <div className="flex gap-8">
            <div className="flex flex-col gap-6 flex-1">
              <div>
                <label className="block text-sm text-gray-500 mb-1">Title</label>
                <a href="#" className="font-medium text-sm text-indigo-700 underline inline-flex items-center gap-1">
                  Newton College <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">CRICOS Provider Code</label>
                <a href="#" className="font-medium text-sm text-indigo-700 underline inline-flex items-center gap-1">
                  011449J <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">RTO Code</label>
                <a href="#" className="font-medium text-sm text-indigo-700 underline inline-flex items-center gap-1">
                  011449J <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Status</label>
                <div className="text-sm text-green-700 font-medium bg-green-50 px-3 py-1 rounded-full w-fit">
                  • Active
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-[200px] h-[120px] border border-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
              <img src="/newton-logo.png" alt="Newton College Logo" className="object-contain h-full" />
            </div>
          </div>

          {/* Introduction */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-1">Introduction</h4>
            <p className="text-sm text-gray-700">
              This qualification reflects the role of individuals who work in accounting and bookkeeping jobs. This course
              provides skills and knowledge in financial record keeping, preparing business activity statements, and general
              ledger reconciliation, preparing financial reports, payroll, and computing GST.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
