// src/components/ItemCard.tsx

import { Item } from "./types";
import thumbsDown from "../assets/thumbs-down-solid.svg";
import thumbsUp from "../assets/thumbs-up-solid.svg";

interface ItemCardProps {
  item: Item;
  onDelete: (id: string) => void;
  onToggleStar: (id: string) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({
  item,
  onDelete,
  onToggleStar,
}) => {
  return (
    <div className="card text-center p-3 h-100">
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">
            <strong>Artist:</strong> {item.artist}
          </p>
          <p className="card-text">
            <strong>Album:</strong> {item.album}
          </p>
        </div>
        <div className="mt-3">
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => onDelete(item.id)}
          >
            Delete
          </button>
          <button
            className="btn btn-outline-info"
            onClick={() => onToggleStar(item.id)}
          >
            <img
              src={item.isStarred ? thumbsUp : thumbsDown}
              alt={item.isStarred ? "Starred" : "Not Starred"}
              width="20"
            />
            {item.isStarred ? " Starred" : " Star"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
