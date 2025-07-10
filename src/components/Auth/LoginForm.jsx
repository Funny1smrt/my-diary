// pages/LoginForm.jsx
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../backend/firebase"; // шлях до твого firebase.js

import { useNavigate } from "react-router-dom";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg("");

        if (!email || !password) {
            setErrorMsg("Усі поля обов'язкові");
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const token = await userCredential.user.getIdToken();
            // console.log("🔑 Firebase ID Token:", token);

            navigate("/tasks"); // Перенаправлення на головну сторінку після входу
        } catch (error) {
            setErrorMsg("Невірний email або пароль");
        }
    };

    return (
        <div className="flex flex-col justify-center items-center min-w-fit min-h-fit p-6 bg-(--bg-card) border rounded">
            <h2 className="text-2xl font-bold mb-4 text-(--text)">Вхід</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-80" autoComplete="on">
                <input
                    type="email"
                    placeholder="Email"
                    className="border p-2 rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Пароль"
                    className="border p-2 rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {errorMsg && <p className="text-(--error)">{errorMsg}</p>}

                <button
                    type="submit"
                    className="bg-(--bg-button) text-white p-2 rounded hover:bg-(--bg-h-button) transition-colors duration-200"
                >
                    Увійти
                </button>
                <button
                    type="button"
                    onClick={() => {
                        setEmail("");
                        setPassword("");
                        setErrorMsg("");
                    }}
                    className="border m-auto w-fit p-1 rounded text-(--text)"
                >
                    Очистити
                </button>

            </form>
        </div>
    );
}

export default LoginForm;
