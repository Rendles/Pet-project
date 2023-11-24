import { useState } from 'react';
import { ToDoItemsList } from './components/toDoItemsList';
import { ToDoCreator } from './components/toDoCreator';
import data from './tasks.json'

import './style.scss'

export function ToDoPage() {
  const [toDoList, setToDoList] = useState(data)
  return (
    <div className={'to-do-page'}>
      <ToDoCreator />
      <ToDoItemsList toDoList={toDoList}/>
    </div>
  );
}