import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import logo from '../assets/imagenes/logo-web.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const MainLayout = () => {
  // VARIABLES DE ESTADO
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState("");
  const [tipo, setTipo] = useState("pelicula");
  // FUNCIONES
  const cambioBusqueda = evt => {
    const elemento = evt.currentTarget;
    const nuevoValor = elemento.value;
    setBusqueda(nuevoValor);
  }
  const eventoIntroBusqueda = (evt) => {
    if (evt.keyCode == 13) {
      evt.preventDefault();
      clickBotonSearch()
    }
  }

  const clickBotonSearch = () => {
    navigate(`/Buscador/${tipo}/${busqueda}`)
  }

  const eventoCambiarTipo = (evt) => {
    setTipo(evt.target.value);
  }

  return (
    <div>
      <header className="header">

        
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="/">
          <img
            src={logo}
            className='logo-header'
          />
        </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/Cartelera">Cartelera</Nav.Link>
                <Nav.Link href="/Proximamente">Proximamente</Nav.Link>
                <Nav.Link href="/Listas">Listas</Nav.Link>
                <Form inline>
        <InputGroup>
          
          <Form.Control
            placeholder="Buscar..."
            aria-label="Buscar"
            aria-describedby="basic-addon1"
            value={busqueda} onChange={cambioBusqueda} onKeyDown={eventoIntroBusqueda}
          />
          <InputGroup.Text id="basic-addon1" onClick={clickBotonSearch} className='cursor-pointer'>🔍</InputGroup.Text>
        </InputGroup>
        <InputGroup>
          <Form.Check type="radio" label="Peliculas" value="pelicula" checked={tipo === "pelicula"} onChange={eventoCambiarTipo} />
          <Form.Check type='radio' label="Series" value="serie" checked={tipo === "serie"} onChange={eventoCambiarTipo}/>
        </InputGroup>
      </Form>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
      </header>
      <hr />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout