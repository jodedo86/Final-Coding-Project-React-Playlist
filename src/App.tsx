//Main component that holds the entire app

import Sidebar from "./Sidebar";
import ItemList from "./ItemList";
//import ItemCard from "./ItemCard";
import { playlist } from "./Testdata";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="container-fluid d-flex p-0">
      <Sidebar />
      <ItemList items={playlist} />
    </div>
  );
}
