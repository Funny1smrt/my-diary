import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../backend/firebase";
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
            await userCredential.user.getIdToken(); // можна зберегти токен, якщо потрібно
            navigate("/tasks");
        } catch (error) {
            setErrorMsg("Невірний email або пароль");
        }
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen p-6 bg-[var(--bg-card)] border rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Вхід</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-xs" autoComplete="on">
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

                {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}

                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
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
                    className="border border-gray-400 p-1 rounded text-sm hover:bg-gray-100"
                >
                    Очистити
                </button>
            </form>
        </div>
    );
}

export default LoginForm;
