import React, {Component} from 'react';
import Loader from "../UI/Loader/Loader";
import './Incomes.css';

class Incomes extends Component {
  state = {
    incomes: null
  };
  getIncomes =() => {
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/banksincexp?date=20090201&period=m&json')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        this.setState({incomes: myJson});
      })
      .catch((error) => {
        console.log('problems, we have got an error ',  error);
      });
  };
  renderIncomes=() => {
    return this.state.incomes.map((income) => {
      return (
        <div key={income.id_api} className='Incomes'>
          <p>Date: {income.dt.substring(0,4) + "-" + income.dt.substring(4,6) +"-" + income.dt.substring(6,8)}</p>
          <p>TXT: {income.txt}</p>
          <p>Leveli: {income.leveli}</p>
          <p>Parent: {income.parent}</p>
          <p>TZEP: {income.tzep}</p>
          <p>Value {income.value}</p>
          <hr/>
        </div>
      )
    })
  };
  componentDidMount() {
    this.getIncomes();
  };
  render() {
    return (
      <div className='Incomes'>
        <h1>Доходи та витрати банку</h1>
        {this.state.incomes !== null ? this.renderIncomes() : <Loader />}
      </div>
    );
  }
}


export default Incomes;
