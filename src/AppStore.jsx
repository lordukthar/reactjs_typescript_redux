import { createStore } from 'redux';
import { combineReducers } from "redux";


const INCREMENT_AGE = "INCREMENT_AGE";


const defaultUser = {
    name: "unknown",
    age: 35,
  }

  export function incrementAge(user) {
  console.log(JSON.stringify(user));
  return {
    type: INCREMENT_AGE,
    user,
  };
}

function userReducer(state = defaultUser, action) {

   console.log(action);

  switch (action.type) {
   

    
    case INCREMENT_AGE:
      
      var a = Number(action.user.age);
  console.log(a);
      return {
        name: action.user.name,
        age: action.user.age+1,
      };
    default:
      return state;
  }
}

const counterApp = combineReducers({
  user: userReducer
});

export default counterApp;
