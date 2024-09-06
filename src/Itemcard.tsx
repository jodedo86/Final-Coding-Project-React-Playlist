// Componant that displays individual song information.
interface Item {
  title: string;
  artist: string;
  album: string;
}
export default function ItemCard({ item }: { item: Item }) {
  return (
    <div className="card text-center p-3">
      <h5 className="card-title">{item.title}</h5>
      <p className="card-text">{item.artist}</p>
      <p className="card-text">{item.album}</p>
    </div>
  );
}
