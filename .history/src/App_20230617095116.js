import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Rupiah from "./pages/Rupiah";
import Crypto from "./pages/Crypto";
import Provider from "./helpers/hooks/useGlobalContext";
import Soal2 from "./parts/Soal2/Soal2";

function App() {
  return (
    <Provider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/rupiah" element={<Rupiah />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/soal2" element={<Soal2 />} />
        </Routes>
      </Provider>
  );
}

export default App;
