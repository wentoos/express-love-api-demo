import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header'
import PostList from './PostList'
import NewPost from './NewPost'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path='/' component={PostList}  />
          <Route path='/post/new' component={NewPost} />
        </div>
      </Router>
    );
  }
}

export default App;
