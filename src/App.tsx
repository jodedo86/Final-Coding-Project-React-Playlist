//Main component that holds the entire app
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ItemList from "./ItemList";
import { playlist as initialPlaylist } from "./Testdata";
import { Item } from "./types";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [list, setList] = useState<Item[]>(initialPlaylist);

  // Function to add a new item
  const handleAddItem = () => {
    const newItem: Item = {
      id: list.length,
      title: "New Song",
      artist: "New Artist",
      album: "New Album",
    };
    setList([...list, newItem]);
  };

  // Function to delete an item by id
  const handleDeleteItem = (id: number) => {
    setList(list.filter((item) => item.id !== id));
  };

  // Function to update an item's starred status
  const handleToggleStar = (id: number) => {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, isStarred: !item.isStarred } : item
      )
    );
  };

  return (
    <div className="container-fluid d-flex p-0">
      <Sidebar onAddItem={handleAddItem} />
      <ItemList
        items={list}
        onDeleteItem={handleDeleteItem}
        onToggleStar={handleToggleStar}
      />
    </div>
  );
}
