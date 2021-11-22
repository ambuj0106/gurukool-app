import { Banner } from './Components/Banner';
import { Navbar } from './Components/Navbar';
import './assets/css/bootstrap.min.css';
import './assets/css/flex-slider.css';
import './assets/css/font-awesome.css';
import './assets/css/owl-carousel.css';
import './App.css';
import { Features } from './Components/Features';
import { BrowserRouter as Router, BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import LogIn from './Components/LogIn';
import Signup from './Components/Signup';
import ChatRoom from './Components/ChatRoom';
import Timeline from './Components/Timeline/Timeline';
import AssignAssignment from './Components/AssignAssignment';


function App() {

  return (
    <div >
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<><Navbar /> <Banner /><Features /></>} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/rooms" element={<ChatRoom />} />
            <Route path="/rooms/:roomId" element={<ChatRoom />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/assignAssignment" element={<AssignAssignment />} />

          </Routes>

        </AuthProvider>

      </BrowserRouter>

    </div >
  );
}

export default App;
