// App.tsx
// Main component that holds the entire app, manages state, and handles CRUD operations

import { useEffect, useState } from "react"; // Import React hooks for state and side effects
import axios, { AxiosResponse } from "axios"; // Import Axios and AxiosResponse
import { Item } from "./types"; // Import the Item type definition
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import React Router components
import Sidebar from "./Sidebar"; // Import the Sidebar component for navigation
import ItemList from "./Itemlist"; // Import the ItemList component to display playlist items
import AddSongForm from "./AddSongForm"; // Import the AddSongForm component for adding new songs
import About from "./About"; // Import the About component for additional information
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS for styling---> Bootswatch v5.3.3 (https://bootswatch.com) Theme: lux- replace bootstrap.min.css file with bootswatch Lux theme file//

// Define the App component
export default function App() {
  const [list, setList] = useState<Item[]>([]);

  useEffect(() => {
    // Make a GET request to the MockAPI endpoint to retrieve the playlist
    axios
      .get<Item[]>("https://66ea3afe55ad32cda4781902.mockapi.io/:endpoint") // Explicitly specify the response type here
      .then((response: AxiosResponse<Item[]>) => {
        setList(response.data); // Update the state with the fetched data
      })
      .catch((error: any) => {
        console.error("Error fetching data:", error); // Log any errors to the console
      });
  }, []); // Empty dependency array ensures this runs only once on mount

  /**
   * Function to add a new item to the playlist
   * @param newItem - The new song item to be added
   */
  const handleAddItem = (newItem: Item) => {
    // Make a POST request to add the new item to MockAPI
    axios
      .post("https://66ea3afe55ad32cda4781902.mockapi.io/:endpoint", newItem)
      .then((response: AxiosResponse<Item[]>) => {
        setList([...list, response.data]); // Update the state with the newly added item
      })
      .catch((error: any) => {
        console.error("Error adding item:", error); // Log any errors to the console
      });
  };

  /**
   * Function to delete an item from the playlist by its ID
   * @param id - The ID of the item to be deleted
   */
  const handleDeleteItem = (id: number) => {
    // Make a DELETE request to remove the item from MockAPI
    axios
      .delete(`https://66ea3afe55ad32cda4781902.mockapi.io/:endpoint/${id}`)
      .then(() => {
        setList(list.filter((item) => item.id !== id)); // Update the state by removing the deleted item
      })
      .catch((error: any) => {
        console.error("Error deleting item:", error); // Log any errors to the console
      });
  };

  /**
   * Function to toggle the "starred" status of an item
   * @param id - The ID of the item to be updated
   */
  const handleToggleStar = (id: number) => {
    // Find the item to update
    const itemToUpdate = list.find((item) => item.id === id);
    if (itemToUpdate) {
      // Create an updated item with the toggled isStarred property
      const updatedItem = {
        ...itemToUpdate,
        isStarred: !itemToUpdate.isStarred,
      };

      // Make a PUT request to update the item in MockAPI
      axios
        .put(
          `https://66ea3afe55ad32cda4781902.mockapi.io/:endpoint/${id}`,
          updatedItem
        )
        .then((response: { data: any }) => {
          // Update the state with the updated item
          setList(list.map((item) => (item.id === id ? response.data : item)));
        })
        .catch((error: any) => {
          console.error("Error updating item:", error); // Log any errors to the console
        });
    }
  };

  return (
    // Wrap the entire app with Router to enable routing
    <Router>
      <div className="container-fluid d-flex p-0">
        {/* Sidebar for navigation */}
        <Sidebar />
        {/* Main content area */}
        <div className="content" style={{ flex: 1 }}>
          {/* Define the routes for different pages */}
          <Routes>
            {/* Home route displaying the playlist */}
            <Route
              path="/"
              element={
                <ItemList
                  items={list} // Pass the list of items as props
                  onDeleteItem={handleDeleteItem} // Pass the delete handler as props
                  onToggleStar={handleToggleStar} // Pass the toggle star handler as props
                />
              }
            />
            {/* Route for adding a new song */}
            <Route
              path="/add-song"
              element={<AddSongForm onAddItem={handleAddItem} />} // Pass the add handler as props
            />
            {/* About page route */}
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
