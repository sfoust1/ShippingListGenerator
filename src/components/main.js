import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import About from './aboutme';
import Contacts from './contact';
import Projects from './projects';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/myportfoliosite" component={LandingPage} />
    <Route path="/aboutme" component={About} />
    <Route path="/contact" component={Contacts} />
    <Route path="/projects" component={Projects} />
  </Switch>
);

export default Main;
