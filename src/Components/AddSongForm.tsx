// src/components/AddSongForm.tsx

import { useState } from "react";
import { Item } from "./types";
interface AddSongFormProps {
  onAddItem: (newItem: Omit<Item, "id">) => void;
}

const AddSongForm: React.FC<AddSongFormProps> = ({ onAddItem }) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newItem: Omit<Item, "id"> = {
      title,
      artist,
      album,
      isStarred: false,
      isThumbsUp: undefined,
    };

    onAddItem(newItem);

    setTitle("");
    setArtist("");
    setAlbum("");
  };

  return (
    <div className="container mt-4">
      <h2>Add a New Song</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Song Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="artist" className="form-label">
            Artist
          </label>
          <input
            type="text"
            className="form-control"
            id="artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="album" className="form-label">
            Album
          </label>
          <input
            type="text"
            className="form-control"
            id="album"
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Song
        </button>
      </form>
    </div>
  );
};

export default AddSongForm;
