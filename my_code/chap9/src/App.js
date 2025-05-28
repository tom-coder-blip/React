import React, { Component } from 'react';
import User from './User';
import UserForm from './UserForm';
//firebase dependancies
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    console.log(firebase);
  }

  //It returns the UI and sets up routing.
  //<BrowserRouter>: Enables routing using the browser's URL (e.g. /add, /edit/123, /).
  //<Switch>: Ensures only one <Route> is rendered at a time (the first one that matches).
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/edit/:id" component={UserForm} />
              <Route exact path="/add" component={UserForm} />
              <Route exact path="/" component={User} />
              <Route path="/*" component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

//A simple component that shows a message when the user navigates to an unknown route.
class NotFound extends Component {
  render() {
    return <div>Not Found</div>
  }
}

export default App;
