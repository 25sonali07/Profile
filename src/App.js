import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {NavLink, Switch,Route, Redirect} from 'react-router-dom';
import Pro from "./Pro";


function App() {
  const img="https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg";
  return (
  <>
  <div className="sel justify-content-center">
  <div className="card col-md-6" >
    <img src={img} className="card-img-top" alt={img}/>
    <div className="card-body">
    <h5 className="card-title">My Profile</h5>
    <p className="card-text">{<Switch>
      <Route exact path='/Pro' component={Pro}/>
      <Redirect to="/"/>

    </Switch>}</p>
    <NavLink to="/pro" className="btn btn-primary">View Profile</NavLink>
    </div>
  </div>
  </div>
    </>
  );
}

export default App;
