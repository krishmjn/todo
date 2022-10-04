import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adder } from "../action";

const Body = () => {
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.reducer.list);

  return (
    <form
      className="form"
      onSubmit={(e) => dispatch(adder(data), e.preventDefault(), setData(""))}
      action="submit"
    >
      <input
        value={data}
        onChange={(e) => setData(e.target.value)}
        className="field"
        type="text"
        placeholder="Enter the task please...."
      />
      <button type="submit" className="add">
        +
      </button>
      <div className="showItem">
        {myState.map((elem) => {
          return (
            <div className="eachItem" key={elem.id}>
              <h3>{elem.data}</h3>
            </div>
          );
        })}
      </div>
    </form>
  );
};

export default Body;
