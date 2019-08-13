import React from 'react'

export const initialState =  {
  list:[{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }]}

 export const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD-TODO':
      return {...state, list: [...state.list, {item: action.payload, completed: false, id: Date.now()}]};
    case 'TOGGLE-LIST':
      return {...state, list: state.list.map(item => {
        if(item.id===action.payload){
          return {
            ...item, 
            completed: !item.completed
          }
        }else{
          return item;
        }
      })};
      case 'UPDATE-LIST':
        return {...state, list: state.list.filter(item => !item.completed)};
    default:
      return state;
  }
  }