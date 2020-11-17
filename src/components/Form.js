import React, { Component } from 'react';

import MyDocument from './MyDocument';
import AddElements from './AddElements';
import InputForm from './InputForm';

import { formatDate } from '../utils';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
      description: 'Flamethrowers',
      quantity: '3',
      price: '500',
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

  addElements = (element) => {
    this.setState({
      description: element.description,
      quantity: element.quantity,
      price: element.price,
    });
  };

  handleInputChange = (input) => {
    const {
      date,
      nom1,
      prenom1,
      societe1,
      adresse1,
      cpville1,
      telephone1,
      email1,
      nom2,
      prenom2,
      societe2,
      adresse2,
      cpville2,
      telephone2,
      email2,
    } = input;
    this.setState({
      date: date,
      nom1: nom1,
      prenom1: prenom1,
      societe1: societe1,
      adresse1: adresse1,
      cpville1: cpville1,
      telephone1: telephone1,
      email1: email1,
      nom2: nom2,
      prenom2: prenom2,
      societe2: societe2,
      adresse2: adresse2,
      cpville2: cpville2,
      telephone2: telephone2,
      email2: email2,
    });
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
    const verticalDivStyle = {
      flexDirection: 'row',
    };
    return (
      <div style={divStyle}>
        <div style={verticalDivStyle}>
          <InputForm onInputChange={this.handleInputChange} />

          <AddElements addElements={this.addElements} />
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
          description={this.state.description}
          quantity={this.state.quantity}
          price={this.state.price}
        />
      </div>
    );
  }
}

export default Form;
