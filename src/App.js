import './App.css';
import {Route, Routes} from 'react-router-dom';
import {useState} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Exchanges from './components/Exchanges';
import News from './components/News';
import Crypto from './components/Crypto'

function App() {

  const [loading, setLoading] = useState(false);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route exact path="/" element={<Home setLoading={setLoading}/>} />
        <Route exact path="/exchanges" element={<Exchanges setLoading={setLoading} loading={loading}/>} />
        <Route exact path="/news" element={<News setLoading={setLoading} loading={loading}/>} />
        <Route exact path="/crypto" element={<Crypto setLoading={setLoading} loading={loading}/>} />
      </Routes>
    </div>
  );
}

export default App;
