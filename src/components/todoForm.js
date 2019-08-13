import React, {useState} from 'react'



const ToDoForm = ({dispatch}) => {
    
    const [newItem, setNewItem] = useState();
  
   const submitTask = event => {
        event.preventDefault()
       
    }

   const  handleChange = event => {
    
           setNewItem(event.target.value)
    
     }

 
        return(<>
        <form onSubmit={submitTask}>
            <input
            type='text'
            value={newItem}
            name='item'
            onChange={handleChange}
            />
            <button onClick={() => dispatch({type: 'ADD-TODO', payload: newItem})}>Add</button>
        </form>
            <button onClick={() => dispatch({type: 'UPDATE-LIST'})}>Clear Completed</button>
            </>
        )
    
}

export default ToDoForm