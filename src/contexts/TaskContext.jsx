// import { createContext, useEffect, useState } from "react";
// import { auth } from "../backend/firebase";
// import { onAuthStateChanged } from "firebase/auth";

// export const TaskContext = createContext();

// export const TaskProvider = ({ children }) => {
//     const [tasks, setTasks] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [user, setUser] = useState(null);



//     return (
//         <TaskContext.Provider value={{ tasks, addTask, removeTask, loading }}>
//             {children}
//         </TaskContext.Provider>
//     );
// };
