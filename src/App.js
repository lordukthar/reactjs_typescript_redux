import logo from './logo.svg';
import './App.css';
import { FCCounter } from './FCCounter';
import { FCCounterJSX } from './FCCounterJSX';
import { useDispatch, useSelector } from "react-redux";
import {incrementAge } from "./AppStore";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import React, {useState} from 'react';

function App() {

  const user = useSelector((state) => state.user);
   const dispatch = useDispatch();
    const [secondary, setSecondary] = React.useState(false);
 
     const [dense, setDense] = React.useState(false);
 
 


   const handleIncrement = () => {
       alert("jfdskafhkj")
    }

  
  return (
    <div className="App">


       <List dense={dense}>
            
                <ListItem>
                  <FCCounter label="JSX" count="1" onIncrement={handleIncrement} />
                </ListItem>,
                <ListItem>
                  <FCCounterJSX label="Typescript" count="1" onIncrement={handleIncrement} />
                </ListItem>,
                 <ListItem>
                  <button onClick={() => dispatch(incrementAge(user))}>
        <span role="img" aria-label="add">
          Age: {user.age}
        </span>
      </button>
                </ListItem>,
              
            </List>


      
       

       

    </div>
  );
}

export default App;
