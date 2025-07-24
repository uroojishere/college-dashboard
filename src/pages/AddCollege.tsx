import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Topbar from "../components/Topbar";

type Props = {
  isEditMode?: boolean;
  hideActions?: boolean;
};

export default function AddCollege({ isEditMode = false, hideActions = false }: Props) {
  const navigate = useNavigate();

  const [collegeData, setCollegeData] = useState({
    name: "",
    website: "",
    cricosCode: "",
    cricosCodeLink: "",
    rtoCode: "",
    rtoCodeLink: "",
    introduction: "",
    logo: null as File | null,
    status: "Active",
  });

  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedFileName, setUploadedFileName] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCollegeData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setCollegeData((prev) => ({ ...prev, logo: file }));
      setUploadedFileName(file.name);
      setUploadProgress(0);
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 50) {
            clearInterval(interval);
            return 50;
          }
          return prev + 10;
        });
      }, 100);
    }
  };

  const handleCancel = () => navigate("/colleges");

  const handleNext = () => {
    console.log("College form submitted:", collegeData);
    if (isEditMode) {
      navigate("/colleges");
    } else {
      navigate("/colleges/add/campuses");
    }
  };

  const removeFile = () => {
    setCollegeData((prev) => ({ ...prev, logo: null }));
    setUploadedFileName("");
    setUploadProgress(0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Topbar />

      <div className="max-w-4xl mx-auto p-6">
        {!hideActions && (
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">
              {isEditMode ? "Edit College" : "Add new colleges"}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              {isEditMode
                ? "Edit college details to manage courses."
                : "Add college details to manage courses."}
            </p>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Overview</h2>

          <form className="space-y-6">
            {/* Name and Website */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  name="name"
                  value={collegeData.name}
                  onChange={handleChange}
                  placeholder="Newton College"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 py-2 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-md">
                    https://
                  </span>
                  <input
                    name="website"
                    value={collegeData.website}
                    onChange={handleChange}
                    placeholder="www.newton.edu.au"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* CRICOS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">CRICOS Provider Code</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 py-2 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-md">
                    CRICOS
                  </span>
                  <input
                    name="cricosCode"
                    value={collegeData.cricosCode}
                    onChange={handleChange}
                    placeholder="A8290"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">CRICOS Code Link</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 py-2 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-md">
                    https://
                  </span>
                  <input
                    name="cricosCodeLink"
                    value={collegeData.cricosCodeLink}
                    onChange={handleChange}
                    placeholder="www.training.gov.au/..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* RTO */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">RTO Code</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 py-2 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-md">
                    RTO
                  </span>
                  <input
                    name="rtoCode"
                    value={collegeData.rtoCode}
                    onChange={handleChange}
                    placeholder="A8290"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">RTO Code Link</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 py-2 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-md">
                    https://
                  </span>
                  <input
                    name="rtoCodeLink"
                    value={collegeData.rtoCodeLink}
                    onChange={handleChange}
                    placeholder="www.training.gov.au/..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Introduction</label>
              <textarea
                name="introduction"
                value={collegeData.introduction}
                onChange={handleChange}
                placeholder="Enter an overview of the college..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              />
            </div>

            {/* Logo Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload Logo</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                {!uploadedFileName ? (
                  <>
                    <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <div className="text-sm">
                      <label htmlFor="file-upload" className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer">
                        Click to upload
                      </label>
                      <span className="text-gray-500"> or drag and drop</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">JPEG, PNG or SVG. (max. 600×400px)</p>
                    <input
                      id="file-upload"
                      type="file"
                      accept=".jpeg,.jpg,.png,.svg"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </>
                ) : (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{uploadedFileName}</p>
                          <p className="text-xs text-gray-500">80 KB of 100 KB</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-900 mr-3">{uploadProgress}%</span>
                        <button
                          type="button"
                          onClick={removeFile}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <div className="relative">
                <select
                  name="status"
                  value={collegeData.status}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
          </form>
        </div>

        <div className="pb-20" />
      </div>

      {!hideActions && !isEditMode && (
        <div className="fixed bottom-0 left-[260px] right-0 bg-white border-t border-gray-200 px-6 py-4 shadow-lg z-50">

          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">Next Step (1/3)</p>
              <p className="text-sm text-gray-500">Campuses & Locations</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleCancel}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleNext}
                className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 flex items-center"
              >
                Next
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
