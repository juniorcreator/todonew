import React, {Component} from 'react';
import './EditUser.css';
import Input from '../../components/UI/Input/Input';
import Btn from '../../components/UI/Buttons/Btn/Btn';

class EditUser extends Component {

  state = {
    users: this.props.location.state.users,
  };
  togleLoader=() =>{
    this.timer = setTimeout(() => {
      //do something
      clearTimeout(this.timer);
    }, 1000);

    //
  };
  componentWillMount() {

    this.togleLoader();
  };
  componentDidMount() {

  };

  handleChangeName=(e) => {
    let users = this.state.users;
    users.name = e.target.value;
    this.setState({users});

  };
  handleChangeSurname=(e) => {
    let users = this.state.users;
    users.sername = e.target.value;
    this.setState({users});
  };
  handleChangePosition=(e) => {
    let users = this.state.users;
    users.position = e.target.value;
    this.setState({users});
  };
  handleChangePhoto=(e) => {
    console.log(e.target.value);
  };

  render() {
    const {name, sername, position, img} = this.state.users;
    return (
      <div className='EditUser'>
        <img src={img} />
        <h1>Editing User: {name}</h1>
        <div className="text">
          Name:
          <Input
            type='text'
            placeholder={name}
            value={name}
            change={this.handleChangeName}
            className='form-control'
          />
        </div>
        <div className="text">
          Surname: <Input
          type='text'
          placeholder={sername}
          value={sername}
          change={this.handleChangeSurname}
          className='form-control'
        />
        </div>
        <div className='text'>
          Position:
          <Input
            type='text'
            placeholder={position}
            value={position}
            change={this.handleChangePosition}
            className='form-control'
          />
        </div>
        <div className='text'>
          Photo: <div className="custom-file">
          <Input
            type='file'
            change={this.handleChangePhoto}
            className='form-control'
            id="inputGroupFile01"
          />
          <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
        </div>
        </div>
        <hr/>
      Save changes: <Btn type='button' classes='btn btn-dark' label='Save' />
      Back to Users page : <Btn
        type='button'
        classes='btn btn-info'
        label='Users'
        click={() => this.props.history.push('/users')}
      />
      </div>
    );
  }

}


export default EditUser;
