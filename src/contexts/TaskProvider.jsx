import {  useEffect, useState } from "react";
import { auth } from "../backend/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { TaskContext } from "./TaskContext";


export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    // 🟢 Слухаємо авторизацію
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                console.log("✅ Авторизовано:", firebaseUser);
                setUser(firebaseUser);
            } else {
                console.log("🚫 Не авторизовано");
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // 📥 Завантажити таски
    useEffect(() => {
        const fetchTasks = async () => {
            const token = await user.getIdToken();
            console.log("📦 Token:", token);
            const res = await fetch("/api/tasks", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await res.json();
            console.log("📊 Завдання:", data);
            setTasks(data);
        };

        if (user) fetchTasks();
    }, [user]);

    // ➕ Додати задачу
    const addTask = async (title) => {
        if (!user) {
            console.warn("❌ Користувач не авторизований");
            return;
        }

        const token = await user.getIdToken();

        const res = await fetch("/api/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ title, status: "todo" }), // статус за замовчуванням
        });

        const newTask = await res.json();
        console.log("✅ Додано задачу:", newTask);
        if (!res.ok) {
            console.error("❌ Помилка при додаванні задачі:", newTask);
            return;
        }
        setTasks((prev) => [...prev, newTask]);
    };

    // ❌ Видалити задачу
    const removeTask = async (taskId) => {
        const token = await user.getIdToken();
        await fetch(`/api/tasks/${taskId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log("🗑️ Видалено задачу:", taskId);
        setTasks((prev) => prev.filter((t) => t.id !== taskId));
    };
    // 🔄 Змінити статус задачі
    // status може бути "todo", "in_progress", "done"
    const changeStatus = async (taskId, status) => {
        const token = await user.getIdToken();
        const res = await fetch(`/api/tasks/${taskId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ status }),
        });

        if (!res.ok) {
            const errorText = await res.text(); // <- покажемо помилку
            console.error("❌ Помилка при зміні статусу задачі:", errorText);
            return;
        }

        const updated = await res.json();
        setTasks((prev) =>
            prev.map((task) =>
                task.id === taskId ? { ...task, status: updated.status } : task
            )
        );
        console.log("🔄 Змінено статус задачі:", updated);
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, removeTask, changeStatus, loading, user }}>
            {children}
        </TaskContext.Provider>
    );
};
