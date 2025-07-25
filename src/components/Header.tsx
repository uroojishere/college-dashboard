// src/components/Header.tsx

import { Bell, PenLine, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <div className="text-2xl font-bold text-gray-900">{title}</div>
        <div className="text-sm text-gray-500">Last updated by Sam Ross on July 20, 2025</div>
      </div>
      <div className="flex gap-3 items-center">
        <Button variant="ghost" size="icon">
          <Bell className="w-5 h-5 text-gray-600" />
        </Button>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium">
          <PenLine className="w-4 h-4 mr-2" />
          Edit College
        </Button>
        <Button variant="ghost" size="icon">
          <MoreVertical className="w-5 h-5 text-gray-600" />
        </Button>
      </div>
    </div>
  );
}
