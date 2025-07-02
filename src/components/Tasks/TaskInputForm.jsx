import useTasks from '../../hooks/useTasks';
import { useState } from 'react';

function TaskInputForm() {
    const { addTask } = useTasks();
    const [inputValue, setInputValue] = useState('');
    const handleAdd = () => {
        const trimmed = inputValue.trim();
        if (!trimmed) return; // захист від порожніх задач

        addTask({
            id: Date.now(),
            name: trimmed,
        });

        setInputValue('');
      };
    return (
      <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Введіть завдання"
                className="task-input"
            />
            <button
                className="bg-green-500 border-r-4"
                onClick={handleAdd}>Додати завдання</button>

      </div>


  );
}
export default TaskInputForm;