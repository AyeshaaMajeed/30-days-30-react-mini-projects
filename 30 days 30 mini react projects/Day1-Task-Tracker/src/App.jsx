import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "notCompleted") return !task.completed;
    return true;
  });

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white">
      <header className="w-full max-w-md mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Task Tracker</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
            className="flex-1 p-2 rounded-l-lg border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          />
          <button
            onClick={addTask}
            className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-700"
          >
            Add Task
          </button>
        </div>
        <div className="flex justify-center mb-4">
          <button
            onClick={() => changeFilter("all")}
            className={`px-4 py-2 mx-1 rounded-lg ${
              filter === "all" ? "bg-blue-700" : "bg-blue-500"
            } text-white hover:bg-blue-700`}
          >
            All
          </button>
          <button
            onClick={() => changeFilter("completed")}
            className={`px-4 py-2 mx-1 rounded-lg ${
              filter === "completed" ? "bg-blue-700" : "bg-blue-500"
            } text-white hover:bg-blue-700`}
          >
            Completed
          </button>
          <button
            onClick={() => changeFilter("notCompleted")}
            className={`px-4 py-2 mx-1 rounded-lg ${
              filter === "notCompleted" ? "bg-blue-700" : "bg-blue-500"
            } text-white hover:bg-blue-700`}
          >
            Not Completed
          </button>
        </div>
        <ul className="list-none p-0">
          {filteredTasks.map((task, index) => (
            <li
              key={index}
              className={`flex justify-between items-center p-4 mb-2 rounded-lg bg-gray-800 ${
                task.completed ? "line-through opacity-60" : ""
              }`}
            >
              {task.text}
              <div className="flex space-x-2">
                <button
                  onClick={() => toggleTaskCompletion(index)}
                  className={`px-4 py-2 rounded-lg ${
                    task.completed
                      ? "bg-yellow-500 hover:bg-yellow-700"
                      : "bg-green-500 hover:bg-green-700"
                  } text-white`}
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>
                <button
                  onClick={() => deleteTask(index)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
