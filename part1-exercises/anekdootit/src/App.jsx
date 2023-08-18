import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const defaultVotes = new Array(anecdotes.length).fill(0)
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(defaultVotes)
  const [mostVotes, setMostVotes] = useState(0)

  const getNewAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  const voteUp = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
    const mostVotesIndex = newVotes.indexOf(Math.max(...newVotes))
    setMostVotes(mostVotesIndex)
  }
  // if two anecdotes have the same amount of votes, whichever comes first in the anecdotes array is shown
  // therefore sometimes the selected anecdote reaching the same amount of votes as the top voted will change the top anecdote, sometimes it won't

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <VotesInfo value={votes[selected]} />
      <Button handleClick={voteUp} text='Vote' />
      <Button handleClick={getNewAnecdote} text='Next anecdote' />
      <h2>Anecdote with the most votes</h2>
      <p>{anecdotes[mostVotes]}</p>
      <VotesInfo value={votes[mostVotes]} />
    </div>
  )
}

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

const VotesInfo = (props) => {
  const word = props.value === 1 ? 'vote' : 'votes'
  return <p>has {props.value} {word}</p>
}

export default App