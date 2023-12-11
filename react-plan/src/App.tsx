import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Counter heading={"Test Counter"} initialCount={0} />
    </>
  );
}

export default App;
