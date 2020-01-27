import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import HomeContainer from './components/Home/HomeContainer.jsx';
import Redirector from './components/Redirector/Redirector.jsx';
import Test from './components/Test/Test.jsx';
import Topics from './components/Topics/Topics.jsx';
import './static/styles/main.scss';

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: ''
    };

  }

  componentDidMount() {
    const redirectLink = getParameterByName('redirect');
    console.log(`Redirect to: ${redirectLink}`);

    this.setState({
      readyToRedirect: true,
      redirectLink: redirectLink
    });
  }

  render() {

    return (
      <Router>
        <div>
          <Redirector 
            readyToRedirect={this.state.readyToRedirect}
            redirectLink={this.state.redirectLink}
          />
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

            <Route exact path="/home">
              <HomeContainer title={'home props test'} />
            </Route>
            <Route exact path="/homeTwoTest">
              <HomeContainer title={'render our second home!'} />
            </Route>
            <Route 
              path="/test"
              render={(props) => <Test {...props} />}
            />
            <Route 
              path="/topics"
              render={(props) => <Topics {...props} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
