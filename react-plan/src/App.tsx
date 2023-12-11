import "./App.css";
import Context from "./components/Context";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div
      className="d-flex"
      style={{ height: "100vh", width: "100vw", boxSizing: "border-box" }}
    >
      <Sidebar />
      <Context />
    </div>
  );
}

export default App;
