import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
export default function Campuses() {
    const locations = [
        {
            name: "Melbourne Campus",
            address: "Level 10, 190 Queen St., Melbourne, VIC 3000",
        },
        {
            name: "Brisbane Campus",
            address: "Unit 3, 5 Carol Avenue, SPRINGWOOD, QLD 4127",
        },
        {
            name: "Melbourne Campus",
            address: "Level 10, 190 Queen St., Melbourne, VIC 3000",
        },
        {
            name: "Brisbane Campus",
            address: "Unit 3, 5 Carol Avenue, SPRINGWOOD, QLD 4127",
        },
    ];
    return (_jsxs("div", { className: "bg-white border rounded-lg p-6", children: [_jsx("p", { className: "text-lg font-semibold mb-4", children: "Campuses & Locations" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: locations.map((location, index) => (_jsx(Card, { className: "border rounded-lg shadow-sm", children: _jsxs(CardContent, { className: "flex items-start space-x-3 p-4", children: [_jsx(MapPin, { className: "w-5 h-5 text-muted-foreground mt-1" }), _jsxs("div", { children: [_jsx("p", { className: "font-semibold text-sm", children: location.name }), _jsx("p", { className: "text-sm text-muted-foreground", children: location.address })] })] }) }, index))) })] }));
}
