import "./App.css";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div
      className="d-flex"
      style={{ height: "100vh", width: "100vw", boxSizing: "border-box" }}
    >
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
