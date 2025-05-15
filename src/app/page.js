"use client";

import { BiSolidMessageSquareAdd } from "react-icons/bi";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "@/store/todoSlice";
// import Sidebar from "@/components/Sidebar";
import TaskList from "@/components/TaskList";

export default function Home() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const [category, setCategory] = useState("Normal");

  return (
    <div className="flex bg-gray-200 md:px-0  md:p-6 md:bg-white justify-center items-center">
      <div className="lg:w-3/4 md:w-full flex-col  md:py-6 flex items-center justify-center bg-gray-200">
        <header className=" text-center">
          <h1 className="text-3xl font-bold text-gray-800">To-Do App</h1>
        </header>
        <div className="md:flex p-1 md:flex-row flex flex-col items-center gap-1 md:gap-1 w-full  h-full  justify-between">
          {/* <Sidebar /> */}
          <div className="right-body w-full flex flex-col items-center justify-start">
            <div className="mb-4 w-full  md:w-11/12 rounded-lg p-6 shadow-md">
              <div className=" bg-white gap-1 flex items-center w-full  rounded-lg  p-6 shadow-md">
                <input
                  className="w-full rounded-md border border-gray-300 p-[.31rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Add a new task"
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
                <BiSolidMessageSquareAdd
                  onClick={() => {
                    if (input.trim() === "") {
                      alert("Task can't be empty! Please add a task.");
                      return;
                    }
                    dispatch(
                      addTodo({
                        text: input,
                        category: category,
                      })
                    );

                    setInput("");
                    setCategory("Normal");
                  }}
                  className="cursor-pointer w-14 h-14 text-blue-500 hover:text-blue-600"
                />
              </div>
            </div>
            <div className="mb-4 w-full  md:w-11/12 rounded-lg  p-6 shadow-md">
              <TaskList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
