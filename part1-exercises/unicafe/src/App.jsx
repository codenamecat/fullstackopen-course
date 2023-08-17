import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (event) => {
    if (event.target.id === 'good') {
      setGood(count => count +1)
    } else if (event.target.id === 'neutral') {
      setNeutral(count => count +1)
    } else {
      setBad(count => count +1)
    }
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text='Good' handleClick={handleClick} id='good' />
      <Button text='Neutral' handleClick={handleClick} id='neutral' />
      <Button text='Bad' handleClick={handleClick} id='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Button = (props) => {
  return <button onClick={props.handleClick} id={props.id}>{props.text}</button>
}

const Statistics = ({good, neutral, bad}) => {

  const all = good + neutral + bad
  const average = (good * 1 + neutral * 0 + bad * -1) / all
  const positive = good * 100 / all

  if (all === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h2>Statistics</h2>
      <StatisticLine text='Good' value={good} />
      <StatisticLine text='Neutral' value={neutral} />
      <StatisticLine text='Bad' value={bad} />
      <StatisticLine text='All' value={all} />
      <StatisticLine text='Average' value={average} />
      <StatisticLine text='Positive' value={positive} />
    </div>
  )
}

const StatisticLine = ({text, value}) => {

  if (text === 'Positive') {
    return <p>{text}: {value} %</p>
  } else {
    return <p>{text}: {value}</p>
  }
}

export default App