// src/components/Sidebar.tsx

import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div
      className="bg-primary text-white d-flex flex-column align-items-center p-3"
      style={{ minWidth: "200px", height: "100vh" }}
    >
      <h2 className="mb-4">Playlist App</h2>
      <Link to="/" className="btn btn-secondary mb-2 w-100">
        Playlist
      </Link>
      <Link to="/add-song" className="btn btn-secondary mb-2 w-100">
        + Add Song
      </Link>
      <Link to="/about" className="btn btn-secondary mb-2 w-100">
        About
      </Link>
    </div>
  );
};

export default Sidebar;
