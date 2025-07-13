import { useState } from "react";
import InlineSpinner from "../InlineSpinner";

function TaskItem({ task, onDelete, onStatusChange }) {
    const [deleting, setDeleting] = useState(false);

    const handleDelete = async () => {
        setDeleting(true);
        await onDelete(task.id); // виклик функції з контексту/батька
        setDeleting(false);
    };

    return (
        <li key={task.id} className="flex justify-between gap-3 items-center border-b py-2">
            <span>{task.title}</span>
            
            <select
                value={task.status ?? "todo"} // ✅ якщо status не вказано — буде "todo"
                onChange={(e) => onStatusChange(e.target.value)}
            >

                <option value="todo">📝 Очікує</option>
                <option value="in_progress">⏳ В процесі</option>
                <option value="done">✅ Виконано</option>
            </select>
            <button
                onClick={handleDelete}
                disabled={deleting}
                className="text-red-600 hover:text-red-800 flex items-center gap-1 disabled:opacity-50"
            >
                {deleting ? (
                    <>
                        Видаляю <InlineSpinner />
                    </>
                ) : (
                    "Видалити"
                )}
            </button>
        </li>
    );
}

export default TaskItem;
