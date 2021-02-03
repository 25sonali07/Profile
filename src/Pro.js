import React from  "react";
import { Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import {NavLink,Route} from 'react-router-dom';
import './App.css';

const Pro =()=>{
    return(
        <>
        <p className="por">My Name is Sonali Kumari.I am persuing in Sharda University B.Tech 3rd.My hobbies are listening Music,listening story and Singing a Song
        and my technical skills are:-SQL,bootstrap,CSS,React,Javascript,HTML,Python some basic knowlege in c and java.and I have worked ml and AI based project in College <NavLink to="/" className="line">Go Back</NavLink></p>
        <Switch className="prim">
        <Route exact path='/' component={App}/>
        </Switch>
        </>
    )
}
export default Pro;