import React, { Component } from 'react';
import { fetchFood } from '../../actions/index';
import Image from './Image';

// 📟
const ImageList = ({ groceries }) => {
  const food = groceries.map(ele => (
    <Image key={ele.id} handleClick={this.props.handleClick} {...ele} />));

  return (
    <div id="imageContainer">
      {food}
    </div>
  );
};
export default ImageList;
