import './App.css';
import {Routes, BrowserRouter, Route} from "react-router-dom";
import Search from './pages/Search';
import Info from './pages/Info';

function App() {
  // JSX
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/Buscador' element={<Search/>} />
          <Route path='/Info' element={<Info/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
