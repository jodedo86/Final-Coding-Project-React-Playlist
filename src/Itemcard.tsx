// Componant that displays individual song information.
import React from "react";
import { Item } from "./types";
import thumbsDown from "./assets/thumbs-down-solid.svg";
import thumbsUp from "./assets/thumbs-up-solid.svg";

interface ItemCardProps {
  item: Item;
  onDelete: (id: number) => void;
  onToggleStar: (id: number) => void;
}

export default function ItemCard({
  item,
  onDelete,
  onToggleStar,
}: ItemCardProps) {
  return (
    <div className="card text-center p-3">
      <h5 className="card-title">{item.title}</h5>
      <p className="card-text">{item.artist}</p>
      <p className="card-text">{item.album}</p>
      <button
        className="btn btn-outline-primary"
        onClick={() => onDelete(item.id)}
      >
        Delete
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => onToggleStar(item.id)}
      >
        {item.isStarred ? "Unstar" : "Star"}
      </button>
    </div>
  );
}
