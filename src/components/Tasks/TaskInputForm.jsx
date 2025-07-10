// import useTasks from '../../hooks/useTasks';
import { useState } from 'react';

function TaskInputForm() {
  const { addTask } = useTasks();
  const [inputValue, setInputValue] = useState('');

  const handleAdd = async () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    // передаємо лише title — сервер поверне повний обʼєкт (з id, created_at)
    await addTask(trimmed);
    setInputValue('');
  };

  return (
    <div className="flex gap-2 mt-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введіть завдання"
        className="border p-2 flex-1"
      />
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={handleAdd}
      >
        Додати завдання
      </button>
    </div>
  );
}

export default TaskInputForm;
