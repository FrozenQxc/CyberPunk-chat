import Login from "./pages/Login";
import { Register } from "./pages/Register";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import "./style.scss"

function App() {
  return (
       <BrowserRouter>
        <Routes>
          <Route  element= {<Home />} path='/' />
          <Route  element= {<Register />} path='/Register' />
          <Route  element= {<Login />} path='/Login' />
        </Routes>
       </BrowserRouter>

  );
}

export default App;
