import useTasks from "../../hooks/useTasks";
import Spinner from "../Spinner";

import TaskItem from "./TaskItem";
function TaskList() {
    const { tasks, loading, removeTask, changeStatus } = useTasks();

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Список завдань</h2>
            {loading && <Spinner />}
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} onDelete={() => removeTask(task.id)} onStatusChange={(newStatus) => changeStatus(task.id, newStatus)} />
                
            ))}
            {tasks.length === 0 && !loading && (
                <p className="text-gray-500">Завдань немає</p>
            )}
                
        </div>
    );
}
export default TaskList;