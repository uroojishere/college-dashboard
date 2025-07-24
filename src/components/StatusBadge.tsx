type StatusBadgeProps = {
  status: string;
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const isActive = status.toLowerCase() === "active";
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-sm font-medium ${
        isActive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
      }`}
    >
      <span className="text-xs">●</span>
      {status}
    </span>
  );
}
