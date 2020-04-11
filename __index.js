import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import 'sanitize.css'
import './index.css'

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

const Statistics = (props) => {
  if((props.good || props.neutral || props.bad) > 0){
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <Statistic text="good" value={props.good} />
            <Statistic text="neutral" value={props.neutral} />
            <Statistic text="bad" value={props.bad} />
            <Statistic text="all" value={props.total} />
            <Statistic text="average" value={props.avg} />
            <Statistic text="positive" value={(props.good/props.total)*100} percent={'%'} />
          </tbody>
        </table>
        
      </div>
    )
  }
  return <div className="mt-3">No feedback given</div>
}

const Statistic = (props) => {
return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}{props.percent}</td>
      </tr>  
    )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let total = good+neutral+bad;
  let avg = (((good*1)+(bad*(-1)))/total);
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good+1)} text="good" />
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral" />
      <Button handleClick={() => setBad(bad+1)} text="bad" />
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        total={total} 
        avg={avg} 
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))