import { Bell, MoreHorizontal, ChevronRight, PanelRight } from "lucide-react";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white border-b shadow-sm">
      {/* Left - breadcrumb + title */}
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <button onClick={() => console.log("Sidebar toggle clicked")}>
          <PanelRight size={16} className="text-green-700" />
        </button>
        <span>Workspace</span>
        <ChevronRight size={16} />
        <span>Folder 2</span>
        <ChevronRight size={16} />
        <span className="font-semibold text-gray-800">Spreadsheet 3</span>
        <button
          onClick={() => console.log("Header more options clicked")}
          className="ml-2"
        >
          <MoreHorizontal className="cursor-pointer text-gray-400" />
        </button>
      </div>

      {/* Right - search, bell, user */}
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search within sheet"
          className="px-3 py-1 text-sm border rounded-md outline-none bg-gray-50"
          onChange={(e) =>
            console.log("Search input:", (e.target as HTMLInputElement).value)
          }
        />
        <button
          onClick={() => console.log("Bell icon clicked")}
          className="relative"
        >
          <Bell size={28} />
          <span className="absolute top-0 right-0 w-4 h-4 text-xs text-white bg-green-600 rounded-full text-center">
            2
          </span>
        </button>
        <button
          onClick={() => console.log("User profile clicked")}
          className="flex items-center gap-2 text-sm font-medium"
        >
          <img
            src="https://i.pravatar.cc/24"
            alt="avatar"
            className="w-6 h-6 rounded-full"
          />
          <span>John Doe</span>
        </button>
      </div>
    </div>
  );
}
