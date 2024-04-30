// App.js
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "./pages/Home";
import postDetails from "./pages/postDetails";
import Posts from "./pages/Posts";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import NotFound from "./pages/NotFound";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <Container>
      <Router>
        <div>
          <ButtonGroup>
            <button variant="outline-secondary">
              <Link to="/pages/Home">Home</Link>
            </button>
            <button variant="outline-secondary">
              <Link to="/pages/Posts">Posts</Link>
            </button>
            <button variant="outline-secondary">
              <Link to="/pages/CreatePost">Create Post</Link>
            </button>
          </ButtonGroup>

          <Switch>
            <Route exact path="/pages/Home" component={Home} />
            <Route exact path="/pages/Posts" component={Posts} />
            <Route exact path="/pages/CreatePost" component={CreatePost} />
            <Route exact path="/posts/edit/:id" component={EditPost} />
            <Route
              exact
              path="/posts/postDetails/:id"
              component={postDetails}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </Container>
  );
}

export default App;
