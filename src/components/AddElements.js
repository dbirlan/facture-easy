import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import Element from './Element';

export class addElements extends Component {
  state = {
    description: 'Flamethrowers',
    quantity: '3',
    price: '500',
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addElements(this.state);
    // this.setState({
    //   description: '',
    //   quantity: '',
    //   price: '',
    // });
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h2>Ajouter des éléments</h2>
        <Element />
        <Element />
        <Element />
        <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
          <TextField
            name="description"
            id="standard-basic"
            label="Description"
            type="text"
            placeholder={this.state.description}
            onChange={this.onChange}
          />
          <TextField
            name="quantity"
            id="standard-basic"
            label="Quantité"
            type="text"
            placeholder={this.state.quantity}
            onChange={this.onChange}
          />
          <TextField
            name="price"
            id="standard-basic"
            label="Prix Unitaire"
            type="text"
            placeholder={this.state.price}
            onChange={this.onChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            className="btn"
            startIcon={<Icon>add</Icon>}
            style={{
              flex: '1',
            }}
          >
            Ajouter
          </Button>
        </form>
      </div>
    );
  }
}

//PropTypes
addElements.propTypes = {
  addElements: PropTypes.func.isRequired,
};

export default addElements;
