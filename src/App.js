import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import CollegesList from "@/pages/CollegesList";
import CollegePage from "@/pages/CollegePage";
import EditCollege from "@/pages/EditCollege";
import AddCollege from "@/pages/AddCollege";
import AddCollegeFlow from "@/pages/AddCollegeFlow";
import AddCampuses from "@/pages/AddCampuses";
import IntroVideo from "@/pages/IntroVideo";
import Success from "@/pages/Success";
import ViewCollege from "@/pages/ViewCollege"; // ✅ NEW view screen import
function App() {
    return (_jsx(BrowserRouter, { children: _jsxs("div", { className: "flex h-screen bg-gray-50 font-sans", children: [_jsx(Sidebar, {}), _jsxs("main", { className: "flex-1 overflow-y-auto", children: [_jsx(Topbar, {}), _jsx("div", { className: "p-6", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/colleges", element: _jsx(CollegesList, {}) }), _jsx(Route, { path: "/colleges/:id", element: _jsx(CollegePage, {}) }), _jsx(Route, { path: "/colleges/edit/:id", element: _jsx(EditCollege, {}) }), _jsx(Route, { path: "/colleges/view/:id", element: _jsx(ViewCollege, {}) }), " ", _jsx(Route, { path: "/colleges/add", element: _jsx(AddCollegeFlow, {}) }), _jsx(Route, { path: "/colleges/add/success", element: _jsx(Success, {}) }), _jsx(Route, { path: "/colleges/addnewcollege", element: _jsx(AddCollege, {}) }), _jsx(Route, { path: "/colleges/add/campuses", element: _jsx(AddCampuses, {}) }), _jsx(Route, { path: "/colleges/add/video", element: _jsx(IntroVideo, {}) }), _jsx(Route, { path: "/colleges/success", element: _jsx(Success, {}) })] }) })] })] }) }));
}
export default App;
