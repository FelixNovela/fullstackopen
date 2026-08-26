import { useState } from "react"



const Button = ({text, onClick}) => {
    return(
        <button onClick={onClick}>
            {text}
        </button>
    )
}
const StatisticLine = (props) =>{
    return(
        <p>
            {props.text} {props.value}
        </p>
    )
}
const Statistics = (props) => {
    if(props.statistics.total === 0){
        return(
            <>
                <h2>statistics</h2>
                <p>No feedback given</p>
            </>
        )
    }
   
    return(
        <>
            <h2>statistics</h2>
            <StatisticLine text="good" value={props.good} />
            <StatisticLine text="neutral" value={props.neutral} />
            <StatisticLine text="bad" value={props.bad} />
            <StatisticLine text="all" value={props.statistics.total} />
            <StatisticLine text="average" value={props.statistics.average} />
            <StatisticLine text="positive" value={props.statistics.positive+"%"} />
            
        </>
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


    const statisticsCalc = () => {
        let total = good + neutral + bad
        let average 
        let positive
        if(total === 0){
            average = 0
            positive = 0
        }else{
            average = (good * 1 + neutral * 0 + bad * (-1)) / total
            positive = (good / total) * 100
        }
        
        return {total: total, average: average, positive: positive}
    }

    const statistics = statisticsCalc()

    return(
        <>
            <h2>give feedback</h2>
            <Button text={"good"} onClick={handlerGood} />
            <Button text={"neutral"} onClick={handlerNeutral} />
            <Button text={"bad"} onClick={handlerBad} />
            <Statistics statistics={statistics} good={good} neutral={neutral} bad={bad}/>
        </>
    )
}

export default App