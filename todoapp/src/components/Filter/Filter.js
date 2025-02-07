import React from "react";

const Filter = ({ setFilter }) => {
  return (
    <div className="d-flex justify-content-between mt-2 w-50" >
      <button onClick={() => setFilter("all")} className="btn-secondary btn">All</button>
      <button onClick={() => setFilter("completed")} className="btn-secondary btn">Completed</button>
      <button onClick={() => setFilter("pending")} className="btn-secondary btn">Pending</button>
    </div>
  );
};

export default Filter;
