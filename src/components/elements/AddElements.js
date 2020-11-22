import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';

import Responsiveh4 from '../materialUI/Responsiveh4';

export class AddElements extends Component {
  state = {
    description: 'Flamethrowers',
    quantity: '3',
    price: '500',
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addElements(this.state);
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div style={{ marginTop: '20px' }}>
        <Responsiveh4 text="Ajouter des éléments"></Responsiveh4>
        <form
          onSubmit={this.onSubmit}
          style={{ display: 'flex', marginTop: '10px' }}
        >
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
            size="small"
            className="btn"
            startIcon={<Icon>add</Icon>}
            style={{
              flex: '1',
            }}
          >
            A
          </Button>
        </form>
      </div>
    );
  }
}

//PropTypes
AddElements.propTypes = {
  AddElements: PropTypes.func.isRequired,
};

export default AddElements;
