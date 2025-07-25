import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { UploadCloud, Trash2, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Topbar from "../components/Topbar";
export default function IntroVideo({ isEditMode = false, hideHeader = false, hideActions = false, }) {
    const [video, setVideo] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const navigate = useNavigate();
    const handleFileChange = (e) => {
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
        }
        else {
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
    return (_jsxs("div", { className: "max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen pb-24", children: [_jsx(Topbar, {}), !hideHeader && (_jsxs("div", { className: "mb-6", children: [_jsx("h1", { className: "text-2xl font-semibold text-gray-900 mb-1", children: "Add new colleges" }), _jsx("p", { className: "text-gray-600 text-sm", children: "Add college details to manage courses." })] })), _jsxs("div", { className: "bg-white rounded-lg shadow-sm border border-gray-200 p-6", children: [_jsx("h2", { className: "text-lg font-medium text-gray-900 mb-1", children: "Introduction Video" }), _jsx("p", { className: "text-sm text-gray-600 mb-6", children: "Upload College Introduction Video" }), _jsxs("div", { className: "border-2 border-dashed border-gray-300 rounded-lg p-12 flex flex-col items-center justify-center text-center bg-gray-50", children: [_jsx("div", { className: "w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4", children: _jsx(UploadCloud, { className: "w-6 h-6 text-gray-400" }) }), _jsx("label", { htmlFor: "video-upload", className: "text-blue-600 cursor-pointer text-sm font-medium hover:text-blue-700", children: "Click to upload" }), _jsx("input", { id: "video-upload", type: "file", accept: ".mp4,.mov,.avi", onChange: handleFileChange, className: "hidden" }), _jsx("p", { className: "text-sm text-gray-500 mt-1", children: "or drag and drop" }), _jsx("p", { className: "text-sm text-gray-500", children: "MP4, MOV, AVI. Maximum file size: 100MB." })] }), video && (_jsxs("div", { className: "mt-6 space-y-4", children: [_jsx("div", { className: "border border-gray-200 rounded-lg p-4 bg-white", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center space-x-3", children: [_jsx(FileText, { className: "w-5 h-5 text-gray-400" }), _jsxs("div", { className: "flex flex-col", children: [_jsx("span", { className: "text-sm font-medium text-blue-600", children: video.name }), _jsxs("span", { className: "text-xs text-gray-500", children: [Math.round(video.size / (1024 * 1024)), " MB of 100 MB"] })] })] }), _jsx("button", { onClick: handleRemove, className: "p-1 hover:bg-gray-100 rounded", children: _jsx(Trash2, { className: "w-4 h-4 text-gray-400 hover:text-red-500" }) })] }) }), (isUploading || uploadProgress > 0) && (_jsxs("div", { className: "flex items-center space-x-3", children: [_jsx("div", { className: "flex-1 bg-gray-200 rounded-full h-2", children: _jsx("div", { className: "bg-blue-600 h-2 rounded-full transition-all duration-300", style: { width: `${Math.min(uploadProgress, 100)}%` } }) }), _jsxs("span", { className: "text-sm font-medium text-gray-700", children: [Math.round(Math.min(uploadProgress, 100)), "%"] })] }))] }))] }), !hideActions && !isEditMode && (_jsx("div", { className: "fixed bottom-0 left-64 right-0 bg-white border-t border-gray-200 px-6 py-4 shadow-lg z-50", children: _jsxs("div", { className: "max-w-4xl mx-auto flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-900", children: "Final Step (3/3)" }), _jsx("p", { className: "text-sm text-gray-500", children: "Introduction Video" })] }), _jsxs("div", { className: "flex gap-3", children: [_jsx("button", { onClick: handleBack, className: "px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50", children: "Back" }), _jsxs("button", { onClick: handlePublish, className: "px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 flex items-center", children: ["Publish College", _jsx("svg", { className: "w-4 h-4 ml-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })] })] })] }) }))] }));
}
