import React from "react";
import "./TodoForm.css";
import { useState } from "react";

import { add } from "../../todoReducer";
import { useDispatch } from "react-redux";

export default function TodoForm() {
  let [value, setValue] = useState(" ");
  let dispatch = useDispatch();
  // use of dispatcer is to dispatch the action from component
  // to reducer
  return (
    <div>
      <div>
        <input
          value={value}
          onInput={(e) => setValue(e.target.value)}
          type="text"
          className="form-control"
        />
        <button
          onClick={() => {
            dispatch(add(value));
          }}
          className="float-end btn btn-primary mt-2"
        >
          Add
        </button>
      </div>
    </div>
  );
}
