//import logo from './logo.svg';
//import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from "react-router-dom";
import Shipping_method from './Component/shipping_method';
import Indexpage from "./Component/Indexpage";
import Home_com from "./Component/Home";
import Contact from "./Component/Contact";
import HouseShifting from './Component/House_shifting';

function App() {
  return (
    <>
      <Indexpage />
      <Routes>

        <Route path={`/`} element={<Home_com/>}></Route>
        <Route path={`/shipping`} element={<Shipping_method />}></Route>
        <Route path={'/h_shifting'} element={<HouseShifting/>}></Route>

      </Routes>
      <Contact />





    </>
  );
}

export default App;
