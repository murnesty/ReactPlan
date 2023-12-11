import React, { useState } from "react";

interface Props {
  heading: string;
  initialCount: number;
}

const Counter = ({ heading, initialCount }: Props) => {
  const [cnt, setCnt] = useState(initialCount);

  return (
    <div className="d-flex" style={{ gap: 15 }}>
      <h3 className="m-auto">{heading}</h3>
      <div className="btn btn-primary m-auto" onClick={() => setCnt(cnt + 1)}>
        {cnt}
      </div>
    </div>
  );
};

export default Counter;
