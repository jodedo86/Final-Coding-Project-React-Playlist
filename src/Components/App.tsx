// src/App.tsx

import { useEffect, useState } from "react";
import { Item } from "./types";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import ItemList from "./Itemlist";
import AddSongForm from "./AddSongForm";
import About from "./About";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootswatch Lux is imported

const URL_ENDPOINT = "https://66ea3afe55ad32cda4781902.mockapi.io/Playlist"; // Replace with your MockAPI URL

const App: React.FC = () => {
  const [list, setList] = useState<Item[]>([]);

  /**
   * Fetch the playlist items using GET request
   */
  const fetchGet = async () => {
    try {
      const response = await fetch(URL_ENDPOINT);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: Item[] = await response.json();
      setList(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchGet();
  }, []);

  /**
   * Add a new item to the playlist
   */
  const handleAddItem = async (newItem: Omit<Item, "id">) => {
    try {
      const response = await fetch(URL_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const addedItem: Item = await response.json();
      setList([...list, addedItem]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  /**
   * Delete an item from the playlist by its ID
   */
  const handleDeleteItem = async (id: string) => {
    try {
      const response = await fetch(`${URL_ENDPOINT}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setList(list.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  /**
   * Toggle the "starred" status of an item
   */
  const handleToggleStar = async (id: string) => {
    const itemToUpdate = list.find((item) => item.id === id);
    if (!itemToUpdate) {
      console.error(`Item with id ${id} not found.`);
      return;
    }

    const updatedItem = {
      ...itemToUpdate,
      isStarred: !itemToUpdate.isStarred,
    };

    try {
      const response = await fetch(`${URL_ENDPOINT}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedItem),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const returnedItem: Item = await response.json();
      setList(list.map((item) => (item.id === id ? returnedItem : item)));
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return (
    <Router>
      <div className="container-fluid d-flex p-0">
        <Sidebar />
        <div className="content" style={{ flex: 1 }}>
          <Routes>
            <Route
              path="/"
              element={
                <ItemList
                  items={list}
                  onDeleteItem={handleDeleteItem}
                  onToggleStar={handleToggleStar}
                />
              }
            />
            <Route
              path="/add-song"
              element={<AddSongForm onAddItem={handleAddItem} />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
