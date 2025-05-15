import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdFileDownloadDone } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  removeTodo,
  editTodo,
  toggleTodo,
  resubmitTodo,
} from "@/store/todoSlice";
const TaskList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const [inputEditTxt, setInputEditTxt] = useState("");
  const [category, setCategory] = useState("Normal");

  const toggleEdit = ({ text, id, catgory }) => {
    dispatch(resubmitTodo({ text: text, id: id, category: catgory }));
    setInputEditTxt("");
    setCategory("Normal");
  };
  return (
    <>
     { todos.map((item) => (
            <div
              key={item.id}
              className=" mb-2 rounded-lg shadow-xl  p-2 shadow-blue-300 shadow- bg-white flex items-center"
            >
              {!item.edit ? (
                <>
                  {" "}
                  <input
                    checked={item.completed}
                    type="checkbox"
                    onChange={() => dispatch(toggleTodo(item.id))}
                  />
                  <p
                    className={`w-full text-xl ${
                      item.completed ? "line-through text-gray-300" : ""
                    } px-4 py-2 focus:outline-none cursor-pointer focus:ring-2 focus:ring-blue-500`}
                  >
                    {item.text}{" "}
                    <span
                      className={`text-xs ${
                        item.category == "Personal" ? "text-red-400 font-semibold text-[0.71rem]" : ""
                      } text-gray-500`}
                    >
                      {" "}
                      ( {item.category} )
                    </span>
                  </p>
                  <FaEdit
                    onClick={() => {
                      dispatch(editTodo(item.id));
                      setInputEditTxt(item.text); // preload the text
                    }}
                    className=" mx-2 cursor-pointer w-8 h-8 text-green-500  hover:text-green-600"
                  />
                  <MdDelete
                    onClick={() => dispatch(removeTodo(item.id))}
                    className="cursor-pointer w-8 h-8 text-red-500 hover:text-red-600"
                  />
                </>
              ) : (
                <>
                  <input
                    type="text"
                    value={inputEditTxt}
                    onChange={(e) => setInputEditTxt(e.target.value)}
                    className="w-full rounded-md border border-gray-300 p-[.31rem] focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="rounded-md border border-gray-300 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Normal">Normal</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                  </select>
                  <MdFileDownloadDone
                    className=" mx-2 cursor-pointer w-8 h-8 text-sky-500  hover:text-sky-600-600"
                    onClick={() =>
                      toggleEdit({
                        text: inputEditTxt,
                        id: item.id,
                        catgory: category,
                      })
                    }
                  />
                </>
              )}
            </div>
          ))}
    </>
  );
};

export default TaskList;
