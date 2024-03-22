// import logo from './logo.svg';
// import './App.css';

// import Navbar from "./Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
// import IndexNavbar from "./componenet/home/homeNav";
import Contactsales from "./componenet/home/contactsales";
import Popup from "./componenet/home/popup";
import { Register}  from "./componenet/rejister,login/Register";
import Otp  from "./componenet/rejister,login/otp";
import SignIn from "./componenet/rejister,login/Login";
import Homepage from "./componenet/home/homepage";
import Business from "./componenet/home/plan&pricing";
import Saidbar from "./componenet/Profile/saidbar";
import Profile from "./componenet/Profile/profile";
import Layout from "./componenet/layout/layout";
import {myContext}from"./context";
import { useState } from "react";
import SaidbarLayout from "./componenet/layout/saidbarlayout";
import MyHome from "./componenet/Profile/myhom";
import Meetings from "./componenet/Profile/meetings";
import Webinars from "./componenet/Profile/webinars";
import PersonalContact from "./componenet/Profile/personalcontact";
import PersonalDevices from "./componenet/Profile/personaldevices";
import WhiteBoard from "./componenet/Profile/whiteboard";
import Note from "./componenet/Profile/mainnote";
import Recordings from "./componenet/Profile/recordings";
import MainClips from "./componenet/Profile/clips";
import Sheduler from "./componenet/Profile/sheduler";
import Settings from "./componenet/Profile/settings";
import Privacy from "./componenet/Profile/privacy";
import { Toaster } from "react-hot-toast";
// import  HomePage from "./HomePage/Homepage";
function App() {
  const [login,setLogin]=useState();
  ///otpstart
  const [data,setData]=useState({});
///otpend


  const value={
    login,setLogin,
    data,setData,
  }
  return(
    <>
    <Toaster />
    <myContext.Provider value={value}>
    <Routes>      
      <Route path="/" element={<Layout/>} >
      <Route path="/" element={<Homepage/>} />
      <Route path="/pricing" element={<Business/>}>
      </Route>
      </Route>
      <Route path="/"element={<SaidbarLayout/>}>
       <Route path="myhome" element={<MyHome/>}/>
        <Route path="/profile"  element={<Profile/>}/>
        <Route path="meetings"element={<Meetings/>}>

        </Route>
        <Route path="webinar" element={<Webinars/>}/>
        <Route path="personalContact" element={<PersonalContact/>}/>
        <Route path="personal-devices" element={<PersonalDevices/>}/>
        <Route path="wb" element={<WhiteBoard/>}>
        </Route>
        <Route path="notes" element={<Note/>}>
        </Route>
        <Route path="recording" element={<Recordings/>}>
        </Route>
        <Route path="clips" element={<MainClips/>}>
          </Route> 
          <Route path="appointment" element={<Sheduler/>}/>
          <Route path="settings" element={<Settings/>}/>
          <Route path="/privacy" element={<Privacy/>}/>
      </Route> 
      {/* <Route path="/signup" element={<Register_navbar/>}> */}
        <Route path="/signup"  element={<Register/>}/>
        <Route path="/register"  element={<Otp/>}/>
        <Route path="/login" element={<SignIn/>}/>

      {/* </Route> */}
      <Route path="/conatctsales" element={<Contactsales/>}/>
      <Route path="/popup" element={<Popup/>}/>
      
</Routes>
</myContext.Provider>
    </>
      
       
  );
}

export default App;
