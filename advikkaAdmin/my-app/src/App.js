import { BrowserRouter, Routes, Route } from "react-router-dom"; 

import Dashbord from './component/Dashbord'

import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Dashbord />} />
    </Routes>
  </BrowserRouter>
);
export default App;
