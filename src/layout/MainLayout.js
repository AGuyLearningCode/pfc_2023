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

/**
 * Este componente determina el diseño de la barra superior de la web.
 * Gran parte del diseño es de la barra de la cabecera donde hay la búsqueda y el menúm
 * sin embargo, donde está el outlet se meterá la parte que falta de la página.
 * El layout es común para todas las páginas, y de echo, es lo primero que se carga en ellas.
 */
const MainLayout = () => {
  // VARIABLES DE ESTADO
  const navigate = useNavigate();
  const [research, setResearch] = useState("");
  const [type, seType] = useState("peliculas");
  // FUNCIONES
  const searchChange = evt => {
    const element = evt.currentTarget;
    const newValue = element.value;
    setResearch(newValue);
  }
  const enterSearchEvent = (evt) => {
    if (evt.keyCode == 13) {
      evt.preventDefault();
      clickSearchButton()
    }
  }

  const clickSearchButton = () => {
    navigate(`/Buscador/${type}/${research}`)
  }

  const changeTypeEvent = (evt) => {
    seType(evt.target.value);
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
            <Navbar.Collapse id="basic-navbar-nav" className={ styles.expandedMenu }>
              <Form>
                <Row>
                  <Col xs={12} lg={6} >
                <InputGroup>
                  <Form.Control
                    placeholder="Buscar..."
                    aria-label="Buscar"
                    aria-describedby="basic-addon1"
                    value={research} onChange={searchChange} onKeyDown={research.length>0 ? enterSearchEvent : undefined}
                  />
                  <InputGroup.Text id="basic-addon1" onClick={research.length>0 ? clickSearchButton : undefined} className='cursor-pointer'>🔍</InputGroup.Text>
                </InputGroup>
                </Col>
                <Col xs={12} lg={6}>
                <InputGroup>
                  <Row>
                  <Col xs={6} lg={12} >
                  <Form.Check type="radio" label="Películas" value="peliculas" checked={type === "peliculas"} onChange={changeTypeEvent} />
                  </Col>
                  <Col xs={6} lg={12} >
                  <Form.Check type='radio' label="Series" value="serie" checked={type === "serie"} onChange={changeTypeEvent} />
                  </Col>
                  </Row>
                </InputGroup>
                </Col>
                </Row>
              </Form>
              <Nav className={styles.whiteLink}>
                <Nav.Link href="/Cartelera">Cartelera</Nav.Link>
                <Nav.Link href="/Proximamente">Próximamente</Nav.Link>
                <Nav.Link href="/Favoritos">Favoritos</Nav.Link>

              </Nav>
            </Navbar.Collapse>

        </Navbar>
      </header>
      <hr />
      <main>
        {/* Aquí viene el contenido principal de la página. */ }
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout