import { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    const removeTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskId));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
            {children}
        </TaskContext.Provider>
    );
}

