import * as React from 'react';
import { render } from 'react-dom';
import { Router, Switch, Route } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import history from "./utils/history.js";
import routes from "./router.ts";
import "./utils/tcb.js";
import './index.css';

render(
  <React.StrictMode>
    <div>
      <Router history={history}>
        <Switch>
            {
              routes.map(route =>{ 
                const { path, title, component } = route;
                document.title = title;
                return <Route exact path={path} key={path} render={() => {
                  return component();
                }} />
              })
            }
        </Switch>
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
