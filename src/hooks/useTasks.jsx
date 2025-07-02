import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

export default function useTasks() {
    return useContext(TaskContext);
}

