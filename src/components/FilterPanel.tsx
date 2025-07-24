import { useState } from "react";

type FilterPanelProps = {
  onClose: () => void;
  onApply: () => void;
};

export default function FilterPanel({ onClose, onApply }: FilterPanelProps) {
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
        {/* Title */}
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

        {/* CRICOS */}
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

        {/* Qualification */}
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

        {/* Buttons */}
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
