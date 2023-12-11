import IconName from "./IconName";

const Sidebar = () => {
  const style = {
    display: "flex",
    "flex-direction": "column",
    gap: "1em",
    border: ".1em solid gray",
    padding: "1em",
  };

  return (
    <div style={style}>
      <IconName icon="fa-solid fa-compass-drafting" heading="Planner" />
      <ul>
        <li>
          <a>2024</a>
        </li>
        <li>
          <a>2025</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
