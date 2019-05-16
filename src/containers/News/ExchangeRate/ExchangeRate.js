import React, {Component} from 'react';
import Loader from '../../../components/UI/Loader/Loader';
import './ExchangeRate.css';

class ExchangeRate extends Component {
  state = {
    course: null,
  };
  getCcourse =() => {
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        this.setState({course: myJson});
      })
      .catch((error) => {
        console.log('problems, we have got an error ',  error);
      });
  };
  renderCoursec=() => {
    return this.state.course.map((cource) => {
      return (
        <div key={cource.r030} className='cource'>
          <p>Title: {cource.txt}</p>
          <p>Rate: {cource.rate}</p>
          <p>CC: {cource.cc}</p>
          <p>Exchangedate: {cource.exchangedate}</p>
          <hr/>
        </div>
      )
    })
  };
  componentDidMount() {
    this.getCcourse();
  };
  render() {
    return (
      <div className='ExchangeRate'>
        <h1>Курси валют</h1>
        {this.state.course !== null ? this.renderCoursec() : <Loader />}
      </div>
    );
  }
}

export default ExchangeRate;
