import useTasks from '../../hooks/useTasks';

function TaskList() {
    const { tasks, removeTask } = useTasks();

    return (
        <div
            className="bg-gray-100 p-4 rounded-lg shadow-md">
            <p>Кількість завдань: {tasks.length}</p>
            <h2>Список завдань:</h2>
            {tasks.length === 0 && <p>Немає завдань</p>}
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.name}
                        <button onClick={() => removeTask(task.id)}>Х</button>
                    </li>
                ))}
            </ul>

        </div>
    );
}
export default TaskList;