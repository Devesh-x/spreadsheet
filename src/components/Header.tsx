// components/Header.tsx
export default function Header() {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-white">
      <div className="text-sm text-gray-600">Workspace &gt; Folder 2 &gt; <span className="font-semibold">Spreadsheet 3</span></div>
      <div className="flex items-center gap-2">
        <input className="border px-2 py-1 rounded text-sm" placeholder="Search within sheet" />
        <button className="bg-green-600 text-white px-3 py-1 rounded text-sm">New Action</button>
        <div className="w-8 h-8 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
}
