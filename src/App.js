import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { paths } from "./constants";
import {PrivateRoute} from "./Containers/PrivateRoute";
import Registration from "./Containers/Registration/Registration";
import Login from "./Containers/Login/Login";
import Dashboard from "./Containers/Dashboard/Dashboard";
import Editor from "./Containers/Editor/Editor";
import Templates from "./Containers/Templates/Templates";
import Header from "./Components/Header/Header";
import "./App.css";

const App = () => (<Router>
      <Header/>
      <Switch>
        <PrivateRoute isPrivat={false} path={paths.registration} component={Registration} />
        <PrivateRoute isPrivat={false} path={paths.login} component={Login}/>
        <PrivateRoute isPrivat={true} exact path={paths.dashboard} component={Dashboard}/>
        <PrivateRoute isPrivat={true} exact path={paths.editor} component={Editor}/>
        <PrivateRoute isPrivat={true} exact path={paths.templates} component={Templates}/>
        <Route path={`${paths.templates}/2`} component={Templates}/>
        <Route path='*'>
            <Redirect to={paths.login}/>
        </Route>
      </Switch>
    </Router>)

export default App
