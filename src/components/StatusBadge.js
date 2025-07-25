import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function StatusBadge({ status }) {
    const isActive = status.toLowerCase() === "active";
    return (_jsxs("span", { className: `inline-flex items-center gap-1 px-2 py-1 rounded-full text-sm font-medium ${isActive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`, children: [_jsx("span", { className: "text-xs", children: "\u25CF" }), status] }));
}
