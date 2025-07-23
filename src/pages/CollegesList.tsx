import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Eye,
  Pencil,
  Copy,
  MapPin,
  ChevronDown,
  Filter,
  Search,
} from "lucide-react";

import Topbar from "../components/Topbar";

// FilterPanel component
type FilterPanelProps = {
  onClose: () => void;
  onApply: () => void;
};

function FilterPanel({ onClose, onApply }: FilterPanelProps) {
  const [filters, setFilters] = useState({
    title: false,
    cricos: false,
    qualification: true,
  });
  const [qualification, setQualification] = useState("Certificate IV");

  const toggleFilter = (key: keyof typeof filters) => {
    setFilters({ ...filters, [key]: !filters[key] });
  };

  return (
    <div className="absolute right-0 mt-2 w-[300px] bg-white border rounded-lg shadow-lg p-4 text-sm z-50">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span>Title</span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={filters.title}
              onChange={() => toggleFilter("title")}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:bg-indigo-600 relative transition">
              <div className="absolute left-1 top-0.5 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-4" />
            </div>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <span>CRICOS Code</span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={filters.cricos}
              onChange={() => toggleFilter("cricos")}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:bg-indigo-600 relative transition">
              <div className="absolute left-1 top-0.5 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-4" />
            </div>
          </label>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span>Qualification Level</span>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={filters.qualification}
                onChange={() => toggleFilter("qualification")}
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:bg-indigo-600 relative transition">
                <div className="absolute left-1 top-0.5 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-4" />
              </div>
            </label>
          </div>
          {filters.qualification && (
            <select
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none"
            >
              <option>Certificate I</option>
              <option>Certificate II</option>
              <option>Certificate III</option>
              <option>Certificate IV</option>
              <option>Diploma</option>
              <option>Advanced Diploma</option>
            </select>
          )}
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <button onClick={onClose} className="text-sm text-gray-600">
            Cancel
          </button>
          <button
            onClick={onApply}
            className="bg-indigo-600 text-white px-4 py-1.5 rounded-md text-sm font-medium"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
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

const colleges = [
  {
    id: "1",
    title: "Newton College",
    status: "Active",
    statusColor: "green",
    cricos: "0100818",
    rto: "0100818",
    campuses: ["Melbourne", "Brisbane"],
  },
  {
    id: "2",
    title: "Newton College",
    status: "Active",
    statusColor: "green",
    cricos: "0100818",
    rto: "0100818",
    campuses: ["Melbourne", "Brisbane"],
  },
  {
    id: "3",
    title: "Newton College",
    status: "Active",
    statusColor: "green",
    cricos: "0100818",
    rto: "0100818",
    campuses: ["Melbourne", "Brisbane"],
  },
  {
    id: "4",
    title: "Newton College",
    status: "Active",
    statusColor: "green",
    cricos: "0100818",
    rto: "0100818",
    campuses: ["Melbourne", "Brisbane"],
  },
  {
    id: "5",
    title: "Newton College",
    status: "Active",
    statusColor: "green",
    cricos: "0100818",
    rto: "0100818",
    campuses: ["Melbourne", "Brisbane"],
  },
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

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 text-sm min-w-32"
      >
        {type === "location" && <MapPin className="w-4 h-4 text-gray-500" />}
        {type === "status" && currentItem?.color && (
          <div
            className={`w-2 h-2 ${getStatusDotColor(
              currentItem.color
            )} rounded-full`}
          />
        )}
        <span className="text-gray-700">{currentItem?.label}</span>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </button>

      {isOpen && (
        <div className={`absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 ${type === 'location' ? 'w-80' : 'min-w-full'}`}>
          {items.map((item) => (
            <button
              key={item.value}
              onClick={() => {
                onChange(item.value);
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-3 hover:bg-gray-50 text-sm first:rounded-t-lg last:rounded-b-lg flex items-start gap-3"
            >
              {type === "location" && <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />}
              {type === "status" && item.color && (
                <div
                  className={`w-2 h-2 ${getStatusDotColor(
                    item.color
                  )} rounded-full mt-1.5`}
                />
              )}
              <div className="flex flex-col flex-1 min-w-0">
                <span className="font-medium text-gray-900 text-sm">{item.label}</span>
                {type === "location" && item.address && (
                  <span className="text-xs text-gray-500 mt-0.5 line-clamp-1">{item.address}</span>
                )}
              </div>
              {value === item.value && (
                <svg
                  className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function CollegesList() {
  const [location, setLocation] = useState("brisbane");
  const [status, setStatus] = useState("all");
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);

  const navigate = useNavigate();

  const handleFilterClick = () => setIsFilterPanelOpen(true);
  const handleCloseFilter = () => setIsFilterPanelOpen(false);
  const handleApplyFilter = () => {
    console.log("Filters applied!");
    setIsFilterPanelOpen(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Topbar />
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 mb-1">
                Colleges
              </h1>
              <p className="text-gray-500 text-sm">Manage all your colleges</p>
            </div>
            <button
              onClick={() => (window.location.href = "/colleges/addnewcollege")}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2"
            >
              + Add College
            </button>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search by Name, Code..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <FilterDropdown
              type="location"
              items={locations}
              value={location}
              onChange={setLocation}
            />

            <FilterDropdown
              type="status"
              items={statuses}
              value={status}
              onChange={setStatus}
            />

            <div className="flex items-center gap-3 ml-auto">
              <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700">
                Clear filters
              </button>
              <div className="relative">
                <button
                  onClick={handleFilterClick}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm flex items-center gap-2 bg-white hover:bg-gray-50"
                >
                  <Filter className="w-4 h-4" />
                  filters
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">
                    2
                  </span>
                </button>

                {isFilterPanelOpen && (
                  <FilterPanel
                    onClose={handleCloseFilter}
                    onApply={handleApplyFilter}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                    <ChevronDown className="w-4 h-4 inline ml-1" />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                    <ChevronDown className="w-4 h-4 inline ml-1" />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Campuses and Locations
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    CRICOS Code
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    RTO Code
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {colleges.map((college, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input type="checkbox" className="rounded border-gray-300" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-indigo-100 text-indigo-700 font-semibold rounded-full w-10 h-10 flex items-center justify-center text-sm">
                          NC
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          {college.title}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span>{college.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        {college.campuses.map((campus) => (
                          <div
                            key={campus}
                            className="flex items-center gap-1 bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded-full"
                          >
                            <MapPin className="w-3 h-3" />
                            {campus}
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-900">
                          {college.cricos}
                        </span>
                        <Copy className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-900">{college.rto}</span>
                        <Copy className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-3">
                        <Eye
                          className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600"
                          onClick={() => navigate(`/colleges/view/${college.id}`)}
                        />
                        <Pencil
                          className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600"
                          onClick={() => navigate(`/colleges/edit/${college.id}`)}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="border-t border-gray-200 px-6 py-4 bg-white">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Page 1 of 10</span>
                <div className="flex gap-2">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 bg-white">
                    Previous
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 bg-white">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}