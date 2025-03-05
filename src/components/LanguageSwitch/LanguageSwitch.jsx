import { useDispatch, useSelector } from "react-redux"
import { language } from "../../redux/langReducer"

export default function LanguageSwitch () {
    const selLang = useSelector(state => state.lang.value)
const dispatch = useDispatch()
    const handleLangSwitch = (e) => {
        dispatch(language(e.target.value))
    }
    return <div>
        <select name="lang" value={selLang} onChange={handleLangSwitch}>
            <option value="eng">English</option>
            <option value="ukr">Ukrainian</option>

            <option value="fr">French</option>

        </select>
        <p>Selected language is <span>{selLang}</span></p>
    </div>
}