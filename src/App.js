import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Card from './Component/Card';
import About from './Component/About';
import Error from './Component/Error';

function App() {

  return (
   <div>

    <nav>

      <p>
         <NavLink to="/" style={{textDecoration: 'none'}} ><p className='home'>Home</p></NavLink>
      </p>

      <p>
         <NavLink to="/about" style={{textDecoration: 'none'}} ><p className='about'>About</p></NavLink>
      </p>

    </nav>

    <Routes>
      <Route path='/' element={<div><Card></Card></div>}></Route>
      <Route path='/about' element={<div><About></About></div>}></Route>
      <Route path='*' element={<div><Error></Error></div>}></Route>
    </Routes>

   </div>

  );
}

export default App;
