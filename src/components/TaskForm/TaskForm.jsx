import './TaskForm.scss';
import { useForm } from "react-hook-form"

function TaskForm({ addTask }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        addTask(data);
        reset();
    }


    return (
        <div className="TaskForm">
            <form action="" onSubmit={handleSubmit(onSubmit)}>

                <input type="text" name="task" id="task" placeholder="Enter Task" autoComplete="off" {...register("task", { required: true, minLength: 3 },)} className={`${errors.task ? "error" : null}`} />
                <select name="status" id="" {...register("status")}>
                    <option value={false}>Pending</option>
                    <option value={true}>Completed</option>
                </select>
                <div className="">
                    <button>Add Task</button>
                </div>

            </form>
        </div>
    );
}

export default TaskForm;
