import './App.css';
import {Route, Routes } from 'react-router-dom';
import { CounterPage, ToDoPage } from './app/pages';
import { CustomRouter } from './app/router/history-router';
import history from './history';

export const App = () =>  {
  return (
    <CustomRouter history={history}>
    <Routes>
      <Route path={'*'} element={<ToDoPage />} />
    </Routes>
    </CustomRouter>
  );
}
