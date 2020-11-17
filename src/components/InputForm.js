import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import MaterialUIPickers from './MaterialUIPickers';

import { formatDate } from '../utils';

export default class addElements extends Component {
  state = {
    date: formatDate(new Date()),
    nom1: 'Musk',
    prenom1: 'Elon',
    societe1: 'The Boring Company',
    adresse1: '1419 Westwood Boulevard',
    cpville1: '90250 Los Angeles',
    telephone1: '+1 310-553-5767',
    email1: 'elon.musk@tbc.com',
    nom2: 'Musk',
    prenom2: 'Elon',
    societe2: 'The Boring Company',
    adresse2: '1419 Westwood Boulevard',
    cpville2: '90250 Los Angeles',
    telephone2: '+1 310-553-5767',
    email2: 'elon.musk@tbc.com',
  };

  handleDateChange = (date) => {
    this.setState({
      date: formatDate(date),
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onInputChange(this.state);
  };
  render() {
    const divStyle = {
      margin: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      width: 'auto',
    };

    const textDivStyle = {
      margin: '10px',
    };
    return (
      <form
        style={{
          padding: '20px',
        }}
        onSubmit={this.onSubmit}
      >
        <h2>Date et description</h2>
        <div style={textDivStyle}>
          <MaterialUIPickers onDateChange={this.handleDateChange} />
        </div>
        <div style={textDivStyle}>
          <TextField
            id="standard-multiline-flexible"
            label="Description du service"
            multiline
            rowsMax={4}
            style={{ width: '100%' }}
          />
        </div>
        <div style={textDivStyle}>
          <TextField
            id="standard-multiline-flexible"
            label="Conditions de payement"
            multiline
            rowsMax={4}
            style={{ width: '100%' }}
          />
        </div>
        <div style={divStyle}>
          <div style={{ padding: '20px' }}>
            <link
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet"
            ></link>
            <h2>Emetteur</h2>
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
                label="CP Ville"
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
          </div>
          <div style={{ padding: '20px' }}>
            <h2>Destinataire</h2>
            <link
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet"
            ></link>

            <div style={textDivStyle}>
              <TextField
                name="nom2"
                id="standard-basic"
                label="Nom"
                type="text"
                placeholder={this.state.nom2}
                onChange={this.handleChange}
              />
            </div>
            <div style={textDivStyle}>
              <TextField
                name="prenom2"
                id="standard-basic"
                label="Prénom"
                type="text"
                placeholder={this.state.prenom2}
                onChange={this.handleChange}
              />
            </div>
            <div style={textDivStyle}>
              <TextField
                name="societe2"
                id="standard-basic"
                label="Société"
                type="text"
                placeholder={this.state.societe2}
                onChange={this.handleChange}
              />
            </div>
            <div style={textDivStyle}>
              <TextField
                name="adresse2"
                id="standard-basic"
                label="Adresse"
                type="text"
                placeholder={this.state.adresse2}
                onChange={this.handleChange}
              />
            </div>
            <div style={textDivStyle}>
              <TextField
                name="cpville2"
                id="standard-basic"
                label="CP Ville"
                type="text"
                placeholder={this.state.cpville2}
                onChange={this.handleChange}
              />
            </div>
            <div style={textDivStyle}>
              <TextField
                name="telephone2"
                id="standard-basic"
                label="Téléphone"
                type="text"
                placeholder={this.state.telephone2}
                onChange={this.handleChange}
              />
            </div>
            <div style={textDivStyle}>
              <TextField
                name="email2"
                id="standard-basic"
                label="Email"
                type="text"
                placeholder={this.state.email2}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <Button
          type="submit"
          value="Ajouter"
          variant="contained"
          color="primary"
          size="large"
          className="btn"
          startIcon={<Icon>save</Icon>}
          style={{
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          Save
        </Button>
      </form>
    );
  }
}
