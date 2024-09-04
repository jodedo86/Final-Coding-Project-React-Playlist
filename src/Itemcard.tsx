// Displays individual song details.

export default function ItemCard({ item }) {
  return (
    <tr>
      <td>{item.title}</td>
      <td>{item.artist}</td>
      <td>{item.album}</td>
    </tr>
  );
}
