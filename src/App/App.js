import './App.css';
import React from 'react';
import { NavBar } from '../NavBar/NavBar';
import { Strains } from '../Strains/Strains';
import { Experiences } from '../Experiences/Experiences';
import { Route, Switch, Redirect } from 'react-router-dom';

export const App = () => {
  return (
    <section>
      <NavBar />
      <Switch>
        <Redirect exact path="/" to="/strains" component={Strains} />
        <Route exact path="/strains">
          <Strains />
        </Route>
        <Route path="/experiences">
          <Experiences />
        </Route>
      </Switch>
    </section>
  )
}