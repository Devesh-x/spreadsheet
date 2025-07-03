import {
  ChevronRight,
  EyeOff,
  Filter,
  ArrowUpDown,
  Layout,
  Upload,
  Download,
  Share2,
} from "lucide-react";

export default function Toolbar() {
  return (
    <div className="flex flex-wrap justify-between items-center px-4 py-2 bg-white border-b">
      {/* Left Controls */}
      <div className="flex gap-2 flex-wrap items-center text-sm text-gray-700">
        <button
          className="flex items-center gap-1 text-gray-600"
          onClick={() => console.log("Toolbar button clicked")}
        >
          Tool bar <ChevronRight size={14} />
        </button>
        <button
          className="flex items-center gap-1"
          onClick={() => console.log("Hide fields clicked")}
        >
          <EyeOff size={14} /> Hide fields
        </button>
        <button
          className="flex items-center gap-1"
          onClick={() => console.log("Sort clicked")}
        >
          <ArrowUpDown size={14} /> Sort
        </button>
        <button
          className="flex items-center gap-1"
          onClick={() => console.log("Filter clicked")}
        >
          <Filter size={14} /> Filter
        </button>
        <button
          className="flex items-center gap-1"
          onClick={() => console.log("Cell view clicked")}
        >
          <Layout size={14} /> Cell view
        </button>
      </div>

      {/* Right Buttons */}
      <div className="flex gap-2">
        <button
          className="flex items-center gap-1 px-3 py-1 border rounded text-sm"
          onClick={() => console.log("Import clicked")}
        >
          <Download size={14} /> Import
        </button>
        <button
          className="flex items-center gap-1 px-3 py-1 border rounded text-sm"
          onClick={() => console.log("Export clicked")}
        >
          <Upload size={14} /> Export
        </button>
        <button
          className="flex items-center gap-1 px-3 py-1 border rounded text-sm"
          onClick={() => console.log("Share clicked")}
        >
          <Share2 size={14} /> Share
        </button>
        <button
          className="px-4 py-1 bg-green-700 text-white rounded text-sm"
          onClick={() => console.log("New Action clicked")}
        >
          + New Action
        </button>
      </div>
    </div>
  );
}
