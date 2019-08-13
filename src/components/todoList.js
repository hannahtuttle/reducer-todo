import React, {useReducer} from 'react'

import ToDo from './todo.js'


const TodoList = ({state}) => {

   
    
    return(<div>
            <h2>Here is my personal List</h2>
            {state.map(item => 
              <ToDo key={item.id} item={item}
               />  
            )}
        </div>)
    
}

export default TodoList;