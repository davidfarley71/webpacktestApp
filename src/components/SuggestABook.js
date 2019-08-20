import React, { Component } from "react";
import axios from "axios";
import { Button, Header, Image, Modal } from 'semantic-ui-react'


class SuggestABook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      name: "trustytestname",
      message: "this is a message",
      phonenumber: 12346789,
      email: "email@email.com"
    };
  }


  postSuggestion = () => {
    axios
      .get(
        'https://jzmjq2p2qe.execute-api.us-east-2.amazonaws.com/dev/?name="' + this.state.name + '"&email="' + this.state.email + '"&phonenumber="' + this.state.phonenumber + '"&message="' + this.state.message + '"'
      )
      .then(res => {
        //this.props.updatesate(res.data);
        console.log('post fired');
        console.log(res);
        return
      });
    htis.setstate({
      name: "",
      message: "",
      phonenumber: 0,
      email: ""
    })
  };

  handleChange = (evt) => {
    const value = evt.target.value;
    this.setState({
      [evt.target.name]: value
    });
    console.log(evt.target.value)
  }


  render = () => {
    return (
      <div>
        {/* <Modal trigger={<Button>Show Modal</Button>} centered={false}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>We've found the following gravatar image associated with your e-mail address.</p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
        </Modal> */}
        <div>
        <label>name: </label>
        <input onChange={this.handleChange} name="name"></input>
        <label>email: </label>
        <input onChange={this.handleChange} name="email"></input>
        <label>phone: </label>
        <input onChange={this.handleChange} name="phonenumber"></input>
        <label>message: </label>
        <text onChange={this.handleChange} name="message"></text>
        </div>
        <button onClick={this.postSuggestion}>test</button>
        
      </div>
    )
  }
}


export default SuggestABook;