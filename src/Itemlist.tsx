// Displays a list of items.

import ItemCard from "./ItemCard";

export default function ItemList({ items }) {
  return (
    <div className="p-3">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
