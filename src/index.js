import "./css/base.css";
import "./css/custom.css";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Error from "./pages/error.js";
import Bots from "./premade/bots.js";
import HomePage from "./premade/home.js";
import Button from "./utils/button.js";
import ErrorBoundary from "./utils/errorBoundaries.js";

let buildNumber = 0.01;

console.log(
  "Welcome to the chromebot website. This is client build BR." +
    buildNumber +
    "."
);

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              path="/egg"
              render={() => {
                return (
                  <React.Fragment>
                    <Button
                      destructive
                      onClick={button =>
                        (window.location.href = "https://google.com")
                      }
                    >
                      Go Back Home
                    </Button>
                    <Bots />
                  </React.Fragment>
                );
              }}
            />

            <Route
              path="/status"
              render={() => {
                return (
                  <React.Fragment>
                    <Button
                      destructive
                      onClick={button =>
                        (window.location.href = "https://chromebot.cf")
                      }
                    >
                      Go Back Home
                    </Button>
                    <Bots />
                  </React.Fragment>
                );
              }}
            />
            <Route
              path="/join"
              render={() => {
                window.location.href = "https://discordapp.com/invite/77NM8VQ";
                return (
                  <React.Fragment>
                    <div className="textblock">
                      We're redirecting you now...
                    </div>
                    <Button
                      important
                      onClick={button =>
                        (window.location.href =
                          "https://discordapp.com/invite/77NM8VQ")
                      }
                    >
                      {" "}
                      Not Being Redirected ?{" "}
                    </Button>
                  </React.Fragment>
                );
              }}
            />
            <Route
              render={() => {
                return (
                  <Error
                    code="404"
                    description="The requested resource was not found on the chromebot support website"
                  />
                );
              }}
            />
          </Switch>
        </Router>
      </ErrorBoundary>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
