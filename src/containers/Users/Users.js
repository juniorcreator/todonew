import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import './Users.css';
import User from '../../components/User/User';
import EditUser from '../../containers/EditUser/EditUser';
import thanas from '../../img/Thanas.jpeg';
import halk from '../../img/Halk.jpeg';
import deadpool from '../../img/Deadpool.jpeg';
import spider from '../../img/Spider.jpeg';
class Users extends Component {
  state = {
    users: [
      {name: 'Thanas', id: 1, sername: 'Example', img:thanas, position: 'HTML coder'},
      {name: 'Halk', id: 2, sername: 'Hogan', img:halk, position: 'PHP developer'},
      {name: 'Deadpool', id: 3, sername: 'Joker', img:deadpool, position: 'Laravel developer'},
      {name: 'SpiderMan', id: 4, sername: 'Example', img:spider, position: 'Phyton developer'},
    ]
  };
  onHandleDelete=(id) => {
    let users = this.state.users.filter((user) => {
      return user.id !== id
    });

    this.setState({users})
  };
  onHandleProfile=(users) => {
    this.props.history.push({
      pathname: '/users/'+users.name,
      state: {
        users
      }
    })
  };
  render() {
    return (
      <div className="Users">
        <h1>Users</h1>
        <ul className='list-group'>
          {!this.state.users.length
            ? <h1>Yo have deleted all the users</h1>
            : <User
              users={this.state.users}
              onHandleDelete={this.onHandleDelete}
              onHandleProfile={this.onHandleProfile}
            />
          }
        </ul>
      </div>
    );
  }
}


export default Users;
