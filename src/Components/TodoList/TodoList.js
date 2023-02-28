import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import todoReducer, { delete1, todoSelector, update } from "../../todoReducer";
import "./TodoList.css";
export default function TodoList() {
  // give me data provided by todoSelector from todoReducer
  let value = useSelector(todoSelector);
  let dispatcher = useDispatch();

  let [todoTxt, setTxt] = useState("");
  let [todoIndex, setIndex] = useState("");

  return (
    <div>
      <table>
        {value.map((i, index) => (
          <tr>
            <td>
              {todoIndex !== index && i}
              {todoIndex === index && (
                <input
                  value={todoTxt}
                  type="text"
                  onInput={(e) => setTxt(e.target.value)}
                  className="form-control"
                />
              )}
            </td>

            <td>
              {" "}
              {todoIndex !== index && (
                <button
                  onClick={() => {
                    setTxt(i);
                    setIndex(index);
                  }}
                  className="btn btn-warning cl"
                >
                  Update
                </button>
              )}
              {todoIndex === index && (
                <button
                  onClick={() => {
                    dispatcher(update({ ind: index, txt: todoTxt }));
                    setTxt();
                    setIndex();
                  }}
                  className="btn btn-success cl"
                >
                  Save
                </button>
              )}
            </td>

            <td>
              <button
                onClick={() => {
                  dispatcher(delete1(index));
                }}
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
