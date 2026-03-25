import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from './pages/landingpage.jsx'
import Login from './pages/login.jsx'
import Register from './pages/register.jsx';
import QrGenerator from './pages/qrGenerator.jsx';
import App from './app.jsx';

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  

  <Routes>
        <Route path="/qr-code" element={<QrGenerator/>}/>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
  </Routes>
  </BrowserRouter>
)
