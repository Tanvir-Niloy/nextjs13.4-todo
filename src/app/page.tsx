import React from "react";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { getAllTodos } from "../../api";

export default async function Home() {

  const tasks = await getAllTodos();

  return (
    <main className="max-w-4xl mx-auto">
      <div className="text-center my-5 flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Todolist App</h2>
        <AddTask />
      </div>
      <TodoList tasks={tasks}/>
    </main>
  );
}
