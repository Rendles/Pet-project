import { ToDoItem } from './toDoItem'

export interface ToDoItemsListProps {

}


export const ToDoItemsList = ({toDoList}: any) => {
    


    return (
        <div className='to-do-items-list'>
            {toDoList.map((todo : any) => {
                return (
                    <ToDoItem title={todo.title} id={todo.id} text={todo.text}/>
                )
            })

            }
        </div>
    )
}