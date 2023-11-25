import React, { useState } from 'react'
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom'
import logo from '../assets/imagenes/logo-web.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


const MainLayout = () => {
  // VARIABLES DE ESTADO
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState("");
  const [tipo,setTipo]=useState("pelicula");
  // FUNCIONES
  const cambioBusqueda = evt => {
    const elemento = evt.currentTarget;
    const nuevoValor = elemento.value;
    setBusqueda(nuevoValor);
  }
  const eventoIntroBusqueda = (evt) => {
    if(evt.keyCode == 13) {
      clickBotonSearch()
    }
  }

  const clickBotonSearch= () =>{
      navigate(`/Buscador/${tipo}/${busqueda}`)
  }

  const eventoCambiarTipo = (evt) => {
    setTipo(evt.target.value);
  }

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

        <input value={busqueda} onChange={cambioBusqueda} onKeyDown={eventoIntroBusqueda} />
        <Button onClick={clickBotonSearch}>Buscar</Button>
        <br />
        <input type="radio" name="tipo" value="pelicula" checked={tipo === "pelicula"} onChange={eventoCambiarTipo}></input> <label>Pelicula </label>  &nbsp;
        <input type="radio" name="tipo" value="serie" checked={tipo === "serie"} onChange={eventoCambiarTipo}></input> <label>Serie</label>


        <nav>
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