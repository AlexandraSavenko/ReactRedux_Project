import { useDispatch, useSelector } from "react-redux"
import TaskItem from "../TaskItem/TaskItem"
import { addTasks } from "../../redux/taskOps"

export default function TaskList (){
    const taskArr = useSelector(state => state.tasks.items)
const dispatch = useDispatch()
    const handleSubmit = (e) => {
e.preventDefault()
const form = e.target
const task = form.elements.taskText.value
dispatch(addTasks(task))
form.reset()
    }
    return <div>
        <form onSubmit={handleSubmit}>
            <label>Write a task:
                <input type="text" name="taskText" />
            </label>
        </form>
    <ul>
             {taskArr.map(el => <li key={el.id}><TaskItem taskInfo={el}/></li>)}

    </ul>
    </div>
}