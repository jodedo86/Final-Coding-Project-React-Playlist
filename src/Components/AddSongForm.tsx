// src/Components/AddSongForm.tsx

import { useState } from "react"; // Import useState hook for managing component state
import { Item } from "./types"; // Import the Item type for type safety

// Define the props type for the AddSongForm component
interface AddSongFormProps {
  onAddItem: (newItem: Omit<Item, "id">) => void; // Function to handle adding a new item
}

// Functional component for adding a new song to the playlist
const AddSongForm: React.FC<AddSongFormProps> = ({ onAddItem }) => {
  // State variables to hold the values for the song details
  const [title, setTitle] = useState(""); // State for the song title
  const [artist, setArtist] = useState(""); // State for the artist name
  const [album, setAlbum] = useState(""); // State for the album name

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Create a new item object to be added
    const newItem: Omit<Item, "id"> = {
      title, // Title from state
      artist, // Artist from state
      album, // Album from state
      isStarred: false, // Default value for isStarred
      // Remove isThumbsUp as it is not part of Omit<Item, "id">
    };

    // Call the onAddItem function passed in as a prop to add the new item
    onAddItem(newItem);

    // Reset the form fields after adding the item
    setTitle("");
    setArtist("");
    setAlbum("");
  };

  return (
    <div className="container mt-4">
      <h2>Add a New Song</h2> {/* Header for the form */}
      <hr />
      <form onSubmit={handleSubmit}>
        {" "}
        {/* Form submission handler */}
        {/* Input field for song title */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Song Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // Update title state on input change
            required // Make this field required
          />
        </div>
        {/* Input field for artist name */}
        <div className="mb-3">
          <label htmlFor="artist" className="form-label">
            Artist
          </label>
          <input
            type="text"
            className="form-control"
            id="artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)} // Update artist state on input change
            required // Make this field required
          />
        </div>
        {/* Input field for album name */}
        <div className="mb-3">
          <label htmlFor="album" className="form-label">
            Album
          </label>
          <input
            type="text"
            className="form-control"
            id="album"
            value={album}
            onChange={(e) => setAlbum(e.target.value)} // Update album state on input change
            required // Make this field required
          />
        </div>
        {/* Submit button to add the song */}
        <button type="submit" className="btn btn-primary">
          Add Song
        </button>
      </form>
    </div>
  );
};

export default AddSongForm; // Export the AddSongForm component
