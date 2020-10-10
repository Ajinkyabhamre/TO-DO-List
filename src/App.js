import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
 const [todos,setTodos] = useState([]); //short term memory for app (state)
 const [input,setInput] = useState('');
 
 //when apps load, we need to listen to database
useEffect(() => {
// this code fires up when the app.js loads
db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
  
  setTodos(snapshot.docs.map(doc => ({id: doc.id, todo:doc.data().todo})))
})  
}, [])


const addTodo = (event) =>{
  event.preventDefault(); // will stop refresh when we submit
  
  db.collection('todos').add({
    todo: input,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  setTodos([...todos,input]); //appending input to existing array
  setInput(''); //set input to blank again after submiting
}

  return (
    <div className="App">
     <h1>Hello World!🚀</h1>
     <form>
     
     <FormControl>
      <InputLabel >✅Add Todo</InputLabel>
      <Input value={input} onChange={event => setInput(event.target.value)} />
     </FormControl>
     
     <Button disabled={!input}
      type="submit"
      onClick={addTodo}
       variant="contained"
        color="primary">
     Add Todo  
    </Button>
     {/*<button type="submit" onClick={addTodo}>Add Todo</button>*/}
     </form>
    
     <ul>
       {todos.map(todo =>(
         <Todo todo= {todo}/>
       ))}
       
     </ul>
    </div>
  );
}

export default App;
