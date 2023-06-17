import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Provider>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          {/* <Route exact path="/categories/:idc" element={<Details />} />
          <Route path="/categories/:idc/products/:idp" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/congratulation" element={<Congratulation />} />
          <Route path="/*" element={<NotFound />} /> */}
        </Routes>
      </Provider>
  );
}

export default App;
