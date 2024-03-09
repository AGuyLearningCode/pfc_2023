import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import logo from '../assets/imagenes/logo-web.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import styles from './mainlayout.module.css'
import { Col, Row } from 'react-bootstrap';


const MainLayout = () => {
  // VARIABLES DE ESTADO
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState("");
  const [tipo, setTipo] = useState("peliculas");
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
        <Navbar expand="lg" className='w-100'>
            <Navbar.Brand href="/">
              <img
                src={logo}
                className='logo-header'
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className={ styles.menuExpandido }>
              <Form>
                <Row>
                  <Col xs={12} lg={6} >
                <InputGroup>
                  <Form.Control
                    placeholder="Buscar..."
                    aria-label="Buscar"
                    aria-describedby="basic-addon1"
                    value={busqueda} onChange={cambioBusqueda} onKeyDown={busqueda.length>0 ? eventoIntroBusqueda : undefined}
                  />
                  <InputGroup.Text id="basic-addon1" onClick={busqueda.length>0 ? clickBotonSearch : undefined} className='cursor-pointer'>🔍</InputGroup.Text>
                </InputGroup>
                </Col>
                <Col xs={12} lg={6}>
                <InputGroup>
                  <Row>
                  <Col xs={6} lg={12} >
                  <Form.Check type="radio" label="Peliculas" value="peliculas" checked={tipo === "peliculas"} onChange={eventoCambiarTipo} />
                  </Col>
                  <Col xs={6} lg={12} >
                  <Form.Check type='radio' label="Series" value="serie" checked={tipo === "serie"} onChange={eventoCambiarTipo} />
                  </Col>
                  </Row>
                </InputGroup>
                </Col>
                </Row>
              </Form>
              <Nav className={styles.whiteLink}>
                <Nav.Link href="/Cartelera">Cartelera</Nav.Link>
                <Nav.Link href="/Proximamente">Proximamente</Nav.Link>
                <Nav.Link href="/Listas">Listas</Nav.Link>

              </Nav>
            </Navbar.Collapse>

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