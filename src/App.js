import "./App.css";
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import Search from "./pages/Search";
import Info from "./pages/Info";
import MainLayout from "./layout/MainLayout";
function App() {
  // JSX
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Navigate to="Buscador" />} />
            <Route path='Buscador' element={<Search />} />
            <Route path='Info/:idPelicula' element={<Info />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
