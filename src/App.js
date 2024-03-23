import "./App.css";
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import Search from "./pages/Search";
import Info from "./pages/Info";
import MainLayout from "./layout/MainLayout";
import Billboard from "./pages/Billboard";
import Proximamente from "./pages/Proximamente";
import Favourites from "./pages/Favourites";

/**
 * Punto de entrada de la aplicación. Todas las páginas pasan por aquí.
 */
function App() {
  // Queda pendiente poner la página de error.
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Navigate to="Cartelera" />} />
            <Route path='Buscador/:tipo/:consulta' element={<Search />} />
            <Route path='Info/:type/:movieID' element={<Info />} />
            <Route path='Cartelera' element={<Billboard />} />
            <Route path='Proximamente' element={<Proximamente />} />
            <Route path='Listas' element={<Favourites/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
