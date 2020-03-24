import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const team = [{
    name: 'Gary Johnson', 
    email: 'hammerjohnson@yahoo.com',
    role: 'The Boss'
  },
  {
    name: 'Tina Fey',
    email: 'oldwoman@gmail.com',
    role: 'Not the Boss'
  }]
  const [teamMembers, setTeamMembers] = useState()
  return (
    <div className="App">
      <header className="App-header">
        {team.map((item, i) => {
          return(
          <p>{item.name} {item.email} {item.role}</p>
          )
        })}
      </header>
    </div>
  );
}

export default App;
