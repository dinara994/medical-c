import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Layout from "./View/Layout";
import Project from "./View/Project";
import TasksWord from "./View/TasksWord";
import Calendar from "./View/Calendar";
import Possibilities from "./View/Possibilities";

function App() {
  return (
    <Router>
        <Layout>
        <Switch>
            <Route exact path='/'><Redirect to='/project'/></Route>
            <Route path='/project'><Project/></Route>
            <Route path='/tasksWord'><TasksWord /></Route>
            <Route path='/calendar'><Calendar /></Route>
            <Route path='/possibilities'><Possibilities /></Route>
        </Switch>
        </Layout>
    </Router>

  );
}

export default App;
