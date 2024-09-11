// Component displays buttons fields

import React from "react";

interface SidebarProps {
  onAddItem: () => void;
}

export default function Sidebar({ onAddItem }: SidebarProps) {
  return (
    <div
      className="bg-primary text-white d-flex flex-column align-items-center p-3"
      style={{ minWidth: "200px" }}
    >
      <button className="btn btn-secondary" onClick={onAddItem}>
        + Add Song
      </button>
    </div>
  );
}
