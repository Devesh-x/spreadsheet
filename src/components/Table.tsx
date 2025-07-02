// components/Table.tsx
export default function Table() {
  const data = [
    {
      job: "Launch social media campaign for pro...",
      submitted: "15-11-2024",
      status: "In-process",
      submitter: "Aisha Patel",
      url: "www.aishapatel...",
      assigned: "Sophie Choudhury",
      priority: "Medium",
      due: "20-11-2024",
      value: "6,200,000",
    },
    // ... Add more rows here
  ];

  return (
    <div className="overflow-x-auto text-sm">
      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            {["Job Request", "Submitted", "Status", "Submitter", "URL", "Assigned", "Priority", "Due Date", "Est. Value"].map(header => (
              <th key={header} className="text-left px-4 py-2 border-b">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">{row.job}</td>
              <td className="px-4 py-2">{row.submitted}</td>
              <td className="px-4 py-2">
                <span className={`px-2 py-1 rounded text-xs font-medium ${row.status === 'Complete' ? 'bg-green-100 text-green-800' : row.status === 'Blocked' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {row.status}
                </span>
              </td>
              <td className="px-4 py-2">{row.submitter}</td>
              <td className="px-4 py-2 text-blue-600 underline">{row.url}</td>
              <td className="px-4 py-2">{row.assigned}</td>
              <td className="px-4 py-2">{row.priority}</td>
              <td className="px-4 py-2">{row.due}</td>
              <td className="px-4 py-2">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
