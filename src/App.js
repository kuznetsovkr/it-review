import React, {useContext, useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import './style.css';
import {Context} from "./index";
import jwt_decode from "jwt-decode";
import FooterPage from "./components/FooterPage";

function App() {

    const {user} = useContext(Context)

    useEffect(() => {
        if (localStorage.getItem('token'))  {
            user.setUser(true)
            user.setIsAuth(true)
            const data = localStorage.getItem('token')
            const name = jwt_decode(data)
            if( name.sub === 'Admin'){
                user.setIsRole(true)
            }else{
                user.setIsRole(false)
            }


        }

    }, [])

  return(
      <BrowserRouter>
          <NavBar/>
          <AppRouter/>
      </BrowserRouter>
  );
}

export default App;
