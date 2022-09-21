import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/Layout/Footer';
import NavBar from './components/Layout/NavBar';

import Contato from './pages/Contato';
import Empresa from './pages/Empresa'; 
import Home from './pages/Home';


const App = () => {
 
  return (
    <Router>  
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/Empresa' element={<Empresa />} />
        <Route path='/Contato' element={<Contato />} />
      </Routes>  
      <Footer />    
    </Router>    
  )
}

export default App;
