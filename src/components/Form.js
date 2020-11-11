import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

import SendButton from './SendButton';
import MyDocument from './MyDocument';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nom: '',
      prenom: '',
      comments: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleButtonClicked() {
    console.log(this.state);
  }

  render() {
    const divStyle = {
      margin: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px',
    };

    return (
      <div style={divStyle}>
        <form style={{ padding: '20px' }}>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          ></link>
          <div>
            <TextField
              name="nom"
              id="standard-basic"
              label="Nom"
              type="text"
              value={this.state.nom}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <TextField
              name="prenom"
              id="standard-basic"
              label="Prénom"
              type="text"
              value={this.state.prenom}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <TextField
              name="comments"
              id="standard-basic"
              label="Comments"
              type="text"
              value={this.state.comments}
              onChange={this.handleChange}
            />
            <SendButton onClick={this.handleButtonClicked.bind(this)} />
          </div>
        </form>
        <MyDocument nom={this.state.nom} prenom={this.state.prenom} />
      </div>
    );
  }
}

export default Form;
