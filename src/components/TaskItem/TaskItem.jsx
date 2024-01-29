import './TaskItem.scss';

function TaskItem({ el, handleDelete }) {
    return (
        <>
            <li className={el.status ? "completed" : "notCompleted"}>
                <span>{el.title}</span>
                <span>
                    <button onClick={() => handleDelete(el.id)}>✖</button>
                </span>
            </li>
        </>
    );
}

export default TaskItem;
