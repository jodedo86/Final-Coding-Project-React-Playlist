// AddSongForm.tsx
// Component that provides a form to add a new song to the playlist

import { useState } from "react"; // Import useState for managing form input state
import { Item } from "./types"; // Import the Item type definition

// Define the props interface for the AddSongForm component
interface AddSongFormProps {
  onAddItem: (newItem: Item) => void; // Function to handle adding a new item
}

// AddSongForm component definition
export default function AddSongForm({ onAddItem }: AddSongFormProps) {
  // Initialize state for each form field
  const [title, setTitle] = useState(""); // State for song title
  const [artist, setArtist] = useState(""); // State for artist name
  const [album, setAlbum] = useState(""); // State for album name

  /**
   * Handle form submission
   * @param e - Form event
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Create a new Item object with form data
    const newItem: Item = {
      id: Date.now(), // Generate a unique ID using timestamp
      title, // Assign title from form input
      artist, // Assign artist from form input
      album, // Assign album from form input
      isStarred: false, // Initialize isStarred as false
    };

    onAddItem(newItem); // Call the onAddItem function passed via props

    // Optionally, reset form fields after submission
    setTitle("");
    setArtist("");
    setAlbum("");
  };

  return (
    <div className="container mt-4">
      <h2>Add a New Song</h2>
      {/* Form for adding a new song */}
      <form onSubmit={handleSubmit}>
        {/* Song Title Field */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Song Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title} // input value to title state
            onChange={(e) => setTitle(e.target.value)} // Update title state on change
            required // Make this field required
          />
        </div>

        {/* Artist Name Field */}
        <div className="mb-3">
          <label htmlFor="artist" className="form-label">
            Artist
          </label>
          <input
            type="text"
            className="form-control"
            id="artist"
            value={artist} // input value to artist state
            onChange={(e) => setArtist(e.target.value)} // Update artist state on change
            required // Make this field required
          />
        </div>

        {/* Album Name Field */}
        <div className="mb-3">
          <label htmlFor="album" className="form-label">
            Album
          </label>
          <input
            type="text"
            className="form-control"
            id="album"
            value={album} // input value to album state
            onChange={(e) => setAlbum(e.target.value)} // Update album state on change
            required // Make this field required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Add Song
        </button>
      </form>
    </div>
  );
}
