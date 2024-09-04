// The main component that includes the sidebar and item list.

import Sidebar from "./Sidebar";
import ItemList from "./Itemlist";
import testData from "./TestData/";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <ItemList items={testData} />
        </div>
      </div>
    </div>
  );
}

export default App;
