import './App.css';
import {Route, Routes } from 'react-router-dom';
import { CounterPage, ToDoPage, RadioGroupPage } from './app/pages';
import { CustomRouter } from './app/router/history-router';
import history from './history';
import { Header } from './app/components/header';
import { RoutePath } from './app/routes/route-paths';

export const App = () =>  {
  return (
    <CustomRouter history={history}>
      <Header />
    <Routes>
      <Route path={'*'} element={<ToDoPage />} />
      <Route path={RoutePath.Counter} element={<CounterPage />} />
      <Route path={RoutePath.Radio} element={<RadioGroupPage />} />
    </Routes>
    </CustomRouter>
  );
}
