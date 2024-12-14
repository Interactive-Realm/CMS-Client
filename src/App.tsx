import { useState,useContext } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'; 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { UserContext } from "@interactive-realm/basepatternutilities";   // BasePatternUtilities Functions Import

//import CMSLoginPage from "./CMS/LoginPage";                                                 // CMS Login Page
import CMSLoginPage from "./CMS/LoginPage_BS";
import Dashboard from "./CMS/Dashboard_BS";   

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  const [count, setCount] = useState(0)

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
        {/* <Route path="/*" element={<Navigate to='/CMS' />} /> */}
        <Route path="/Login" element={<CMSLoginPage/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>

  )
}

export default App
