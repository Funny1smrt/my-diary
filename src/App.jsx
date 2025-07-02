import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TaskProvider } from './contexts/TaskContext';
import TaskDashboard from './pages/TaskDashboard';


function App() {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={<TaskDashboard />} />
        </Routes>
      </Router>
    </TaskProvider>
  )
}

export default App;
