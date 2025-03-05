import { useDispatch } from "react-redux"
import { deleteNote } from "../../redux/notesReducer"

export default function SingleNote ({noteText}) {
const dispatch = useDispatch()
    const handleDelete = () => {
// console.log(noteText.id)
dispatch(deleteNote(noteText.id))
    }
    return <div>
        <p>{noteText.item}</p>
        <button onClick={handleDelete}>X</button>
    </div>
}