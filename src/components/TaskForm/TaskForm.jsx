import { useState } from "react";
import './TaskForm.scss';

function TaskForm({ addTask }) {

    const [input, setInput] = useState("");

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(input)
        setInput("");
    }

    return (
        <div className="TaskForm">
            <form action="" onSubmit={handleSubmit}>

                <input type="text" name="task" id="task" placeholder="Enter a Task" value={input} onChange={handleInput} autoComplete="off" />

                <div className="">
                    <button>Add Task</button>
                </div>

            </form>
        </div>
    );
}

export default TaskForm;
