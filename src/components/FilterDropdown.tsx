import { useState } from "react";
import { MapPin } from "lucide-react";

type LocationItem = {
  label: string;
  value: string;
  description: string;
};

type StatusItem = {
  label: string;
  value: string;
  color: string;
};

type FilterDropdownProps =
  | {
      type: "location";
      items: LocationItem[];
      value: string;
      onChange: (val: string) => void;
    }
  | {
      type: "status";
      items: StatusItem[];
      value: string;
      onChange: (val: string) => void;
    };

export default function FilterDropdown(props: FilterDropdownProps) {
  const [open, setOpen] = useState(false);

  const selected = props.items.find((item) => item.value === props.value);

  return (
    <div className="relative text-sm">
      <button
        onClick={() => setOpen(!open)}
       className="border px-3 py-2 rounded-md min-w-[180px] flex justify-between items-center gap-2"
      >
        {props.type === "location" && (
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-gray-500" />
            {selected?.label}
          </span>
        )}

        {props.type === "status" && selected && "color" in selected && (
          <span className="flex items-center gap-1">
            <span className={`w-2 h-2 rounded-full bg-${selected.color}-500`} />
            {selected.label}
          </span>
        )}

        <span className="ml-auto">▾</span>
      </button>

      {open && (
        <div className="absolute mt-2 border rounded-md bg-white shadow-md w-[280px] z-10">
          {props.type === "location" &&
            (props.items as LocationItem[]).map((item) => (
              <div
                key={item.value}
                className="p-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  props.onChange(item.value);
                  setOpen(false);
                }}
              >
                <div className="flex gap-2 items-start">
                  <MapPin className="w-4 h-4 mt-1 text-gray-500" />
                  <div>
                    <div className="font-medium">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.description}</div>
                  </div>
                </div>
              </div>
            ))}

          {props.type === "status" &&
            (props.items as StatusItem[]).map((item) => (
              <div
                key={item.value}
                className="p-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between"
                onClick={() => {
                  props.onChange(item.value);
                  setOpen(false);
                }}
              >
                <div className="flex gap-2 items-center">
                  <span className={`w-2 h-2 rounded-full bg-${item.color}-500`} />
                  {item.label}
                </div>
                {props.value === item.value && <span className="text-sm text-gray-400">✓</span>}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
