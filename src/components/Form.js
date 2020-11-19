import React, { Component } from 'react';
import faker from 'faker';

import MyDocument from './MyDocument';
import AddElements from './AddElements';
import InputForm from './InputForm';

import { formatDate } from '../utils';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: formatDate(new Date()),
      nom1: faker.name.lastName(),
      prenom1: faker.name.firstName(),
      societe1: faker.company.companyName(),
      adresse1: faker.address.streetAddress(),
      cpville1: faker.address.zipCode() + ' ' + faker.address.city(),
      telephone1: faker.phone.phoneNumber(),
      email1: faker.internet.email(),
      nom2: faker.name.lastName(),
      prenom2: faker.name.firstName(),
      societe2: faker.company.companyName(),
      adresse2: faker.address.streetAddress(),
      cpville2: faker.address.zipCode() + ' ' + faker.address.city(),
      telephone2: faker.phone.phoneNumber(),
      email2: faker.internet.email(),
      description: faker.commerce.product(),
      quantity: faker.random.number(),
      price: faker.commerce.price(),
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
