import { useSelector } from "react-redux"
import TaskItem from "../TaskItem/TaskItem"

export default function TaskList (){
    const taskArr = useSelector(state => state.tasks.items)
    return <ul>
             {taskArr.map(el => <li key={el.id}><TaskItem taskInfo={el}/></li>)}

    </ul>
}