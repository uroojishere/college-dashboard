import { Bell } from "lucide-react";
import { useLocation } from "react-router-dom";

const profileImage = "https://i.pravatar.cc/40?img=5";

export default function Topbar() {
  const location = useLocation();

  const getPageTitle = (pathname: string) => {
    const segments = pathname
      .split("/")
      .filter(Boolean)
      .map((segment) =>
        segment
          .replace(/-/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase())
      );

    return segments.join(" / ") || "Dashboard";
  };

  const pageTitle = getPageTitle(location.pathname);

  return (
    <div className="fixed top-0 left-[260px] right-0 h-[44px] bg-white border-b border-gray-300 flex items-center justify-between px-6 z-50">
      {/* Page Title */}
      <div className="text-sm text-gray-700">{pageTitle}</div>

      {/* Icons */}
      <div className="flex items-center gap-4">
        <Bell className="w-5 h-5 text-gray-500 cursor-pointer" />
        <img
          src={profileImage}
          alt="User"
          className="w-6 h-6 rounded-full object-cover"
        />
      </div>
    </div>
  );
}
