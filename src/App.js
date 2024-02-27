// import logo from './logo.svg';
// import './App.css';

// import Navbar from "./Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import IndexNavbar from "./componenet/home/homeNav";
import Register_navbar from "./componenet/rejister,login/Register_navbar";
import Contactsales from "./componenet/home/contactsales";
import Popup from "./componenet/home/popup";
import { Register } from "./componenet/rejister,login/Register";
import SignIn from "./componenet/rejister,login/Login";
import Homepage from "./componenet/home/homepage";
// import  HomePage from "./HomePage/Homepage";
function App() {
  
  return(
    <>
    
    <Routes>
      <Route path="/" element={<IndexNavbar/>} >
      <Route path="/" element={<Homepage/>} />
      </Route>
      <Route path="/signup" element={<Register_navbar/>}>
        <Route path="up"  element={<Register/>}/>
        <Route path="in" element={<SignIn/>}/>
      </Route>
      <Route path="/conatctsales" element={<Contactsales/>}/>
      <Route path="/popup" element={<Popup/>}/>
    
</Routes>
    </>
      
       
  );
}

export default App;
