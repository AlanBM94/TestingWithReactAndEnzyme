import React, { Component } from "react";
import PropTypes from "prop-types";

class ListItem extends Component {
  render() {
    const { title, description } = this.props;

    if (!title) {
      return null;
    }

    return (
      <div data-test="ListItemComponent">
        <h2 data-test="ComponentTitle">{title}</h2>
        <div data-test="ComponentDescription">{description}</div>
      </div>
    );
  }
}

ListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ListItem;
