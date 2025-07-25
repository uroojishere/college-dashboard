import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/IntroVideo.tsx
import { Card, CardContent } from "@/components/ui/card";
export default function IntroVideo() {
    return (_jsx(Card, { className: "rounded-lg border bg-white shadow-sm", children: _jsxs(CardContent, { className: "p-6 space-y-4", children: [_jsx("p", { className: "text-lg font-semibold", children: "Introduction Video" }), _jsxs("video", { controls: true, className: "w-full rounded-md border", poster: "https://via.placeholder.com/1280x720.png?text=Video+Thumbnail", children: [_jsx("source", { src: "/intro.mp4", type: "video/mp4" }), "Your browser does not support the video tag."] })] }) }));
}
