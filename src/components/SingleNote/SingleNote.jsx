import { useDispatch } from "react-redux"
import { deleteNote } from "../../redux/notesReducer"
import css from './SingleNote.module.css'

export default function SingleNote ({noteText}) {
const dispatch = useDispatch()
    const handleDelete = () => {
// console.log(noteText.id)
dispatch(deleteNote(noteText.id))
    }
    return <div className={css.noteItem}>
        <p>{noteText.item}</p>
        <button onClick={handleDelete}>X</button>
    </div>
}