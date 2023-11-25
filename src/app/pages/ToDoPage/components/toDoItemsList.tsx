import { useEffect } from 'react'
import { ToDoItem } from './toDoItem'



export const ToDoItemsList = ({toDoList}: any) => {
    useEffect(
       (() => {console.log(toDoList)}) ,
        [toDoList]
    );
    return (
        <div className='to-do-items-list'>
            {toDoList && toDoList.map((todo : any) => {
                return (
                    <ToDoItem title={todo.title} text={todo.text}/>
                )
            })

            }
        </div>
    )
}