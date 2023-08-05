import "./App.css"
import { useDispatch, useSelector } from "react-redux"

function App() {
  const dispatch = useDispatch()

  const { amount } = useSelector((state) => state.wallet)

  const add100 = () => {
    dispatch({
      type: "add",
    })
  }
  const addByPL = () => {
    dispatch({
      type: "addByValue",
      payload: 200,
    })
  }
  const minus100 = () => {
    dispatch({
      type: "minus",
    })
  }
  return (
    <>
      <div>
        <h1>Wallet Balance:{amount}</h1>
        <button onClick={add100}>Add 100</button>
        <button onClick={addByPL}>Add 200</button>
        {amount == 0 ? (
          <button disabled onClick={minus100}>
            Minus 100
          </button>
        ) : (
          <button onClick={minus100}>Minus 100</button>
        )}
      </div>
    </>
  )
}

export default App
