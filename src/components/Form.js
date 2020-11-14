import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

import SendButton from './SendButton';
import MyDocument from './MyDocument';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nom1: 'Musk',
      prenom1: 'Elon',
      societe1: 'The Boring Company',
      adresse1: '1419 Westwood Boulevard',
      cpville1: '90250 Los Angeles',
      telephone1: '+1 310-553-5767',
      email1: 'elon.musk@tbc.com',
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
      width: 'auto',
    };

    const textDivStyle = {
      margin: '10px',
    };

    return (
      <div style={divStyle}>
        <form style={{ padding: '20px' }}>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          ></link>
          <div style={textDivStyle}>
            <TextField
              name="nom1"
              id="standard-basic"
              label="Nom"
              type="text"
              placeholder={this.state.nom1}
              onChange={this.handleChange}
            />
          </div>
          <div style={textDivStyle}>
            <TextField
              name="prenom1"
              id="standard-basic"
              label="Prénom"
              type="text"
              placeholder={this.state.prenom1}
              onChange={this.handleChange}
            />
          </div>
          <div style={textDivStyle}>
            <TextField
              name="societe1"
              id="standard-basic"
              label="Société"
              type="text"
              placeholder={this.state.societe1}
              onChange={this.handleChange}
            />
          </div>
          <div style={textDivStyle}>
            <TextField
              name="adresse1"
              id="standard-basic"
              label="Adresse"
              type="text"
              placeholder={this.state.adresse1}
              onChange={this.handleChange}
            />
          </div>
          <div style={textDivStyle}>
            <TextField
              name="cpville1"
              id="standard-basic"
              label="Code Postal et Ville"
              type="text"
              placeholder={this.state.cpville1}
              onChange={this.handleChange}
            />
          </div>
          <div style={textDivStyle}>
            <TextField
              name="telephone1"
              id="standard-basic"
              label="Téléphone"
              type="text"
              placeholder={this.state.telephone1}
              onChange={this.handleChange}
            />
          </div>
          <div style={textDivStyle}>
            <TextField
              name="email1"
              id="standard-basic"
              label="Email"
              type="text"
              placeholder={this.state.email1}
              onChange={this.handleChange}
            />
          </div>
          <SendButton onClick={this.handleButtonClicked.bind(this)} />
        </form>
        <MyDocument
          nom1={this.state.nom1}
          prenom1={this.state.prenom1}
          societe1={this.state.societe1}
          adresse1={this.state.adresse1}
          cpville1={this.state.cpville1}
          telephone1={this.state.telephone1}
          email1={this.state.email1}
        />
      </div>
    );
  }
}

export default Form;
