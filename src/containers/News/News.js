import React, {Component} from 'react';
import './News.css';
import {Route, Switch, NavLink} from 'react-router-dom';
import Newsnav from '../../components/Newsnav/Newsnav';
import Incomes from '../../components/Incomes/Incomes';
import Indexes from '../../components/Indexes/Indexes';
import ExchangeRate from './ExchangeRate/ExchangeRate';
class News extends Component {
  state = {
    newsNaw: [
      {to: '/news/valutes', label: 'Курси валют', id: 1, exact: false},
      {to: '/news/incomes', label: 'Доходи та витрати банків', id: 2, exact: false},
      {to: '/news/indexes', label: 'Основні показники діяльності банків України', id: 3, exact: false},
    ],
  };
  render() {
    return (
      <div className='News'>
        <h1>Новини</h1>
        <Newsnav nav={this.state.newsNaw} />
        <Switch>
          <Route path={'/news/valutes'} component={ExchangeRate} />
          <Route path={'/news/incomes'} component={Incomes} />
          <Route path={'/news/indexes'} component={Indexes} />
        </Switch>
      </div>
    );
  }
}



export default News;

