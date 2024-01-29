import { useState } from "react";
import './TaskList.scss';
import { v4 as uuid } from "uuid";
import TaskItem from "../TaskItem/TaskItem";
import TaskForm from "../TaskForm/TaskForm";

function TaskList() {

    // eslint-disable-next-line no-unused-vars
    const [tasks, setTasks] = useState([{
        id: uuid(),
        title: 'Walk the dog',
        status: false
    },
    {
        id: uuid(),
        title: 'Play with cats',
        status: true
    },
    {
        id: uuid(),
        title: 'Feed the fish',
        status: false
    }]);

    const [isToggle, setIsToggle] = useState(true);
    const handleDelete = (taskId) => {
        setTasks(() => {
            return tasks.filter((el) => el.id !== taskId)
        })
    }

    const handleToggle = () => {
        setIsToggle(!isToggle);
    }

    const addTask = ({ task, status }) => {
        setTasks(() => {
            return [...tasks, { id: uuid(), title: task, status: JSON.parse(status) }];
        })
    }

    return (
        <div className="TaskList">

            <TaskForm uuid={uuid} addTask={addTask} />

            <div className="toggleButton">
                <button className={isToggle ? "hide" : "show"} onClick={handleToggle}>
                    {isToggle ? "Hide" : "Show"}
                </button>
            </div>

            {isToggle && <ul className="ul-container">
                {tasks.map((el) => (

                    <TaskItem el={el} key={el.id} handleDelete={handleDelete} />

                ))}
            </ul>}
        </div>
    );
}

export default TaskList;
