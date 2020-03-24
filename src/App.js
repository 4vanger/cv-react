import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {AboutPage, JobsPage, ProjectsPage, EducationPage, DownloadLinksPage} from './components/pages';
import {Header} from './components/Header';

import "./App.scss";

function App() {
  return (
    <Router>
      <Header/>
      <div class="page">
        <Switch>
          <Route exact path="/">
            <AboutPage />
          </Route>
          <Route path="/jobs">
            <JobsPage />
          </Route>
          <Route path="/projects">
            <ProjectsPage />
          </Route>
          <Route path="/education">
            <EducationPage />
          </Route>
          <Route path="/downloadLinks">
            <DownloadLinksPage />
          </Route>
          <Route path="*">404</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
