// components/Tabs.tsx
import { useState } from 'react';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("Q3 Financial Overview");

  return (
    <div className="px-2 py-2 border-b">
      <button
        className={`px-4 py-1 rounded-t-md border ${activeTab ? "bg-white font-medium" : "bg-gray-100"}`}
        onClick={() => setActiveTab("Q3 Financial Overview")}
      >
        📄 Q3 Financial Overview
      </button>
    </div>
  );
}
