import { useState } from 'react'
import { Input } from '../../../components/shared/input'
import { Button } from '../../../components/shared/button'
import { Text9 } from '../../../components/shared/typography'
import { ToDoItemProps } from './toDoItem'

export interface ToDoCreatorProps {
    toDoItemsList: ToDoItemProps[];
    setList:  React.Dispatch<React.SetStateAction<ToDoItemProps[]>>
}

export const ToDoCreator = ({toDoItemsList, setList} : ToDoCreatorProps) => {

    const [title, setTitle] = useState<string | undefined>()
    const [text, setText] = useState<string | undefined>()

    const onCreateClick = ({ title, text}: ToDoItemProps) => {
        setList([...toDoItemsList, {title, text}])
    }

    return (
        <div className='to-do-item'>
            <div className='to-do-creator-inputs'>
                <Input placeholder="Заголовок" onChange={e => setTitle(e.target.value)}/>
                <Input placeholder="Текст задания" onChange={e => setText(e.target.value)}/>
            </div>
            <div className='to-do-creator-button'>
                <Button title='create' onClick={() => onCreateClick({title, text})}><Text9>Создать</Text9> </Button>
            </div>
        </div>
    )
}