// components/Toolbar.tsx
export default function Toolbar() {
  return (
    <div className="flex gap-2 p-2 text-sm border-b">
      {["Tool bar", "Hide fields", "Sort", "Filter", "Cell view"].map(btn => (
        <button
          key={btn}
          onClick={() => console.log(`${btn} clicked`)}
          className="bg-gray-100 px-3 py-1 rounded hover:bg-gray-200"
        >
          {btn}
        </button>
      ))}
    </div>
  );
}
