import { useState } from "react";
import Buscador from "./components/Buscador";
import Crear from "./components/Crear";
import Listado from "./components/Listado";

function App() {
    const [listadoState, setListadoState] = useState([]);
    return (
        <div className="layout">
            {/*CABECERA DE LA WEB*/}
            <header className="header">
                <div className="logo">
                    <div className="play"></div>
                </div>
                <h1>Web de Películas</h1>
            </header>
            {/*BARRA DE NAVEGACIÓN*/}
            <nav className="nav">
                <ul>
                    <li><a href="/#">Inicio</a></li>
                    <li><a href="/#">Películas</a></li>
                    <li><a href="/#">Blog</a></li>
                    <li><a href="/#">Contacto</a></li>
                </ul>
            </nav>

            {/*CONTENIDO PRINCIPAÑ*/}
            <section className="content">
                {/*Aquí va el listado de películas*/}
                <Listado listadoState={listadoState} setListadoState={setListadoState}/>
            </section>
            {/*BARRA LATERAL*/}
            <aside className="lateral">
                <Buscador listadoState={listadoState} setListadoState={setListadoState} />
                <Crear setListadoState={setListadoState} />
            </aside>
            {/*PIE DE PÁGINA(FOOTER)*/}
            <footer className="footer">
                &copy; P.F.C. de Martín García&copy; v.:2023. <a href="/#">Web del autor</a>
            </footer>
        </div>
    );
}

export default App;
