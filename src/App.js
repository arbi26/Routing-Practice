import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";
import './App.css';
import Welcome from "./components/welcome";

function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        
        <Route path="/:parameter" element={<Welcome />}/>
        <Route path="/:parameter/:color/:bgcolor" element={<Welcome />}/>

      </Routes>
    </BrowserRouter>
  );
}
    
export default App;
