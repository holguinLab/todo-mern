import './app.css'
import RegisterForm from './components/registerForm'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Home from './components/Home';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
    return(
            <BrowserRouter>
                <div className="flex flex-col min-h-screen">
                    <Navbar /> {/* Siempre arriba */}

                    {/* Contenido principal */}
                    <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={<Home/>} />
                            <Route path="/register" element={<RegisterForm />} />
                        </Routes>
                    </main>

                    <Footer /> {/* Siempre abajo */}
                </div>
        </BrowserRouter>
    )
}

export default App


