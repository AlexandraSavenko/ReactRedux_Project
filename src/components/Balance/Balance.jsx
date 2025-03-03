import { useDispatch, useSelector } from "react-redux"
import { deposit, withdraw } from "../../redux/store"



export default function Balance () {
    const balance = useSelector(state => state.balance.value)
    const dispatch = useDispatch()

const handleDiposit = () => {
dispatch(deposit(100))
}

const handleWithdraw = () => {
    dispatch(withdraw(100))
}

    return <div>
        <p>This is your balance {balance}</p>
        <button onClick={handleDiposit}>+</button>
        <button onClick={handleWithdraw}>-</button>

    </div>
}