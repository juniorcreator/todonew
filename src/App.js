import React, { Component } from 'react';
import Counters from './containers/Counters/Counters';
import News from './containers/News/News';
import Images from './containers/Images/Images';
import Register from './containers/Register/Register';
import Todo from './containers/Todo/Todo';
import Login from './containers/Login/Login';
import Layout from './hoc/Layout';
import Nav from './containers/Nav/Nav';
import Users from './containers/Users/Users'
import Notfound from './containers/Notfound/Notfound';
import EditUser from './containers/EditUser/EditUser';
import Homepage from './containers/Homepage/Homepage';
import {Route, Switch} from 'react-router-dom'
import './App.css';

class App extends Component {
  state = {
    nav: [
      {to: '/home', label: 'Home', id: 1, exact: false},
      {to: '/counters', label: 'Counters' , id: 2, exact: false},
      {to: '/images', label: 'Images' , id: 3, exact: false},
      {to: '/news', label: 'News', id: 4, exact: false},
      {to: '/registration', label: 'Registration', id: 5, exact: false},
      {to: '/login', label: 'Login', id: 6, exact: false},
      {to: '/todos', label: 'Todos', id: 7, exact: false},
      {to: '/createtodo', label: 'Create todo', id: 8, exact: false},
      {to: '/users', label: 'Users', id: 9, exact: false},
    ],
  };

  render() {
    return (
      <Layout>
        <Nav nav={this.state.nav} />
        <Switch>
          <Route path='/counters' component={Counters} />
          <Route path='/news' component={News} />
          <Route path='/images' component={Images} />
          <Route path='/registration' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/todos' component={Todo} />
          <Route exact path='/users' component={Users} />
          <Route path='/home' component={Homepage} />
          <Route path='/users/:id' component={EditUser} />
          <Route  component={Notfound} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
