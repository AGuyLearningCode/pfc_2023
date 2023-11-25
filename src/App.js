import "./App.css";
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import Search from "./pages/Search";
import Info from "./pages/Info";
import MainLayout from "./layout/MainLayout";
import Cartelera from "./pages/Cartelera";
import Proximamente from "./pages/Proximamente";
function App() {
  // JSX
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Navigate to="Buscador" />} />
            <Route path='Buscador/:tipo/:consulta' element={<Search />} />
            <Route path='Info/:tipo/:idPelicula' element={<Info />} />
            <Route path='Cartelera' element={<Cartelera />} />
            <Route path='Proximamente' element={<Proximamente />} />
            <Route path='Listas' element={""} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
