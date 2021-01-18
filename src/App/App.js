import './App.css';
import React, { useState } from 'react';
import { NavBar } from '../NavBar/NavBar';
import { Strains } from '../Strains/Strains';
import { Experiences } from '../Experiences/Experiences';
import { Route, Switch, Redirect } from 'react-router-dom';

export const App = () => {
  const [experiencesLog, setExperiences] = useState([]);
  return (
    <section>
      <NavBar />
      <Switch>
        <Redirect exact path="/" to="/strains" />
        <Route exact path="/strains">
          <Strains setExperiences={setExperiences} experiencesLog={experiencesLog}/>
        </Route>
        <Route path="/experiences">
          <Experiences experiencesLog={experiencesLog}/>
        </Route>
      </Switch>
    </section>
  )
}