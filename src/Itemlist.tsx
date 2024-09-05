// Component that displays the list of songs.

import ItemCard from "./ItemCard";

export default function ItemList({ items }) {
  return (
    <div className="container">
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-md-6 col-lg-3 mb-4">
            <ItemCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
