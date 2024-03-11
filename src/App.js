import './App.css';
import {Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Exchanges from './components/Exchanges';
import News from './components/News';

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/exchanges" element={<Exchanges />} />
        <Route exact path="/news" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
