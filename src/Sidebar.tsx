// Component displays input fields and buttons.

export default function Sidebar() {
  return (
    <div
      className="bg-primary text-white d-flex flex-column align-items-center p-3"
      style={{ minWidth: "200px" }}
    >
      <input className="form-control mb-2" type="text" placeholder="Input" />
      <button className="btn btn-secondary">+ Create Playlist</button>
    </div>
  );
}
