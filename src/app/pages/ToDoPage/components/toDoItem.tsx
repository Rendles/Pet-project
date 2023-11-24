import useState from 'react'

import { Text7, Text10, Text9 } from '../../../components/shared/typography';
import { Button } from '../../../components/shared/button';

import './style.scss'

interface ToDoItemProps {
    id: string;
    title: string;
    text: string;
}

export const ToDoItem = ({id, title, text} : ToDoItemProps) => {

    return (
        <div className='to-do-item'>
            <div className='to-do-item-header'>
                <div className='to-do-item-title-edit'>
                    <Text7>{title}</Text7>
                    <Button title='edit' onClick={() => {}} styleType='transparent'><Text9>Изменить</Text9></Button>
                </div>
                <Button title='delete' onClick={() => {}} styleType='transparent' color='red'><Text9>Удалить</Text9></Button>
            </div>
            <div className='to-do-separator'/>
            <div className='to-do-text'>
                <Text10>{text}</Text10>
            </div>
        </div>
    )
}