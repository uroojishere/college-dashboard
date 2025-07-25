import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/Header.tsx
import { Bell, PenLine, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function Header({ title }) {
    return (_jsxs("div", { className: "flex justify-between items-center mb-6", children: [_jsxs("div", { children: [_jsx("div", { className: "text-2xl font-bold text-gray-900", children: title }), _jsx("div", { className: "text-sm text-gray-500", children: "Last updated by Sam Ross on July 20, 2025" })] }), _jsxs("div", { className: "flex gap-3 items-center", children: [_jsx(Button, { variant: "ghost", size: "icon", children: _jsx(Bell, { className: "w-5 h-5 text-gray-600" }) }), _jsxs(Button, { className: "bg-indigo-600 hover:bg-indigo-700 text-white font-medium", children: [_jsx(PenLine, { className: "w-4 h-4 mr-2" }), "Edit College"] }), _jsx(Button, { variant: "ghost", size: "icon", children: _jsx(MoreVertical, { className: "w-5 h-5 text-gray-600" }) })] })] }));
}
