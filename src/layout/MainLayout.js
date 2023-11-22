import React from 'react'
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom'
import logo from '../assets/imagenes/logo-web.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainLayout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header className="header">
        
        <Link
          to="/Buscador"
          img={logo}
          onClick={
            e => (
              navigate(
                `/Buscador`
              )
            )
          }
        >
          <img
            src={logo}
            className='logo-header'
          />
        </Link>

        <nav>
          <Link to="/Buscador"> Buscador</Link> |
          <Link to="/Cartelera"> Cartelera</Link> |
          <Link to="/Proximamente"> Proximamente</Link> | 
          <Link to="/Listas"> Listas</Link>
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