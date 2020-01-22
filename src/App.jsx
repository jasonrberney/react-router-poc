import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import HomeContainer from './components/Home/HomeContainer.jsx';
import Test from './components/Test/Test.jsx';
import Topics from './components/Topics/Topics.jsx';
import './static/styles/main.scss';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: ''
    };

  }

  componentDidMount() {

  }

  render() {

    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/homeTwoTest">Home Two Test</Link>
              </li>
              <li>
                <Link to="/test">Test</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            {/* how to start at a specifc link using Redirect
            think of the false below as a "loggedIn" boolean */}
            {/* <Route exact path="/">
              {false ? <Redirect to="/test" /> : <HomeContainer />}
            </Route> */}

            <Route path="/home">
              <HomeContainer title={'home props test'} />
            </Route>
            <Route path="/homeTwoTest">
              <HomeContainer title={'render our second home!'} />
            </Route>
            <Route path="/test">
              <Test />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
