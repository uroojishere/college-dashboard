import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Topbar from "../components/Topbar";
export default function AddCampuses({ isEditMode = false, hideActions = false, hideHeader = false }) {
    const navigate = useNavigate();
    const [campuses, setCampuses] = useState([
        { name: "Melbourne", address: "Level 10, 190 Queen St., Melbourne, VIC 3000" },
        { name: "", address: "" }
    ]);
    const handleChange = (index, field, value) => {
        const updated = [...campuses];
        updated[index][field] = value;
        setCampuses(updated);
    };
    const handleAdd = () => {
        setCampuses([...campuses, { name: "", address: "" }]);
    };
    const handleRemove = (index) => {
        if (campuses.length === 1)
            return;
        const updated = campuses.filter((_, i) => i !== index);
        setCampuses(updated);
    };
    const handleCancel = () => {
        // Handle cancel action
        console.log("Cancel clicked");
    };
    const handleNext = () => {
        // Handle next action
        console.log("Next clicked");
    };
    return (_jsxs("div", { className: "min-h-screen bg-gray-50 p-6 pb-32", children: [_jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsx(Topbar, {}), !hideHeader && (_jsxs("div", { className: "mb-6", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900 mb-2", children: "Add new colleges" }), _jsx("p", { className: "text-gray-600", children: "Add college details to manage courses." })] })), _jsxs("div", { className: "bg-white rounded-lg border border-gray-200 p-6", children: [_jsxs("div", { className: "mb-6", children: [_jsx("h2", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Campuses & Locations" }), _jsx("p", { className: "text-gray-600 text-sm", children: "Please provide the list of all campuses locations" })] }), _jsxs("div", { className: "space-y-4", children: [campuses.map((campus, index) => (_jsxs("div", { className: "flex gap-4 items-center", children: [_jsx("div", { className: "flex-1", children: _jsx("input", { type: "text", placeholder: "Name", value: campus.name, onChange: (e) => handleChange(index, "name", e.target.value), className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" }) }), _jsx("div", { className: "flex-1", children: _jsx("input", { type: "text", placeholder: "Address", value: campus.address, onChange: (e) => handleChange(index, "address", e.target.value), className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" }) }), _jsx("button", { onClick: () => handleRemove(index), className: "p-2 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors", disabled: campuses.length === 1, children: _jsx(Trash2, { className: "w-4 h-4" }) })] }, index))), _jsxs("button", { onClick: handleAdd, className: "inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors mt-4", children: [_jsx(Plus, { className: "w-4 h-4" }), "Add New Campus"] })] })] })] }), !hideActions && !isEditMode && (_jsx("div", { className: "fixed bottom-0 left-[260px] right-0 bg-white border-t border-gray-200 px-6 py-4 shadow-lg z-50", children: _jsxs("div", { className: "max-w-4xl mx-auto flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-900", children: "Next Step (2/3)" }), _jsx("p", { className: "text-sm text-gray-500", children: "Introduction Video" })] }), _jsxs("div", { className: "flex gap-3", children: [_jsx("button", { onClick: () => navigate("../colleges/addnewcollege"), className: "px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors", children: "Back" }), _jsxs("button", { onClick: () => navigate("../colleges/add/video"), className: "px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 flex items-center transition-colors", children: ["Next", _jsx("svg", { className: "w-4 h-4 ml-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })] })] })] }) }))] }));
}
