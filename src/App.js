import './App.css';
import { useState,  } from 'react';
import { app, database } from './firebaseConfig';
import { 
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword 
} from 'firebase/auth';

import { 
  collection, 
  addDoc 
} from 'firebase/firestore';

function App() {

  const [data, setData] = useState({
    name:'',
    email: '',
    password: ''
  })

  const auth = getAuth();
  const dbInstance = collection(database, 'users')

  const handleInputs = (event) => {
    let inputs = {[event.target.name] : event.target.value}

    setData({...data, ...inputs})
  }

  const handleSubmit = () => {
    // createUserWithEmailAndPassword(auth, data.email, data.password)
    // signInWithEmailAndPassword(auth, data.email, data.password)
    // .then((response) => {
    //   console.log(response.user)
    // })
    // .catch((err) => {
    //   alert(err.message)
    // })


    addDoc(dbInstance, data)
    .then(() => {
      alert('Data Sent')
    })
    .catch((err) => {
      alert(err.message)
    })

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

      {/* <button onClick={handleSubmit}>Sing Up</button> */}
      <button onClick={handleSubmit}>Add Data</button>
    </div>
  );
}

export default App;
