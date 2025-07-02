import TaskList from "../components/Tasks/TaskList";
import TaskInputForm from "../components/Tasks/TaskInputForm";
function TaskDashboard() {

    return (
        <div>
            <TaskInputForm/>
            <TaskList />
        </div>
    );
}
export default TaskDashboard;