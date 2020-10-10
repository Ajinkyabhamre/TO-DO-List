import React from 'react'
import { List, ListItem, ListItemAvatar, ListItemText, Button } from '@material-ui/core';
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';
function Todo(props) {
    return (
        <List>
  <ListItem>
  <ListItemAvatar>
  </ListItemAvatar>
    <ListItemText primary={props.todo.todo} secondary="list app 📓" />
  </ListItem>
  <DeleteIcon onClick={event=> db.collection('todos').doc(props.todo.id).delete()}>Delete me!</DeleteIcon>
       </List>
           
    )
}

export default Todo;