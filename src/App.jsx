import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TaskProvider } from './contexts/TaskContext';
import TaskDashboard from './pages/TaskDashboard';
import Login from './pages/Login';
import usePageTitle from './hooks/usePageTitle';

function AppContent() {
  usePageTitle(); // ✅ Тепер викликається вже після Router

  return (
    <TaskProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tasks" element={<TaskDashboard />} />
      </Routes>
    </TaskProvider>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
