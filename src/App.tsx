import { useState,useContext } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'; 

import { UserContext } from "@interactive-realm/basepatternutilities";   // BasePatternUtilities Functions Import

//import CMSLoginPage from "./CMS/LoginPage";                                                 // CMS Login Page
import CMSLoginPage from "./CMS/LoginPage_BS";
import Dashboard from "./CMS/Dashboard_BS";   

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  
  let component; // React Render Component

  // Used to save data locally in the browser session (Data will disappear when page is refreshed, EG. by pressing F5)
  const userInfo = useContext(UserContext); 

  return (
    <>
    <BrowserRouter>
    <Routes>
        {/* Main route for campaign game */}
        <Route
        path="/Campaign"
        element={
            <UserContext.Provider value={userInfo}>
                <div id="app">
                    {component}
                </div>
            </UserContext.Provider>}
        />
        {/* Reroute all paths to the main campaign route */}
        <Route path="/*" element={<Navigate to='/CMS' />} />
        <Route path="/Login" element={<CMSLoginPage/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
