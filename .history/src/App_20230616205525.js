import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";

function App() {
  return (
    // <Provider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/categories/:idc" element={<Details />} />
          <Route path="/categories/:idc/products/:idp" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/congratulation" element={<Congratulation />} />
          <Route path="/*" element={<NotFound />} /> */}
        </Routes>
      // </Provider>
  );
}

export default App;
