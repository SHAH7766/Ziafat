
import './App.css';
import { BrowserRouter ,Route, Routes } from 'react-router-dom'
import { Navbar } from './Components/Navbar';
import Buffet from './Screens/Buffet';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Buffet/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
