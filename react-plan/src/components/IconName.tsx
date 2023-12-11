interface Props {
  icon: string;
  heading: string;
}

const IconName = ({ icon, heading }: Props) => {
  const style = {
    display: "flex",
    gap: "1em",
  };
  const iconClass = `${icon} m-auto`;

  return (
    <div style={style}>
      <i className={iconClass}></i>
      <h5 className="m-auto">{heading || ""}</h5>
    </div>
  );
};

export default IconName;
