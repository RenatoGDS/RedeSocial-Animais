import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footeer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login/Login';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
        <Footeer />
      </BrowserRouter>
    </div>
  );
}

export default App;
