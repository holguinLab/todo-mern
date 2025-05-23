import './app.css'

/* Importacion de Componentes de React */
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import { Store } from './components/Store';
import { AdminPanelHome } from './components/admin/AdminPanelHome';
import { Navbar } from './components/Navbar';


/* Libreria para el manejo de las ruta y redirecciones con react */
import { BrowserRouter, Routes, Route } from "react-router-dom";


export function App() {
    return(
            <BrowserRouter>
                <div className="flex flex-col min-h-screen">
                    <Navbar /> {/* Siempre arriba */}

                    {/* Contenido principal */}
                    <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={<Home/>} />
                            <Route path="/register" element={<RegisterForm />} />
                            <Route path="/login" element={<LoginForm />} />
                            <Route path="/store" element={<Store />} />
                            <Route path="/admin" element={<AdminPanelHome />} />
                        </Routes>
                    </main>

                    <Footer /> {/* Siempre abajo */}
                </div>
        </BrowserRouter>
    )
}


