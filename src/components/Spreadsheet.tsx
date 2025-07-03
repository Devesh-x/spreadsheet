import {
  Link2,
  Plus,
  Split,
  MoreHorizontal,
  CalendarClock,
  User2,
  Globe,
  FileText as FileIcon,
  AlertTriangle,
  BadgeDollarSign,
} from "lucide-react";
import { RotateCcw } from "lucide-react";

export default function Spreadsheet() {
  // Sample data to populate the spreadsheet
  const data = [
    {
      job: "Launch social media campaign for product release",
      submitted: "15-11-2024",
      status: "In-process",
      submitter: "Aisha Patel",
      url: "www.aishapatel.com",
      assigned: "Sophie Choudhury",
      priority: "Medium",
      due: "20-11-2024",
      value: "6,200,000",
    },
    {
      job: "Generate competitor analysis report Q3",
      submitted: "10-11-2024",
      status: "Complete",
      submitter: "Rahul Mehra",
      url: "www.rahulmehra.io",
      assigned: "Deepak Singh",
      priority: "High",
      due: "12-11-2024",
      value: "3,100,000",
    },
    {
      job: "Extract customer feedback from surveys",
      submitted: "05-11-2024",
      status: "Blocked",
      submitter: "Fatima Noor",
      url: "www.feedbackpro.net",
      assigned: "Jaya Kumar",
      priority: "Low",
      due: "15-11-2024",
      value: "900,000",
    },
    {
      job: "Answer a stakeholder query on campaign ROI",
      submitted: "07-11-2024",
      status: "Need to Start",
      submitter: "Kunal Verma",
      url: "www.kunalreports.in",
      assigned: "Sophie Choudhury",
      priority: "High",
      due: "18-11-2024",
      value: "5,400,000",
    },
    {
      job: "Import new vendor list into CRM system",
      submitted: "12-11-2024",
      status: "Complete",
      submitter: "Meena Rao",
      url: "www.meenarcrm.net",
      assigned: "Deepak Singh",
      priority: "Medium",
      due: "14-11-2024",
      value: "2,000,000",
    },
  ];

  // Headers with optional icons
  const headers = [
    { label: "#" },
    { label: "Job Request", icon: FileIcon },
    { label: "Submitted", icon: CalendarClock },
    { label: "Status", icon: AlertTriangle },
    { label: "Submitter", icon: User2 },
    { label: "URL", icon: Globe },
    { label: "Assigned", icon: User2 },
    { label: "Priority", icon: AlertTriangle },
    { label: "Due Date", icon: CalendarClock },
    { label: "Est. Value", icon: BadgeDollarSign },
    { label: "" },
  ];

  // Keyboard navigation logic (Arrow keys to move between cells)
  function handleKey(e) {
    const row = parseInt(e.currentTarget.dataset.row || "0");
    const col = parseInt(e.currentTarget.dataset.col || "0");

    let nextCell = null;

    if (e.key === "ArrowDown") {
      nextCell = document.querySelector(`[data-row="${row + 1}"][data-col="${col}"]`);
    } else if (e.key === "ArrowUp") {
      nextCell = document.querySelector(`[data-row="${row - 1}"][data-col="${col}"]`);
    } else if (e.key === "ArrowRight") {
      nextCell = document.querySelector(`[data-row="${row}"][data-col="${col + 1}"]`);
    } else if (e.key === "ArrowLeft") {
      nextCell = document.querySelector(`[data-row="${row}"][data-col="${col - 1}"]`);
    }

    nextCell?.focus();
  }

  return (
    <div className="overflow-x-auto text-sm w-full">
      {/* Grid Container */}
      <div className="grid grid-cols-[40px_200px_140px_120px_160px_160px_160px_160px_160px_160px_60px]">

        {/* Empty cell for layout */}
        <div />

        {/* Top Row (custom control panel) */}
        <div className="col-span-4 flex items-center justify-between px-2 py-1 bg-gray-200 rounded-md mx-2 my-1">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-between px-3 py-1 bg-white rounded-md gap-2 ">
              <Link2 size={14} className="text-blue-600 " />
              <span className="text-gray-700 text-sm"> Q3 Financial Overview</span>
            </div>
            <RotateCcw size={14} className="text-orange-500" />
          </div>
        </div>

        {/* Spacer cells */}
        <div className="border-y bg-gray-100" />

        {/* Project grouping/summary tiles */}
        <div className="flex items-center gap-1 px-2 py-2 bg-green-200 border-y text-green-800 font-medium">
          <Split size={14} className="rotate-180" />
          ABC
          <MoreHorizontal size={14} className="text-gray-500 ml-auto" />
        </div>

        <div className="col-span-2 flex items-center gap-1 px-2 py-2 bg-purple-200 border-y text-purple-800 font-medium">
          <Split size={14} className="rotate-180" />
          Answer a question
          <MoreHorizontal size={14} className="text-gray-500 ml-auto" />
        </div>

        <div className="flex items-center gap-1 px-2 py-2 bg-orange-200 border-y text-orange-800 font-medium">
          <Split size={14} className="rotate-180" />
          Extract
          <MoreHorizontal size={14} className="text-gray-500 ml-auto" />
        </div>

        {/* Add new item button */}
        <div className="flex items-center justify-center px-2 py-2 bg-white border-y">
          <Plus size={22} />
        </div>

        {/* Render header row with icons */}
        {headers.map(({ label, icon: Icon }) => {
          let bg = "bg-gray-200";
          if (label === "Assigned") bg = "bg-green-100 text-green-800";
          if (label === "Priority") bg = "bg-purple-100 text-purple-800";
          if (label === "Due Date") bg = "bg-purple-100 text-purple-800";
          if (label === "Est. Value") bg = "bg-orange-100 text-orange-800";

          return (
            <div
              key={label}
              className={`${bg} px-2 py-2 border-b font-semibold text-xs flex items-center gap-1`}
            >
              {Icon && <Icon size={14} />} {label}
            </div>
          );
        })}

        {/* Render each row of data */}
        {data.map((row, rowIdx) =>
          Object.entries({
            "#": rowIdx + 1,
            "Job Request": row.job,
            Submitted: row.submitted,
            Status: row.status,
            Submitter: row.submitter,
            URL: row.url,
            Assigned: row.assigned,
            Priority: row.priority,
            "Due Date": row.due,
            "Est. Value": row.value,
            "": "",
          }).map(([key, val], colIdx) => {
            let className = "px-2 py-2 border-b";
            let content = val;

            // Highlight and style status values
            if (key === "Status") {
              className += " text-xs font-medium";
              content = (
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    val === "Complete"
                      ? "bg-green-100 text-green-800"
                      : val === "Blocked"
                      ? "bg-red-100 text-red-800"
                      : val === "In-process"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {val}
                </span>
              );
            }

            // Color-code priority text
            if (key === "Priority") {
              className += " text-xs font-medium";
              content = (
                <span
                  className={
                    val === "High"
                      ? "text-red-700"
                      : val === "Medium"
                      ? "text-orange-700"
                      : "text-gray-700"
                  }
                >
                  {val}
                </span>
              );
            }

            return (
              <div
                key={`${rowIdx}-${colIdx}`}
                tabIndex={0} // Makes cell focusable for keyboard nav
                data-row={rowIdx}
                data-col={colIdx}
                onKeyDown={handleKey}
                className={className}
              >
                {content}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
