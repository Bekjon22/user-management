import React from "react";
import {Route, Routes} from "react-router-dom";
import Client from "./pages/Client";
import Login from "./pages/Login";
import SignIn from "./pages/LoginPage";
import {ToastContainer} from "react-toastify";
import SignUp from "./pages/SignUp";
import DataGridDemo from "./pages/UserPanel";
import UserPage from "./pages/UserPage";

const App = () =>{


  return (
    <div className="App">
        <ToastContainer />
        <Routes>
            <Route exact path ='/' element={<SignIn/>}/>
            <Route exact path ='/client' element={<Client/>}/>
            <Route exact path ='/signUp' element={<SignUp/>}/>
            <Route exact path ='/userPanel' element={<DataGridDemo/>}/>
            <Route exact path ='/user' element={<UserPage/>}/>


        </Routes>
    </div>
  );
}

export default App;
