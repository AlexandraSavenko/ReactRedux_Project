import css from './TaskItem.module.css'
export default function TaskItem ({taskInfo: {text, completed}}){
    return <div className={css.taskItem}>
        <div>{completed ? "👌" : "💣"}</div>
        <p>{text}</p>
    </div>
}