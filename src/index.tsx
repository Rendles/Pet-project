import ReactDOM from 'react-dom/client';
import './index.scss';
import { App } from './App';
import '../src/app/styles/global-styles.scss'
import '../src/app/styles/colors.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />,
);
