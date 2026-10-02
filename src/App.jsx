import {BrowserRouter, Route, Routes} from 'react-router-dom';

import About from './pages/About';
import Navbar from './components/Navbar/Navbar';
import Departments from './pages/Departments';
import Events from './pages/Events';
import Help from './pages/Help';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Registrations from './pages/Registrations';
import Footer from './components/Footer/Footer';

const App = () =>{
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/departments" element={<Departments/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/help" element={<Help/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/registrations" element={<Registrations/>} />
      </Routes>
      <Footer />
    </BrowserRouter>  )
}

export default App;