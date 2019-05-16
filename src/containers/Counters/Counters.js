import React, {Component} from 'react';
import Counter from '../../components/Counter/Counter';
import './Counters.css';

export default class Counters extends Component {
  state = {
    counters: [
      {id: 1, value: 1},
      {id: 2, value: 1},
      {id: 3, value: 0},
      {id: 4, value: 5},
    ]
  };
  handDelete = id => {
    let counters = [...this.state.counters];
    counters = counters.filter(counter => counter.id !== id);
    this.setState({counters});
  };
  renderCounter =() => {
    return (
      this.state.counters.map((counter) => {
        return (
          <Counter
            key={counter.id}
            id ={counter.id}
            value={counter.value}
            handDelete={this.handDelete}
          >
            <h6>Counter {counter.id}</h6>
          </Counter>
        )
      })
    )
  };
  renderNoCounter = () => {
    return <h6 style={{color:'#fff', fontSize:'20px', fontWeight:'bold'}}>Well done, you have deleted all the counters</h6>;
  };

  render() {
    return (
      <div className={'Counters'}>
        <h1>Counters page</h1>
        {this.state.counters.length ? this.renderCounter() : this.renderNoCounter()}
      </div>
    )
  }
}