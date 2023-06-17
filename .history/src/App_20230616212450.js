import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Rupiah from "./pages/Rupiah";

function App() {
  return (
    // <Provider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/rupiah" element={<Rupiah />} />

          {/* <Route exact path="/categories/:idc" element={<Details />} />
          <Route path="/categories/:idc/products/:idp" element={<Details />} />
          <Route path="/rupiah" element={<Cart />} />
          <Route path="/crypto" element={<Cart />} />
          <Route path="/congratulation" element={<Congratulation />} />
          <Route path="/*" element={<NotFound />} /> */}
        </Routes>
      // </Provider>
  );
}

export default App;
