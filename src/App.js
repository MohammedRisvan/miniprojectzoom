// import logo from './logo.svg';
// import './App.css';

// import Navbar from "./Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import IndexNavbar from "./componenet/index/IndexNav";
import Register_navbar from "./componenet/rejister,login/Register_navbar";

function App() {
  
  return(
    <>
    
    <Routes>
      <Route path="/" element={<IndexNavbar/>} />
      <Route path="/signup" element={<Register_navbar/>}/>
    
</Routes>
    </>
      
       
  );
}

export default App;
