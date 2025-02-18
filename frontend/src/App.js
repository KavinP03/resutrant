import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footers from './components/Footers';
import About from './pages/About';
import Menu from './pages/Menu';

import Layersspl from './pages/Layersspl';
import Bookhere from './pages/Bookhere';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/layersspl' element={<Layersspl/>}/>
        <Route path='/bookhere' element={<Bookhere/>}/>
      </Routes>
      <Footers/>
      </BrowserRouter>
    </div>
  );
}

export default App;
