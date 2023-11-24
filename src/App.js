import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Home />
      <Routes />
    </div>
  );
}

export default App;
