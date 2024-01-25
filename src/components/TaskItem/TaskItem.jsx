import './TaskItem.scss';

function TaskItem({ el, handleDelete }) {
    return (
        <>
            <li className={el.completed ? "completed" : "notCompleted"}>
                <span>{el.title}</span>
                <span>
                    <button onClick={() => handleDelete(el.id)}>Del</button>
                </span>
            </li>
        </>
    );
}

export default TaskItem;
