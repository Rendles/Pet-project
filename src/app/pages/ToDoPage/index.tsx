import { useState } from 'react';
import { ToDoItemsList } from './components/toDoItemsList';
import { ToDoCreator } from './components/toDoCreator';
import { ToDoItemProps } from './components/toDoItem';

import './style.scss'


export function ToDoPage() {
  const [toDoList, setToDoList] = useState<ToDoItemProps[]>([])
  return (
    <div className={'to-do-page'}>
      <ToDoCreator toDoItemsList={toDoList} setList={setToDoList}/>
      <ToDoItemsList toDoList={toDoList}/>
    </div>
  );
}