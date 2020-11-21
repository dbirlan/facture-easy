import React, { Component } from 'react';
import faker from 'faker';

import MyDocument from './MyDocument';
import AddElements from './AddElements';
import InputForm from './InputForm';
import Elements from './Elements';
import { v4 as uuidv4 } from 'uuid';

import { formatDate } from '../utils';

class Form extends Component {
  state = {
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
    serviceDescription: faker.commerce.productDescription(),
    conditions: 'Par chèque dans les 15 prochains jours',
    total: 0,
    elements: [
      {
        id: 1,
        description: faker.commerce.product(),
        quantity: faker.random.number(),
        price: faker.commerce.price(),
      },
      {
        id: 2,
        description: faker.commerce.product(),
        quantity: faker.random.number(),
        price: faker.commerce.price(),
      },
      {
        id: 3,
        description: faker.commerce.product(),
        quantity: faker.random.number(),
        price: faker.commerce.price(),
      },
      {
        id: 4,
        description: faker.commerce.product(),
        quantity: faker.random.number(),
        price: faker.commerce.price(),
      },
      {
        id: 5,
        description: faker.commerce.product(),
        quantity: faker.random.number(),
        price: faker.commerce.price(),
      },
      {
        id: 6,
        description: faker.commerce.product(),
        quantity: faker.random.number(),
        price: faker.commerce.price(),
      },
    ],
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  addElements = (elementState) => {
    const newElement = {
      id: uuidv4(),
      description: elementState.description,
      quantity: elementState.quantity,
      price: elementState.price,
    };
    this.setState({
      elements: [...this.state.elements, newElement],
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
      serviceDescription,
      conditions,
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
      serviceDescription: serviceDescription,
      conditions: conditions,
    });
  };

  delElement = (id) => {
    this.setState({
      elements: [
        ...this.state.elements.filter((elements) => elements.id !== id),
      ],
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
      marginRight: 20,
    };
    return (
      <div style={divStyle}>
        <div style={verticalDivStyle}>
          <InputForm onInputChange={this.handleInputChange} />
          <AddElements addElements={this.addElements} />
          <Elements
            elements={this.state.elements}
            delElement={this.delElement}
          />
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
          serviceDescription={this.state.serviceDescription}
          conditions={this.state.conditions}
          elements={this.state.elements}
        />
      </div>
    );
  }
}

export default Form;
