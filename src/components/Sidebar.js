import { filterCategory } from "@/store/todoSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const filtrrd = useSelector((state) => state.todo.filtrrd);
  const [toglCateg, settoglCateg] = useState("Normal");

  const toggleFilter = ({ catgry }) => {
    settoglCateg(catgry);
  };
  console.log(filtrrd);
  useEffect(() => {
    dispatch(filterCategory({ category: toglCateg }));
    console.log(todos);
  }, [toglCateg, dispatch]);
  return (
    <div className="left-slider w-full flex h-full flex-col items-center justify-start rounded-lg py-4 shadow-md bg-white md:w-1/5">
      <h2 className="mb-4 text-xl font-semibold">Categories</h2>
      <ul className="space-y-2 w-2/3">
        <li
          onClick={() => toggleFilter({ catgry: "Normal" })}
          className="block rounded-md cursor-pointer bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          All
        </li>
        <li
          onClick={() => toggleFilter({ catgry: "Work" })}
          className="block rounded-md cursor-pointer bg-gray-200 px-4 py-2 hover:bg-gray-300"
        >
          Work
        </li>
        <li
          onClick={() => toggleFilter({ catgry: "Personal" })}
          className="block rounded-md cursor-pointer bg-gray-200 px-4 py-2 hover:bg-gray-300"
        >
          Personal
        </li>
        <li className="block rounded-md cursor-pointer bg-gray-200 px-4 py-2 hover:bg-gray-300">
          Completed
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
