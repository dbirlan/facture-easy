import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

export class ElementItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '5px',
      height: 'auto',
      borderBottom: '1px #ccc dotted',
    };
  };

  render() {
    const { id, description, quantity, price } = this.props.elements;
    return (
      <div style={this.getStyle()}>
        <p style={{ display: 'flex' }}>
          <b style={bStyle}>{description}</b>
          <b style={bStyle}>{quantity}</b>
          <b style={bStyle}>{price}</b>
          <Fab
            color="secondary"
            aria-label="Add"
            onClick={() => this.props.delElement(id)}
          >
            <Icon>delete</Icon>
          </Fab>
        </p>
      </div>
    );
  }
}

// PropTypes
ElementItem.propTypes = {
  elements: PropTypes.object.isRequired,
  delElement: PropTypes.func.isRequired,
};

const bStyle = { marginRight: 'auto' };

export default ElementItem;
