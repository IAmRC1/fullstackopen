import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import 'sanitize.css'
import './index.css'


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

const App = () => {
  const [selected, setSelected] = useState(0)
  const [count, setCount] = useState([0,0,0,0,0,0])
  const copy = [...count]
  const votesArr = [...count]
  let votesMax = Math.max(...votesArr);
  let indexOfMax = votesArr.indexOf(votesMax)
  
  const randomQuote = () => {
    let random = Math.floor(Math.random()*anecdotes.length);
    setSelected(random)
  }
  
  const vote = () => {
    copy[selected]+=1
    setCount(copy)
  }

  const mostVotes = () => {
    return anecdotes[indexOfMax]
  }

  return (
    <div className="container">
      <h1>Anecdote of the day</h1>
      <Button handleClick={randomQuote} text="next anecdote"/>
      <Button handleClick={vote} text="vote"/>
      <div>
        {anecdotes[selected]}
      </div>
      <div className="text-blue-400">has {count[selected]} votes</div>
      <h1>Anecdote with most votes</h1>
      <div>{mostVotes()}</div>
      <div className="text-blue-400">has {votesArr[indexOfMax]} votes</div>
    </div>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)