// Component displays buttons fields

// Define the props interface for the Sidebar component
interface SidebarProps {
  onAddItem: () => void; // Function to handle adding a new item
}

// Sidebar component that displays input and button for adding items
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
