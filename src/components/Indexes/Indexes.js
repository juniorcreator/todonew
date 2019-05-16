import React, {Component} from 'react';
import './Indexes.css';
import Loader from "../UI/Loader/Loader";

class Indexes extends Component {
  state = {
    Indexes: null
  };
   getIndexes =() => {
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/basindbank?date=20160101&period=m&json')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        this.setState({Indexes: myJson});
      })
      .catch((error) => {
        console.log('problems, we have got an error ',  error);
      });
  };
  renderIndexes=() => {
    return this.state.Indexes.map((income) => {
      return (
        <div key={income.id_api} className='Indexes'>
          <p>Date: {income.dt.substring(0,4)+"-" + income.dt.substring(4,6)+"-" + income.dt.substring(6,8)}</p>
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
    this.getIndexes();
  };
  render() {
    return (
      <div className='Incomes'>
        <h1>Основні показники діяльності банків України</h1>
        {this.state.Indexes !== null ? this.renderIndexes() : <Loader />}
      </div>
    );
  }
}



export default Indexes;
