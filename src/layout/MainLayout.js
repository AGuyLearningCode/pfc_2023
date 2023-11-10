import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../assets/imagenes/logo-web.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainLayout = () => {
  return (
    <div>
      <header className="header">
        <img src={logo} className='mt-5' />
        <nav>
          <Link to="/Buscador"> Buscador</Link> |
          <Link to="/Cartelera"> Cartelera</Link> |
          <Link to="/Proximamente"> Proximamente</Link>
        </nav>
      </header>
      <hr />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout

//NOTA:tarea pendiente hacer cartelera