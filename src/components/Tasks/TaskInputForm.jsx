import useTasks from '../../hooks/useTasks';
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
    <div className="  flex gap-2 items-center justify-center p-4 bg-gray-100 rounded shadow">
      <input
        type="text"
        name='taskTitle'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введіть завдання"
        maxLength={20}
        className="input"
        title="Максимум 20 символів"
        autoFocus
        autoComplete="off"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault(); // запобігаємо стандартній поведінці
            handleAdd();
          }
        }}
      />
      <button
        className="button"
        onClick={handleAdd}
        disabled={!inputValue.trim()} // кнопка неактивна, якщо порожній input
        title="Додати завдання"

      >
        Додати завдання
      </button>
    </div>
  );
}

export default TaskInputForm;
