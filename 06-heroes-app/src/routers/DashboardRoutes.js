import React from 'react'
import { Navbar } from '../components/ui/NavBar'
import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import './dashboard.css'

export const DashboardRoutes = () => {
    return (
        <>

        <Navbar />
        <div className="container mt-2 centrado">
        <Switch>
            <Route exact path="/marvel" component={ MarvelScreen }/>
            <Route exact path="/heroe/:heroeId" component={ HeroScreen }/>
            <Route exact path="/dc" component={ DcScreen }/>

            <Redirect to="/marvel"/>

        </Switch>
        </div>
            
        </>
    )
}
