import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header'
import PostList from './PostList'
import NewPost from './NewPost'
import EditPost from './EditPost'
import ShowPost from './ShowPost'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={PostList}  />
            <Route path='/post/new' component={NewPost} />
            <Route path='/post/:id/edit' component={EditPost} />
            <Route path='/post/:id' component={ShowPost} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
