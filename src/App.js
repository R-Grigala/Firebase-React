import './App.css';
import { useState,  } from 'react';
import { app, database } from './firebaseConfig';
import { 
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword 
} from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

function App() {

  const [data, setData] = useState({
    name : '',
    email: '',
    password: ''
  })

  const auth = getAuth();

  const handleInputs = (event) => {
    let inputs = {[event.target.name] : event.target.value}

    setData({...data, ...inputs})
  }

  const handleSubmit = () => {

  }

  return (
    <div className="App-header">
      <input 
        placeholder="Name" 
        name="name" 
        type="text"
        className="input-fields"
        onChange={event => handleInputs(event)}
      />
      <input 
        placeholder="Email" 
        name="email" 
        type="email"
        className="input-fields"
        onChange={event => handleInputs(event)}
        />
      <input 
        placeholder="Password" 
        name="password" 
        type="password"
        className="input-fields"
        onChange={event => handleInputs(event)}
        />

      <button onClick={handleSubmit}>Add data</button>
    </div>
  );
}

export default App;
