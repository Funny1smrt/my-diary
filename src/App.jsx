import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TaskProvider } from './contexts/TaskContext';
import TaskDashboard from './pages/TaskDashboard';
import Login from './pages/Login';

function App() {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/task" element={<TaskDashboard />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </TaskProvider>
  )
}

export default App;
