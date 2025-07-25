// src/components/Sidebar.tsx
import { Home, Users, Book, School, FileText, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../../src/assets/logo.png"; // Update path if needed

const menuItems = [
  { name: "Messages", icon: Home, path: "#" },
  { name: "Applicants", icon: Users, path: "#" },
  { name: "Courses", icon: Book, path: "#" },
  { name: "Colleges", icon: School, path: "/colleges", active: true },
  { name: "Offer Letters", icon: FileText, path: "#" },
  { name: "Settings", icon: Settings, path: "#" },
];

export default function Sidebar() {
  return (
    <aside
      className="w-[260px] h-screen bg-white border-r px-4 py-6 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.06),0px_1px_3px_0px_rgba(10,13,18,0.10)]"
    >
      {/* Logo + Text wrapper */}
      <div
        className="flex items-center gap-[5px] mb-8 px-[1px]"
        style={{
          width: "186px",
          height: "34px",
          opacity: 1,
          transform: "rotate(0deg)",
        }}
      >
        <img
          src={Logo}
          alt="Pearl Migration Logo"
          className="h-[34px] w-auto"
          style={{
            width: "186px",
            height: "34px",
            opacity: 1,
            transform: "rotate(0deg)",
          }}
        />
        <span
          className="text-[16px] leading-[24px] font-semibold text-gray-900 whitespace-nowrap"
          style={{
            fontFamily: "Inter, sans-serif",
            letterSpacing: "0%",
          }}
        >
          Pearl Migration
        </span>
      </div>

      {/* Menu */}
      <ul className="space-y-1">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm ${
                item.active
                  ? "bg-blue-100 text-[#1A56DB] font-medium"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              <item.icon
                className={`w-[18px] h-[18px] ${
                  item.active ? "text-[#1A56DB]" : "text-gray-500"
                }`}
                strokeWidth={1.5}
              />
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
