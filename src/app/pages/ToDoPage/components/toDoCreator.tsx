import { useState } from 'react'
import { Input } from '../../../components/shared/input'
import { Button } from '../../../components/shared/button'
import { Text9 } from '../../../components/shared/typography'

export const ToDoCreator = () => {
    return (
        <div className='to-do-item'>
            <div className='to-do-creator-inputs'>
                <Input placeholder="Заголовок" />
                <Input placeholder="Текст задания" />
            </div>
            <div className='to-do-creator-button'>
                <Button title='create' onClick={() => {}}><Text9>Создать</Text9> </Button>
            </div>
        </div>
    )
}