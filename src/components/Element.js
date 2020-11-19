import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

export class Element extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '5px',
      height: 'auto',
      borderBottom: '1px #ccc dotted',
    };
  };

  render() {
    // const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p style={{ display: 'flex' }}>
          <b style={bStyle}>Description</b>
          <b style={bStyle}>Quantité</b>
          <b style={bStyle}>Prix</b>
          <Fab
            color="secondary"
            aria-label="Add"
            onClick={console.log(this.props)}
          >
            <Icon>delete</Icon>
          </Fab>
        </p>
      </div>
    );
  }
}

// PropTypes
Element.propTypes = {};
const bStyle = { margin: 'auto' };
const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right',
};
export default Element;
