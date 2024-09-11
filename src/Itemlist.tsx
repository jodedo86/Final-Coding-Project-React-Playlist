// Component that displays the list of songs.

import React from "react";
import ItemCard from "./ItemCard";
import { Item } from "./types";

interface ItemListProps {
  items: Item[];
  onDeleteItem: (id: number) => void;
  onToggleStar: (id: number) => void;
}

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
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
