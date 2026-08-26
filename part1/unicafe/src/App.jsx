import { useState } from "react"



const Button = ({text, onClick}) => {
    return(
        <button onClick={onClick}>
            {text}
        </button>
    )
}
const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handlerGood = () => {
        setGood(good + 1)
    }
    const handlerNeutral = () => {
        setNeutral(neutral + 1)
    }
    const handlerBad = () => {
        setBad(bad + 1)
    }
    return(
        <>
            <h2>give feedback</h2>
            <Button text={"good"} onClick={handlerGood} />
            <Button text={"neutral"} onClick={handlerNeutral} />
            <Button text={"bad"} onClick={handlerBad} />
            <h2>statistics</h2>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
        </>
    )
}

export default App