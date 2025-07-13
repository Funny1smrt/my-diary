import { useState } from "react";
import InlineSpinner from "./InlineSpinner";
import useTasks from "../hooks/useTasks";
function DeleteButton({ id }) {
    const [loading, setLoading] = useState(false);
    const { removeTask } = useTasks();

    const handleClick = async () => {
        setLoading(true);
        try {
            await removeTask(id); // Виклик функції для видалення задачі
            setLoading(false);

            console.log("✅ Задача видалена");
        } catch (error) {
            console.error("❌ Помилка при видаленні задачі:", error);
        }
        
    };

    return (
        <button
            onClick={ handleClick }
            disabled={loading}
            className="bg-red-600 text-white font-medium px-4 py-2 rounded hover:bg-red-700 disabled:opacity-50 flex items-center"
        >
            {loading ? "Видалення" : "Видалити"}
            {loading && <InlineSpinner />}
        </button>
    );
}

export default DeleteButton;
