import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/pages/AddCollegeFlow.tsx
import { useState } from "react";
import AddCollege from "./AddCollege";
import AddCampuses from "./AddCampuses";
import IntroVideo from "./IntroVideo";
import { useNavigate } from "react-router-dom";
export default function AddCollegeFlow() {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();
    const next = () => setStep((prev) => prev + 1);
    const back = () => setStep((prev) => prev - 1);
    const cancel = () => navigate("/colleges");
    const publish = () => navigate("/colleges/add/success");
    return (_jsxs("div", { className: "p-6 space-y-6", children: [_jsx("div", { className: "flex justify-between items-center", children: _jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-semibold", children: "Add New College" }), _jsx("p", { className: "text-sm text-gray-500", children: "Add college details to manage courses." })] }) }), _jsxs("div", { className: "space-y-10", children: [step === 1 && _jsx(AddCollege, { hideActions: true }), step === 2 && _jsx(AddCampuses, { hideActions: true }), step === 3 && _jsx(IntroVideo, { hideActions: true })] }), _jsxs("div", { className: "flex justify-between items-center pt-6 border-t mt-10", children: [_jsxs("div", { className: "text-xs text-gray-500", children: ["Step ", step, " of 3 ", _jsx("br", {}), step === 1 && _jsx("span", { className: "text-sm font-semibold text-black", children: "College Info" }), step === 2 && _jsx("span", { className: "text-sm font-semibold text-black", children: "Campus Info" }), step === 3 && _jsx("span", { className: "text-sm font-semibold text-black", children: "Introduction Video" })] }), _jsxs("div", { className: "flex gap-3", children: [step > 1 && (_jsx("button", { onClick: back, className: "border border-gray-300 text-gray-700 px-5 py-2 rounded-md text-sm", children: "\u2190 Back" })), step < 3 && (_jsx("button", { onClick: next, className: "bg-indigo-600 text-white px-6 py-2 rounded-md text-sm font-medium", children: "Next \u2192" })), step === 3 && (_jsx("button", { onClick: publish, className: "bg-indigo-600 text-white px-6 py-2 rounded-md text-sm font-medium", children: "Publish College" }))] })] })] }));
}
