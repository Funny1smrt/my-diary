import useTasks from "../../hooks/useTasks";

function TaskList() {
    const { tasks, removeTask } = useTasks();

    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    {task.title}
                    <button onClick={() => removeTask(task.id)}>🗑</button>
                </li>
            ))}
        </ul>
    );
}
export default TaskList;