import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grocery_List from '../Create_List/Grocery_List';
import OneStore from './OneStore';
import TwoStore from './TwoStore';
import ReactMap from '../Create_List/ReactMap';

class ThreeStore extends Component {
  subPrice(list) {
    let total = 0;
    list.products.forEach((item) => {
      total += item.price;
    });
    total = (Math.round(total * Math.pow(10, 2)) / Math.pow(10, 2));
    return total;
  }
  render() {
    if (this.props.data.products.length === 0 && this.props.data.oneStore.length === 0) {
      return (
        <div className="loading">Loading...</div>
      );
    } else if (this.props.data.oneStore.length === 1 && this.props.data.products.length === 0) {
      return (<OneStore data={this.props.data} />);
    }
    if (this.props.data.products.length === 2) {
      return (<TwoStore />);
    }

    const store1 = this.props.data.products[0];
    const store2 = this.props.data.products[1];
    const store3 = this.props.data.products[2];
    return (
      <div className="row">
        <div className="column column-12">
          <div className="column column-8">
            <div className="row">
              <div className="store">
                <div className="store-info">
                  <h2>{store1.name}</h2>
                  <ul>
                    <li>
                      <strong>Address:</strong>
                      {store1.address}</li>
                    <li>
                      <strong>Contact:</strong>
                      {store1.phone_number}</li>
                  </ul>
                </div>
                <img className="store-image" src={store1.store_image_url} alt="" />
              </div>
            </div>
            <div className="row item-list">
              <Grocery_List groceries={store1.products} />
              <h5>Subtotal: ${this.subPrice(store1)}</h5>
            </div>
            <div className="row">
              <div className="store">
                <div className="store-info">
                  <h2>{store2.name}</h2>
                  <ul>
                    <li>
                      <strong>Address:</strong>
                      {store2.address}</li>
                    <li>
                      <strong>Contact:</strong>
                      {store2.phone_number}</li>
                  </ul>
                </div>
                <img className="store-image" src={store2.store_image_url} alt="" />
              </div>
              <div className="row item-list">
                <Grocery_List groceries={store2.products} />
                <h5>Subtotal: ${this.subPrice(store2)}</h5>
              </div>
            </div>
            <div className="row">
              <div className="store">
                <div className="store-info">
                  <h2>{store3.name}</h2>
                  <ul>
                    <li>
                      <strong>Address:</strong>
                      {store3.address}</li>
                    <li>
                      <strong>Contact:</strong>
                      {store3.phone_number}</li>
                  </ul>
                </div>
                <img className="store-image" src={store3.store_image_url} alt="" />
              </div>
              <div className="row item-list">
                <Grocery_List groceries={store3.products} />
                <h5>Subtotal: ${this.subPrice(store3)}</h5>
              </div>
              <div className="column column-4">
                <div className="row">
                  {/* <iframe id="google-map" width="100%" height="300" frameBorder="0" src={url} allowFullScreen></iframe> */}
                  <ReactMap />
                </div>
                <div className="row">
                  <div className="total">
                    <h3>Apprice Total: ${this.subPrice(store1)}
                    </h3><br />
                    <h4>You Save: vs</h4><br />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(({ data }) => ({ data }))(ThreeStore);
