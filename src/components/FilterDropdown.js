import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { MapPin } from "lucide-react";
export default function FilterDropdown(props) {
    const [open, setOpen] = useState(false);
    const selected = props.items.find((item) => item.value === props.value);
    return (_jsxs("div", { className: "relative text-sm", children: [_jsxs("button", { onClick: () => setOpen(!open), className: "border px-3 py-2 rounded-md min-w-[180px] flex justify-between items-center gap-2", children: [props.type === "location" && (_jsxs("span", { className: "flex items-center gap-1", children: [_jsx(MapPin, { className: "w-4 h-4 text-gray-500" }), selected?.label] })), props.type === "status" && selected && "color" in selected && (_jsxs("span", { className: "flex items-center gap-1", children: [_jsx("span", { className: `w-2 h-2 rounded-full bg-${selected.color}-500` }), selected.label] })), _jsx("span", { className: "ml-auto", children: "\u25BE" })] }), open && (_jsxs("div", { className: "absolute mt-2 border rounded-md bg-white shadow-md w-[280px] z-10", children: [props.type === "location" &&
                        props.items.map((item) => (_jsx("div", { className: "p-3 hover:bg-gray-100 cursor-pointer", onClick: () => {
                                props.onChange(item.value);
                                setOpen(false);
                            }, children: _jsxs("div", { className: "flex gap-2 items-start", children: [_jsx(MapPin, { className: "w-4 h-4 mt-1 text-gray-500" }), _jsxs("div", { children: [_jsx("div", { className: "font-medium", children: item.label }), _jsx("div", { className: "text-xs text-gray-500", children: item.description })] })] }) }, item.value))), props.type === "status" &&
                        props.items.map((item) => (_jsxs("div", { className: "p-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between", onClick: () => {
                                props.onChange(item.value);
                                setOpen(false);
                            }, children: [_jsxs("div", { className: "flex gap-2 items-center", children: [_jsx("span", { className: `w-2 h-2 rounded-full bg-${item.color}-500` }), item.label] }), props.value === item.value && _jsx("span", { className: "text-sm text-gray-400", children: "\u2713" })] }, item.value)))] }))] }));
}
