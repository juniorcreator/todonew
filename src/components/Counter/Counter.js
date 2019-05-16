import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  state = {
    value: this.props.value,
  };

  renderCoubter = () => {
    const {value} = this.state;
    return value === 0 ? 'Zero' : value;

  };
  handleIncrement =(e) => {
    this.setState({
      value: this.state.value + 1
    });
  };
  handDecrement =() => {
    if(this.state.value < 1) return
    this.setState({
      value: this.state.value - 1
    })

  };
  renderClasses = () => {
    let classes = 'badge m-2 badge';
    classes += this.state.value === 0 ? '-warning' : '-primary';
    return classes;
  };
  renderBtnClasses = () => {
    let classes = 'btn btn-secondary btn-sm';
    classes += this.state.value < 1 ? classes += ' disabled': '';

    return classes;
  };

  render () {
    return (
      <div className={'Counter'}>
        {this.props.children}
        <span className={this.renderClasses()}>{this.renderCoubter()}</span>
        <button
          className='btn btn-secondary btn-sm m-2'
          onClick={() => this.handleIncrement(20)}
        >Plus</button>
        <button
          className={this.renderBtnClasses()}
          onClick={this.handDecrement}
        >Minus</button>
        <button
          className='btn btn-danger m-2 btn-sm'
          onClick={() => this.props.handDelete(this.props.id)}
        >Delete</button>
      </div>

    )
  }
}

export default Counter;