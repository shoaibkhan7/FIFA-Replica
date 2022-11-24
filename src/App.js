
// import { Link } from 'react-router-dom';

 import {Routes, Route} from 'react-router-dom';
// import { BrowserRouter } from "react-router-dom";
import Grid from "./midterm/grid";
import Menu from './midterm/menu11';

function App() {
  return (
    <div>
    
    <Grid/>
    
     <Routes>
      <Route path="/privacy" element={<Menu/>} />
      <Route path="/terms" element={<Menu/>} />
      {/* <Route path="/login" element={<Login/>} />
      <Route path="/seller" element={<Seller/>} />
      <Route path="/marketing" element={<Marketing/>} /> */}

    </Routes> 

    </div>
  );
}

export default App;
