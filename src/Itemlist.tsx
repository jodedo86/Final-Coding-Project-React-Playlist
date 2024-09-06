// Component that displays the list of songs.

import ItemCard from "./ItemCard";
import { Item } from "./types";
interface ItemListProps {
  items: Item[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div className="container">
      <p>Hello</p>
      <div className="row">
        {items.map((item: Item) => (
          <div key={item.id} className="col-md-6 col-lg-3 mb-4">
            <ItemCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
