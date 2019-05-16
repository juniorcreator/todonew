import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import './Navitem.css';

class Navitem extends Component {

  renderNav = () => {
    return this.props.navitem.map((nav => {
      return (
        <li key={nav.id} className={'Navitem'}>
          <NavLink
            to={nav.to}
            exact={nav.exact}
          >
            {nav.label}
          </NavLink>
        </li>
      )
    }))
  };

  render() {
    return (
      <React.Fragment>
        {this.renderNav()}
      </React.Fragment>

    );
  }

}
export default Navitem;
