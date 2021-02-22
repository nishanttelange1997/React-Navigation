import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Switch,Route, Link} from "react-router-dom";
import Login from "./Screen/Login";
import NotFound from "./Screen/NotFound";
import Registration from "./Screen/Registration";


const routing = (
    <BrowserRouter>
    <Switch>
          <Route exact path="/" component={App}/>
          <Route  path="/login" component={Login}/>
          <Route exact path="/registration" component={Registration}/>
          <Route component={NotFound}/>
    </Switch>
    
    
    </BrowserRouter>
    

);
ReactDOM.render(routing,document.getElementById('root'));
//reactDom.render(routing,document,getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
