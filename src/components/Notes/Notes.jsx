import { useDispatch, useSelector } from "react-redux"
import { userNotes } from "../../redux/notesReducer"

import SingleNote from "../singleNote/singleNote"

export default function Notes () {
    const notes = useSelector(state => state.notes.value)
const dispatch = useDispatch()

    const handleSubmit =(e) => {
        e.preventDefault()
        const form = e.target
   dispatch(userNotes({id: crypto.randomUUID(),
    item: form.elements.noteText.value}))
   form.reset()
    }

    
    return <div>
        <form onSubmit={handleSubmit}>
            <label >Write you notes: 
        <input type="text" name="noteText" />
        </label>
        </form>
<ul>
{    notes.map((el) => <li key={el.id}>
    <SingleNote noteText={el}/>
    </li>)
}</ul>
    </div>
}