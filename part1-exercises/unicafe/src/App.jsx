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
      <Button text='good' handleClick={handleClick} id='good' />
      <Button text='neutral' handleClick={handleClick} id='neutral' />
      <Button text='bad' handleClick={handleClick} id='bad' />
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  )
}

const Button = (props) => {
  return <button onClick={props.handleClick} id={props.id}>{props.text}</button>
}

export default App