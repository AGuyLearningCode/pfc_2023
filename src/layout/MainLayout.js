import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
      <header>
        <h1>AVMaster</h1>
        <nav>
          <Link to="/Buscador"> Buscador</Link> |
          <Link to="/Cartelera"> Cartelera</Link> |
          <Link to="/Proximamente"> Proximamente</Link>
        </nav>
      </header>
      <hr />
      <Outlet />
    </div>
  )
}

export default MainLayout
