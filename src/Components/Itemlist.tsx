// Component that displays the list of songs.

import React from "react";
import ItemCard from "./Itemcard";
import { Item } from "./types";

// Define the props interface for the ItemList component. Receives items, onDeleteItem, and onToggleStar as props.
interface ItemListProps {
  items: Item[]; // Array of items to be shown
  onDeleteItem: (id: number) => void; // Function to handle item deletion
  onToggleStar: (id: number) => void; // Function to toggle the "starred" status of an item
}

// ItemList component that displays a list of items
const ItemList: React.FC<ItemListProps> = ({
  items,
  onDeleteItem,
  onToggleStar,
}) => {
  return (
    <div className="container">
      <h1>My Playlist</h1>
      <br />
      <div className="row">
        {items.map((item: Item) => (
          <div key={item.id} className="col-md-6 col-lg-3 mb-4">
            <ItemCard
              item={item}
              onDelete={onDeleteItem}
              onToggleStar={onToggleStar}
              onToggleAdd={function (_id: number): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
