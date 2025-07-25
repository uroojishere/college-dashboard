import { useState } from "react";
import { UploadCloud, Trash2, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Topbar from "../components/Topbar";

type Props = {
  isEditMode?: boolean;
  hideHeader?: boolean;
  hideActions?: boolean;
};

export default function IntroVideo({
  isEditMode = false,
  hideHeader = false,
  hideActions = false,
}: Props) {
  const [video, setVideo] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size <= 100 * 1024 * 1024) {
      setVideo(file);
      setIsUploading(true);
      setUploadProgress(0);

      const uploadInterval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(uploadInterval);
            setIsUploading(false);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 200);
    } else {
      alert("File must be under 100MB");
    }
  };

  const handleRemove = () => {
    setVideo(null);
    setUploadProgress(0);
    setIsUploading(false);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handlePublish = () => {
    navigate("/colleges/success");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen pb-24">
      <Topbar />

      {!hideHeader && (
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">
            Add new colleges
          </h1>
          <p className="text-gray-600 text-sm">
            Add college details to manage courses.
          </p>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-1">Introduction Video</h2>
        <p className="text-sm text-gray-600 mb-6">Upload College Introduction Video</p>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 flex flex-col items-center justify-center text-center bg-gray-50">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <UploadCloud className="w-6 h-6 text-gray-400" />
          </div>
          <label
            htmlFor="video-upload"
            className="text-blue-600 cursor-pointer text-sm font-medium hover:text-blue-700"
          >
            Click to upload
          </label>
          <input
            id="video-upload"
            type="file"
            accept=".mp4,.mov,.avi"
            onChange={handleFileChange}
            className="hidden"
          />
          <p className="text-sm text-gray-500 mt-1">or drag and drop</p>
          <p className="text-sm text-gray-500">
            MP4, MOV, AVI. Maximum file size: 100MB.
          </p>
        </div>

        {video && (
          <div className="mt-6 space-y-4">
            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-gray-400" />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-blue-600">{video.name}</span>
                    <span className="text-xs text-gray-500">
                      {Math.round(video.size / (1024 * 1024))} MB of 100 MB
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleRemove}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-500" />
                </button>
              </div>
            </div>

            {(isUploading || uploadProgress > 0) && (
              <div className="flex items-center space-x-3">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(uploadProgress, 100)}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {Math.round(Math.min(uploadProgress, 100))}%
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {!hideActions && !isEditMode && (
        <div className="fixed bottom-0 left-64 right-0 bg-white border-t border-gray-200 px-6 py-4 shadow-lg z-50">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">Final Step (3/3)</p>
              <p className="text-sm text-gray-500">Introduction Video</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleBack}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Back
              </button>
              <button
                onClick={handlePublish}
                className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 flex items-center"
              >
                Publish College
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
