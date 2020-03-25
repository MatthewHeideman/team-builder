import React, {useState} from 'react';
import './App.css';
import Form from './Form';

function App() {
  const team = [
  {
    name: 'Hunter Stevens',
    email: 'hunterstevens@yahoo.com',
    role: 'Full Stack Web Dev'
  },
  {
    name: 'Gary Johnson', 
    email: 'hammerjohnson@yahoo.com',
    role: 'The Boss'
  },
  {
    name: 'Tina Fey',
    email: 'oldwoman@gmail.com',
    role: 'Secretary'
  },
  {
    name: 'Michael Håkansson',
    email: 'sweedboy@gmail.com',
    role: 'Intern'
  },
  {
    name: 'Doug McDougal',
    email: 'dougdandaledonmcdougal3rd@yahoo.com',
    role: 'Operations Manager'
  }]
  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    position: ''
})
const [teamMembers, setTeamMembers] = useState(team)
  const submitForm = (event) => {
    event.preventDefault();
    const createNewMember = { 
      name: inputValue.name,
      email: inputValue.email,
      role: inputValue.position
    }
    setTeamMembers([ ...teamMembers,
      createNewMember
    ])
  }
  const realTimeInput = (event) => {
    setInputValue({ ...inputValue,
        [event.target.name]: event.target.value
    })
    console.log(event.target.value)
}
  
  return (
    <div className="App">
      <header className="App-header">
        <Form change = {realTimeInput}inputValue = {inputValue} teamList = {submitForm}/><br/>
        {teamMembers.map((item, i) => {
          return(
          <p key = {i}>{item.name} {item.email} {item.role}</p>
          )
        })}
      </header>
    </div>
  );
}

export default App;
