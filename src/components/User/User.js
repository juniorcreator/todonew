import React from 'react';
import Btn from '../UI/Buttons/Btn/Btn';
import './User.css';

const User = props => {
  var renderUsers = props.users.map((user) => {
    return(
      <div key={user.id} className='User'>
        <li className='list-group-item'>
          <div className='photo'>
            <img src={user.img} alt=""/>
          </div>
          <div className='data'>
            <p>Name: {user.name}</p>
            <p>Surname: {user.sername}</p>
            <p> Position: {user.position}</p>
          </div>

          <div className='buttons'>
            <img src="" alt=""/>
            <Btn
              type='button'
              classes='btn btn-secondary'
              label='Edit'
              click={() => props.onHandleProfile(user)}

            />
            <Btn type='button' classes='btn btn-info' label='Profile'
            />
            <Btn
              type='button'
              classes='btn btn-danger'
              label='Delete'
              click={() => props.onHandleDelete(user.id)}
            />
          </div>

        </li>
      </div>
    )
  });
  return (renderUsers);
};

User.propTypes = {

};

export default User;
