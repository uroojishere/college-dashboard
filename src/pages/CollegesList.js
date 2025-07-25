import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getColleges } from "@/data/getColleges";
import { Eye, Pencil, Copy, MapPin, ChevronDown, Filter, Search, } from "lucide-react";
import Topbar from "../components/Topbar";
function FilterPanel({ onClose, onApply }) {
    const [filters, setFilters] = useState({
        title: false,
        cricos: false,
        qualification: true,
    });
    const [qualification, setQualification] = useState("Certificate IV");
    const toggleFilter = (key) => {
        setFilters({ ...filters, [key]: !filters[key] });
    };
    return (_jsx("div", { className: "absolute right-0 mt-2 w-[300px] bg-white border rounded-lg shadow-lg p-4 text-sm z-50", children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { children: "Title" }), _jsxs("label", { className: "inline-flex items-center cursor-pointer", children: [_jsx("input", { type: "checkbox", checked: filters.title, onChange: () => toggleFilter("title"), className: "sr-only peer" }), _jsx("div", { className: "w-9 h-5 bg-gray-200 rounded-full peer peer-checked:bg-indigo-600 relative transition", children: _jsx("div", { className: "absolute left-1 top-0.5 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-4" }) })] })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { children: "CRICOS Code" }), _jsxs("label", { className: "inline-flex items-center cursor-pointer", children: [_jsx("input", { type: "checkbox", checked: filters.cricos, onChange: () => toggleFilter("cricos"), className: "sr-only peer" }), _jsx("div", { className: "w-9 h-5 bg-gray-200 rounded-full peer peer-checked:bg-indigo-600 relative transition", children: _jsx("div", { className: "absolute left-1 top-0.5 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-4" }) })] })] }), _jsxs("div", { children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("span", { children: "Qualification Level" }), _jsxs("label", { className: "inline-flex items-center cursor-pointer", children: [_jsx("input", { type: "checkbox", checked: filters.qualification, onChange: () => toggleFilter("qualification"), className: "sr-only peer" }), _jsx("div", { className: "w-9 h-5 bg-gray-200 rounded-full peer peer-checked:bg-indigo-600 relative transition", children: _jsx("div", { className: "absolute left-1 top-0.5 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-4" }) })] })] }), filters.qualification && (_jsxs("select", { value: qualification, onChange: (e) => setQualification(e.target.value), className: "w-full border rounded-md px-3 py-2 text-sm focus:outline-none", children: [_jsx("option", { children: "Certificate I" }), _jsx("option", { children: "Certificate II" }), _jsx("option", { children: "Certificate III" }), _jsx("option", { children: "Certificate IV" }), _jsx("option", { children: "Diploma" }), _jsx("option", { children: "Advanced Diploma" })] }))] }), _jsxs("div", { className: "flex justify-end gap-3 pt-2", children: [_jsx("button", { onClick: onClose, className: "text-sm text-gray-600", children: "Cancel" }), _jsx("button", { onClick: onApply, className: "bg-indigo-600 text-white px-4 py-1.5 rounded-md text-sm font-medium", children: "Apply" })] })] }) }));
}
const locations = [
    { value: "brisbane", label: "Brisbane", address: "Level 10, 190 Queen St., Melbourne..." },
    { value: "melbourne", label: "Melbourne", address: "Level 10, 190 Queen St., Melbourne..." },
    { value: "sydney", label: "Sydney", address: "Level 10, 190 Queen St., Melbourne..." },
    { value: "townsville", label: "Townsville City", address: "Level 10, 190 Queen St., Melbourne..." },
    { value: "perth", label: "Perth", address: "Level 10, 190 Queen St., Melbourne..." },
];
const statuses = [
    { value: "all", label: "All", color: "gray" },
    { value: "active", label: "Active", color: "green" },
    { value: "paused", label: "Paused", color: "orange" },
    { value: "draft", label: "Draft", color: "blue" },
    { value: "archived", label: "Archived", color: "red" },
];
function FilterDropdown({ type, items, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const currentItem = items.find((item) => item.value === value);
    const getStatusDotColor = (color) => {
        const colors = {
            gray: "bg-gray-500",
            green: "bg-green-500",
            orange: "bg-orange-500",
            blue: "bg-blue-500",
            red: "bg-red-500",
        };
        return colors[color] || "bg-gray-500";
    };
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return (_jsxs("div", { className: "relative", ref: dropdownRef, children: [_jsxs("button", { onClick: () => setIsOpen(!isOpen), className: "flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 text-sm min-w-32", children: [type === "location" && _jsx(MapPin, { className: "w-4 h-4 text-gray-500" }), type === "status" && currentItem?.color && (_jsx("div", { className: `w-2 h-2 ${getStatusDotColor(currentItem.color)} rounded-full` })), _jsx("span", { className: "text-gray-700", children: currentItem?.label }), _jsx(ChevronDown, { className: "w-4 h-4 text-gray-500" })] }), isOpen && (_jsx("div", { className: `absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 ${type === 'location' ? 'w-80' : 'min-w-full'}`, children: items.map((item) => (_jsxs("button", { onClick: () => {
                        onChange(item.value);
                        setIsOpen(false);
                    }, className: "w-full text-left px-4 py-3 hover:bg-gray-50 text-sm first:rounded-t-lg last:rounded-b-lg flex items-start gap-3", children: [type === "location" && _jsx(MapPin, { className: "w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" }), type === "status" && item.color && (_jsx("div", { className: `w-2 h-2 ${getStatusDotColor(item.color)} rounded-full mt-1.5` })), _jsxs("div", { className: "flex flex-col flex-1 min-w-0", children: [_jsx("span", { className: "font-medium text-gray-900 text-sm", children: item.label }), type === "location" && item.address && (_jsx("span", { className: "text-xs text-gray-500 mt-0.5 line-clamp-1", children: item.address }))] }), value === item.value && (_jsx("svg", { className: "w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0", fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) }))] }, item.value))) }))] }));
}
export default function CollegesList() {
    // Backend integration states
    const [colleges, setColleges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // UI states
    const [location, setLocation] = useState("brisbane");
    const [status, setStatus] = useState("all");
    const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    // Backend data fetching
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await getColleges();
                console.log("Fetched colleges:", data);
                setColleges(data);
                setError(null);
            }
            catch (err) {
                console.error("Error fetching colleges:", err);
                setError("Failed to load colleges");
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    // Utility functions
    const getStatusColor = (status) => {
        const statusLower = status.toLowerCase();
        if (statusLower === 'active')
            return 'green';
        if (statusLower === 'paused')
            return 'orange';
        if (statusLower === 'draft')
            return 'blue';
        if (statusLower === 'archived')
            return 'red';
        return 'gray';
    };
    const getStatusBadgeClass = (status) => {
        const color = getStatusColor(status);
        const classes = {
            green: 'bg-green-100 text-green-800',
            orange: 'bg-orange-100 text-orange-800',
            blue: 'bg-blue-100 text-blue-800',
            red: 'bg-red-100 text-red-800',
            gray: 'bg-gray-100 text-gray-800'
        };
        return classes[color] || classes.gray;
    };
    const getStatusDotClass = (status) => {
        const color = getStatusColor(status);
        const classes = {
            green: 'bg-green-500',
            orange: 'bg-orange-500',
            blue: 'bg-blue-500',
            red: 'bg-red-500',
            gray: 'bg-gray-500'
        };
        return classes[color] || classes.gray;
    };
    const parseCampuses = (campusesString) => {
        if (!campusesString)
            return [];
        return campusesString.split(',').map(campus => campus.trim()).filter(Boolean);
    };
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            // You can add a toast notification here
            console.log('Copied to clipboard:', text);
        });
    };
    const handleFilterClick = () => setIsFilterPanelOpen(true);
    const handleCloseFilter = () => setIsFilterPanelOpen(false);
    const handleApplyFilter = () => {
        console.log("Filters applied!");
        setIsFilterPanelOpen(false);
    };
    // Filter colleges based on search term
    const filteredColleges = colleges.filter(college => college.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        college.cricos_code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        college.rto_code.toLowerCase().includes(searchTerm.toLowerCase()));
    // Loading state
    if (loading) {
        return (_jsxs("div", { className: "bg-gray-50 min-h-screen", children: [_jsx(Topbar, {}), _jsx("div", { className: "p-6", children: _jsx("div", { className: "max-w-7xl mx-auto", children: _jsx("div", { className: "flex justify-center items-center h-64", children: _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4" }), _jsx("p", { className: "text-gray-600", children: "Loading colleges..." })] }) }) }) })] }));
    }
    // Error state
    if (error) {
        return (_jsxs("div", { className: "bg-gray-50 min-h-screen", children: [_jsx(Topbar, {}), _jsx("div", { className: "p-6", children: _jsx("div", { className: "max-w-7xl mx-auto", children: _jsx("div", { className: "flex justify-center items-center h-64", children: _jsxs("div", { className: "text-center", children: [_jsx("p", { className: "text-red-600 mb-4", children: error }), _jsx("button", { onClick: () => window.location.reload(), className: "bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm", children: "Retry" })] }) }) }) })] }));
    }
    return (_jsxs("div", { className: "bg-gray-50 min-h-screen", children: [_jsx(Topbar, {}), _jsx("div", { className: "p-6", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs("div", { className: "flex justify-between items-start mb-6", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-semibold text-gray-900 mb-1", children: "Colleges" }), _jsxs("p", { className: "text-gray-500 text-sm", children: ["Manage all your colleges (", filteredColleges.length, " total)"] })] }), _jsx("button", { onClick: () => (window.location.href = "/colleges/addnewcollege"), className: "bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2", children: "+ Add College" })] }), _jsxs("div", { className: "flex items-center gap-4 mb-6", children: [_jsxs("div", { className: "relative flex-1 max-w-md", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" }), _jsx("input", { type: "text", placeholder: "Search by Name, Code...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" })] }), _jsx(FilterDropdown, { type: "location", items: locations, value: location, onChange: setLocation }), _jsx(FilterDropdown, { type: "status", items: statuses, value: status, onChange: setStatus }), _jsxs("div", { className: "flex items-center gap-3 ml-auto", children: [_jsx("button", { onClick: () => {
                                                setSearchTerm("");
                                                setLocation("brisbane");
                                                setStatus("all");
                                            }, className: "text-indigo-600 text-sm font-medium hover:text-indigo-700", children: "Clear filters" }), _jsxs("div", { className: "relative", children: [_jsxs("button", { onClick: handleFilterClick, className: "px-3 py-2 border border-gray-300 rounded-lg text-sm flex items-center gap-2 bg-white hover:bg-gray-50", children: [_jsx(Filter, { className: "w-4 h-4" }), "filters", _jsx("span", { className: "text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium", children: "2" })] }), isFilterPanelOpen && (_jsx(FilterPanel, { onClose: handleCloseFilter, onApply: handleApplyFilter }))] })] })] }), filteredColleges.length === 0 ? (_jsx("div", { className: "bg-white rounded-lg border border-gray-200 p-8 text-center", children: _jsx("p", { className: "text-gray-500", children: "No colleges found matching your criteria." }) })) : (_jsxs("div", { className: "bg-white rounded-lg border border-gray-200 overflow-hidden", children: [_jsxs("table", { className: "w-full", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { className: "px-6 py-3 text-left", children: _jsx("input", { type: "checkbox", className: "rounded border-gray-300" }) }), _jsxs("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: ["Title", _jsx(ChevronDown, { className: "w-4 h-4 inline ml-1" })] }), _jsxs("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: ["Status", _jsx(ChevronDown, { className: "w-4 h-4 inline ml-1" })] }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Campuses and Locations" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "CRICOS Code" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "RTO Code" }), _jsx("th", { className: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Actions" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: filteredColleges.map((college) => (_jsxs("tr", { className: "hover:bg-gray-50", children: [_jsx("td", { className: "px-6 py-4", children: _jsx("input", { type: "checkbox", className: "rounded border-gray-300" }) }), _jsx("td", { className: "px-6 py-4", children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "bg-indigo-100 text-indigo-700 font-semibold rounded-full w-10 h-10 flex items-center justify-center text-sm", children: college.title.substring(0, 2).toUpperCase() }), _jsx("span", { className: "text-sm font-medium text-gray-900", children: college.title })] }) }), _jsx("td", { className: "px-6 py-4", children: _jsxs("div", { className: `inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(college.status)}`, children: [_jsx("div", { className: `w-1.5 h-1.5 ${getStatusDotClass(college.status)} rounded-full` }), _jsx("span", { children: college.status })] }) }), _jsx("td", { className: "px-6 py-4", children: _jsxs("div", { className: "flex gap-2 flex-wrap", children: [parseCampuses(college.campuses_and_locations).map((campus, index) => (_jsxs("div", { className: "flex items-center gap-1 bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded-full", children: [_jsx(MapPin, { className: "w-3 h-3" }), campus] }, index))), parseCampuses(college.campuses_and_locations).length === 0 && (_jsx("span", { className: "text-xs text-gray-500", children: "No campuses listed" }))] }) }), _jsx("td", { className: "px-6 py-4", children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "text-sm text-gray-900", children: college.cricos_code }), _jsx(Copy, { className: "w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600", onClick: () => copyToClipboard(college.cricos_code) })] }) }), _jsx("td", { className: "px-6 py-4", children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "text-sm text-gray-900", children: college.rto_code }), _jsx(Copy, { className: "w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600", onClick: () => copyToClipboard(college.rto_code) })] }) }), _jsx("td", { className: "px-6 py-4 text-right", children: _jsxs("div", { className: "flex justify-end gap-3", children: [_jsx(Eye, { className: "w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600", onClick: () => navigate(`/colleges/view/${college.id}`) }), _jsx(Pencil, { className: "w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600", onClick: () => navigate(`/colleges/edit/${college.id}`) })] }) })] }, college.id))) })] }), _jsx("div", { className: "border-t border-gray-200 px-6 py-4 bg-white", children: _jsxs("div", { className: "flex justify-between items-center", children: [_jsxs("span", { className: "text-sm text-gray-500", children: ["Showing ", filteredColleges.length, " of ", colleges.length, " colleges"] }), _jsxs("div", { className: "flex gap-2", children: [_jsx("button", { className: "px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 bg-white", children: "Previous" }), _jsx("button", { className: "px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 bg-white", children: "Next" })] })] }) })] }))] }) })] }));
}
