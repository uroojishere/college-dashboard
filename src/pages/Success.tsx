import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-8 bg-[#F9FAFB]">
      <div className="max-w-[768px] mx-auto mt-20 bg-white border border-gray-200 rounded-xl p-10 text-center shadow-sm">
        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
          <svg
            className="w-6 h-6 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          College Published Successfully
        </h2>
        <p className="text-sm text-gray-700 mb-6">
          The college <strong>Newton College</strong> is now live and visible to students.
        </p>
        <div className="flex justify-center gap-3">
          <button
            onClick={() => navigate("/colleges")}
            className="text-sm px-4 py-2 border rounded-md border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Back to Colleges
          </button>
          <button
            onClick={() => navigate("/colleges/view/1")}
            className="text-sm px-4 py-2 border rounded-md border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            View College
          </button>
          <button
            onClick={() => navigate("/courses/add")}
            className="text-sm px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            + Add Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
