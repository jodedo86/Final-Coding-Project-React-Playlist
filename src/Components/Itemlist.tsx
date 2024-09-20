// src/components/ItemList.tsx

import React from "react";
import ItemCard from "./ItemCard";
import { Item } from "./types";
import playlistIcon from "../assets/headphones-solid.svg"; // Import music image

interface ItemListProps {
  items: Item[];
  onDeleteItem: (id: string) => void;
  onToggleStar: (id: string) => void;
}

const ItemList: React.FC<ItemListProps> = ({
  items,
  onDeleteItem,
  onToggleStar,
}) => {
  return (
    <div className="container mt-4">
      <h1>
        <img
          src={playlistIcon}
          alt="Playlist Icon"
          width="150"
          style={{ marginRight: "8px" }}
        />
        My Playlist
      </h1>
      <hr />
      {items.length === 0 ? (
        <p>No songs in the playlist. Add some!</p>
      ) : (
        <div className="row">
          {items.map((item: Item) => (
            <div key={item.id} className="col-md-6 col-lg-4 mb-4">
              <ItemCard
                item={item}
                onDelete={onDeleteItem}
                onToggleStar={onToggleStar}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemList;
