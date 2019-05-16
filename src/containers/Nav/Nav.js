import React, {Component} from 'react';
import NavItem from '../../components/Navitem/Navitem';
import './Nav.css';

class Nav extends Component {

  render() {
    const {nav} = this.props;
    return (
      <ul className={'Nav'}>
        <NavItem navitem={nav} />
      </ul>
    );
  }

}

export default Nav;