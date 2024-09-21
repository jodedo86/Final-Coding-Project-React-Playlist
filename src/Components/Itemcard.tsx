import React from "react";
import { Item } from "./types";
import thumbsDown from "../assets/thumbs-down-solid.svg"; // Updated path
import thumbsUp from "../assets/thumbs-up-solid.svg"; // Updated path

interface ItemCardProps {
  item: Item;
  onDelete: (id: string) => void; // Keep as string
  onToggleStar: (id: string) => void; // Keep as string
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
        onClick={() => onDelete(item.id)} // Use item.id as a string
      >
        Delete
      </button>
      <button
        className="btn btn-outline-info"
        onClick={() => onToggleStar(item.id)} // Use item.id as a string
      >
        <img
          src={item.isStarred ? thumbsUp : thumbsDown}
          alt={item.isStarred ? "thumbs up" : "thumbs down"}
          width="20"
        />
      </button>
    </div>
  );
}
