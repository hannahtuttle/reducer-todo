import React from 'react'

const ToDo = ({item}) => {
   
        return(
        <div className='' 
        // onClick={() => this.props.toggleTask(this.props.item.id)}>
        >
        <p>{item.item}</p>
        </div>
        )

}

export default ToDo