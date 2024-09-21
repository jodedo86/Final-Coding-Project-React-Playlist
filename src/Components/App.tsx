// App.tsx

import { useEffect, useState } from "react"; // Importing React hooks for managing state and side effects
import { Item } from "./types"; // Importing the Item type definition for TypeScript
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing routing components for navigation
import Sidebar from "./Sidebar"; // Importing the Sidebar component for navigation
import ItemList from "./Itemlist"; // Importing the ItemList component to display the list of items
import AddSongForm from "./AddSongForm"; // Importing the form to add new songs
import About from "./About"; // Importing the About component for informational content
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap CSS for styling

// Define the URL endpoint for the mock API
const URL_ENDPOINT = "https://66ea3afe55ad32cda4781902.mockapi.io/Playlist";

const App: React.FC = () => {
  // State variable to hold the list of items (songs)
  const [list, setList] = useState<Item[]>([]);

  // Function to fetch the item list from the API
  const fetchGet = async () => {
    try {
      const response = await fetch(URL_ENDPOINT); // Fetching data from the API endpoint
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`); // Handle any HTTP errors
      }
      const data: Item[] = await response.json(); // Parse the JSON response
      setList(data); // Update the state with the fetched data
      console.log(data); // Log the fetched data for debugging
    } catch (error) {
      console.error("Error fetching data:", error); // Log any errors that occur during the fetch
    }
  };

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetchGet(); // Call the fetch function
  }, []); // Empty dependency array means this runs once on mount

  // Function to handle adding a new item (song)
  const handleAddItem = async (newItem: Omit<Item, "id">) => {
    try {
      const response = await fetch(URL_ENDPOINT, {
        method: "POST", // Use POST method to add a new item
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify(newItem), // Convert the new item to JSON
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`); // Handle any HTTP errors
      }

      const addedItem: Item = await response.json(); // Parse the JSON response
      setList((prevList) => [...prevList, addedItem]); // Update the state to include the new item
    } catch (error) {
      console.error("Error adding item:", error); // Log any errors that occur during the add
    }
  };

  // Function to handle deleting an item by id
  const handleDeleteItem = async (id: string) => {
    try {
      const response = await fetch(`${URL_ENDPOINT}/${id}`, {
        method: "DELETE", // Use DELETE method to remove the item
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`); // Handle any HTTP errors
      }

      // Update the state to remove the deleted item
      setList((prevList) => prevList.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error); // Log any errors that occur during deletion
    }
  };

  // Function to handle toggling the 'starred' status of an item
  const handleToggleStar = async (id: string) => {
    const itemToUpdate = list.find((item) => item.id === id); // Find the item by id
    if (!itemToUpdate) {
      console.error(`Item with id ${id} not found.`); // Log if the item is not found
      return; // Exit if the item is not found
    }

    // Create a new object to update the starred status
    const updatedItem = {
      ...itemToUpdate,
      isStarred: !itemToUpdate.isStarred, // Toggle the isStarred property
    };

    try {
      const response = await fetch(`${URL_ENDPOINT}/${id}`, {
        method: "PUT", // Use PUT method to update the item
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify(updatedItem), // Convert the updated item to JSON
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`); // Handle any HTTP errors
      }

      const returnedItem: Item = await response.json(); // Parse the JSON response
      // Update the state with the modified item
      setList((prevList) =>
        prevList.map((item) => (item.id === id ? returnedItem : item))
      );
    } catch (error) {
      console.error("Error updating item:", error); // Log any errors that occur during the update
    }
  };

  return (
    <Router>
      <div className="container-fluid d-flex p-0">
        {" "}
        {/* Main container for the app */}
        <Sidebar /> {/* Render the Sidebar component */}
        <div className="content" style={{ flex: 1 }}>
          {" "}
          {/* Content area */}
          <Routes>
            <Route
              path="/" // Define the route for the main item list
              element={
                <ItemList
                  items={list} // Pass the list of items to ItemList
                  onDeleteItem={handleDeleteItem} // Pass delete handler
                  onToggleStar={handleToggleStar} // Pass toggle star handler
                />
              }
            />
            <Route
              path="/add-song" // Define the route for adding a new song
              element={<AddSongForm onAddItem={handleAddItem} />} // Render the AddSongForm component
            />
            <Route path="/about" element={<About />} />{" "}
            {/* Define the route for the About page */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App; // Export the App component for use in other modules
