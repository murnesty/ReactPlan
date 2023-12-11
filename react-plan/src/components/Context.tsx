import Counter from "./Counter";

const Context = () => {
  const style = {
    border: ".1em solid gray",
    padding: "1em",
    margin: "0 1em 0 0",
    "flex-grow": "1",
  };

  return (
    <div style={style}>
      <Counter heading={"Test Counter"} initialCount={0} />
    </div>
  );

export default Context;
