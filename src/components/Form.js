import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

import MyDocument from './MyDocument';

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: today,
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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  };

  handleDateChange = (event) => {
    const { name, value } = event.target;
    var datePart = value.match(/\d+/g);

    this.setState({
      [name]: datePart[2] + '/' + datePart[1] + '/' + datePart[0],
    });
  };

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

    const verticalDivStyle = {
      flexDirection: 'row',
    };
    return (
      <div style={divStyle}>
        <div style={verticalDivStyle}>
          <form
            style={{
              padding: '20px',
            }}
          >
            <h2>Date et description</h2>
            <div style={textDivStyle}>
              <TextField
                id="date"
                label="Date"
                type="date"
                name="date"
                defaultValue={today}
                onChange={this.handleDateChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div style={textDivStyle}>
              <TextField
                id="standard-multiline-flexible"
                label="Multiline"
                multiline
                rowsMax={4}
                style={{ width: '100%' }}
              />
            </div>
            <div style={textDivStyle}>
              <TextField
                id="standard-multiline-flexible"
                label="Multiline"
                multiline
                rowsMax={4}
                style={{ width: '100%' }}
              />
            </div>
          </form>
          <div style={divStyle}>
            <form style={{ padding: '20px' }}>
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
            </form>
            <form style={{ padding: '20px' }}>
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
            </form>
          </div>
        </div>
        <MyDocument
          date={this.state.date}
          nom1={this.state.nom1}
          prenom1={this.state.prenom1}
          societe1={this.state.societe1}
          adresse1={this.state.adresse1}
          cpville1={this.state.cpville1}
          telephone1={this.state.telephone1}
          email1={this.state.email1}
          nom2={this.state.nom2}
          prenom2={this.state.prenom2}
          societe2={this.state.societe2}
          adresse2={this.state.adresse2}
          cpville2={this.state.cpville2}
          telephone2={this.state.telephone2}
          email2={this.state.email2}
        />
      </div>
    );
  }
}

export default Form;

/*<TextField
                id="date"
                label="Date"
                type="date"
                format="dd/MM/yyyy"
                defaultValue={new Date()}
                name="date"
                onChange={this.handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              /> */
