// Component displays buttons fields

import { Link } from "react-router-dom";

//Contains navigation links to different pages (Playlist, Add Song, About).
export default function Sidebar() {
  return (
    <div
      className="bg-primary text-white d-flex flex-column align-items-center p-3"
      style={{ minWidth: "200px" }}
    >
      <Link to="/" className="btn btn-secondary mb-2">
        Playlist
      </Link>
      <Link to="/add-song" className="btn btn-secondary mb-2">
        + Add Song
      </Link>
      <Link to="/about" className="btn btn-secondary mb-2">
        About
      </Link>
    </div>
  );
}
