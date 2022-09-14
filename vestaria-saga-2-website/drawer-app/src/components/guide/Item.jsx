import React from 'react';

class Item extends React.Component {
    render() {
      const itemclass = `${this.props.itemtype}-weapon-text`;
      return (
        <span class={itemclass}>
          {this.props.children}
        </span>
      );
  }
}

export default Item;