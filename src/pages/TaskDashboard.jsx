import TaskList from "../components/Tasks/TaskList";
import TaskInputForm from "../components/Tasks/TaskInputForm";
import WeatherNow from "../components/WeatherNow";
function TaskDashboard() {

    return (
        <div>
            <WeatherNow />
            <TaskInputForm/>
            <TaskList />
        </div>
    );
}
export default TaskDashboard;