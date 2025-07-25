import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Topbar from "../components/Topbar";
export default function AddCollege({ isEditMode = false, hideActions = false }) {
    const navigate = useNavigate();
    const [collegeData, setCollegeData] = useState({
        name: "",
        website: "",
        cricosCode: "",
        cricosCodeLink: "",
        rtoCode: "",
        rtoCodeLink: "",
        introduction: "",
        logo: null,
        status: "Active",
    });
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploadedFileName, setUploadedFileName] = useState("");
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCollegeData((prev) => ({ ...prev, [name]: value }));
    };
    const handleFileChange = (e) => {
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
        }
        else {
            navigate("/colleges/add/campuses");
        }
    };
    const removeFile = () => {
        setCollegeData((prev) => ({ ...prev, logo: null }));
        setUploadedFileName("");
        setUploadProgress(0);
    };
    return (_jsxs("div", { className: "min-h-screen bg-gray-50", children: [_jsx(Topbar, {}), _jsxs("div", { className: "max-w-4xl mx-auto p-6", children: [!hideActions && (_jsxs("div", { className: "mb-6", children: [_jsx("h1", { className: "text-2xl font-semibold text-gray-900", children: isEditMode ? "Edit College" : "Add new colleges" }), _jsx("p", { className: "text-sm text-gray-500 mt-1", children: isEditMode
                                    ? "Edit college details to manage courses."
                                    : "Add college details to manage courses." })] })), _jsxs("div", { className: "bg-white rounded-lg shadow-sm border border-gray-200 p-6", children: [_jsx("h2", { className: "text-lg font-medium text-gray-900 mb-4", children: "Overview" }), _jsxs("form", { className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Name" }), _jsx("input", { name: "name", value: collegeData.name, onChange: handleChange, placeholder: "Newton College", className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Website" }), _jsxs("div", { className: "flex", children: [_jsx("span", { className: "inline-flex items-center px-3 py-2 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-md", children: "https://" }), _jsx("input", { name: "website", value: collegeData.website, onChange: handleChange, placeholder: "www.newton.edu.au", className: "flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "CRICOS Provider Code" }), _jsxs("div", { className: "flex", children: [_jsx("span", { className: "inline-flex items-center px-3 py-2 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-md", children: "CRICOS" }), _jsx("input", { name: "cricosCode", value: collegeData.cricosCode, onChange: handleChange, placeholder: "A8290", className: "flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "CRICOS Code Link" }), _jsxs("div", { className: "flex", children: [_jsx("span", { className: "inline-flex items-center px-3 py-2 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-md", children: "https://" }), _jsx("input", { name: "cricosCodeLink", value: collegeData.cricosCodeLink, onChange: handleChange, placeholder: "www.training.gov.au/...", className: "flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "RTO Code" }), _jsxs("div", { className: "flex", children: [_jsx("span", { className: "inline-flex items-center px-3 py-2 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-md", children: "RTO" }), _jsx("input", { name: "rtoCode", value: collegeData.rtoCode, onChange: handleChange, placeholder: "A8290", className: "flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "RTO Code Link" }), _jsxs("div", { className: "flex", children: [_jsx("span", { className: "inline-flex items-center px-3 py-2 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-md", children: "https://" }), _jsx("input", { name: "rtoCodeLink", value: collegeData.rtoCodeLink, onChange: handleChange, placeholder: "www.training.gov.au/...", className: "flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500" })] })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Introduction" }), _jsx("textarea", { name: "introduction", value: collegeData.introduction, onChange: handleChange, placeholder: "Enter an overview of the college...", className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", rows: 4 })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Upload Logo" }), _jsx("div", { className: "border-2 border-dashed border-gray-300 rounded-lg p-8 text-center", children: !uploadedFileName ? (_jsxs(_Fragment, { children: [_jsx("div", { className: "w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center", children: _jsx("svg", { className: "w-6 h-6 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" }) }) }), _jsxs("div", { className: "text-sm", children: [_jsx("label", { htmlFor: "file-upload", className: "font-medium text-blue-600 hover:text-blue-500 cursor-pointer", children: "Click to upload" }), _jsx("span", { className: "text-gray-500", children: " or drag and drop" })] }), _jsx("p", { className: "text-xs text-gray-500 mt-1", children: "JPEG, PNG or SVG. (max. 600\u00D7400px)" }), _jsx("input", { id: "file-upload", type: "file", accept: ".jpeg,.jpg,.png,.svg", onChange: handleFileChange, className: "hidden" })] })) : (_jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "w-8 h-8 bg-blue-100 rounded flex items-center justify-center mr-3", children: _jsx("svg", { className: "w-4 h-4 text-blue-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }) }) }), _jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-900", children: uploadedFileName }), _jsx("p", { className: "text-xs text-gray-500", children: "80 KB of 100 KB" })] })] }), _jsxs("div", { className: "flex items-center", children: [_jsxs("span", { className: "text-sm font-medium text-gray-900 mr-3", children: [uploadProgress, "%"] }), _jsx("button", { type: "button", onClick: removeFile, className: "text-gray-400 hover:text-gray-600", children: _jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }) }) })] })] }), _jsx("div", { className: "w-full bg-gray-200 rounded-full h-2 mt-2", children: _jsx("div", { className: "bg-blue-600 h-2 rounded-full", style: { width: `${uploadProgress}%` } }) })] })) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Status" }), _jsx("div", { className: "relative", children: _jsxs("select", { name: "status", value: collegeData.status, onChange: handleChange, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", children: [_jsx("option", { value: "Active", children: "Active" }), _jsx("option", { value: "Inactive", children: "Inactive" })] }) })] })] })] }), _jsx("div", { className: "pb-20" })] }), !hideActions && !isEditMode && (_jsx("div", { className: "fixed bottom-0 left-[260px] right-0 bg-white border-t border-gray-200 px-6 py-4 shadow-lg z-50", children: _jsxs("div", { className: "max-w-4xl mx-auto flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-900", children: "Next Step (1/3)" }), _jsx("p", { className: "text-sm text-gray-500", children: "Campuses & Locations" })] }), _jsxs("div", { className: "flex gap-3", children: [_jsx("button", { onClick: handleCancel, className: "px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50", children: "Cancel" }), _jsxs("button", { onClick: handleNext, className: "px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 flex items-center", children: ["Next", _jsx("svg", { className: "w-4 h-4 ml-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })] })] })] }) }))] }));
}
