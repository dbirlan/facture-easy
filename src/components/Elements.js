import React, { Component } from 'react';
import ElementItem from './ElementItem';

class Elements extends Component {
  render() {
    return this.props.elements.map((element) => (
      <ElementItem
        key={element.id}
        elements={element}
        delElement={this.props.delElement}
      />
    ));
  }
}

export default Elements;
