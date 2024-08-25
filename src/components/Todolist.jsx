import React from 'react'
import TodoCard from './TodoCard'

function Todolist(props) {
const {todos} = props

    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) =>{
                return(
                    <TodoCard {...props} key={todoIndex}
                    index={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                    
                )
            })}
        </ul>
    )
}

export default Todolist
