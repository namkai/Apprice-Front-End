import React, { Component } from 'react';
import Grocery_List from '../Create_List/Grocery_List';
import { connect } from 'react-redux';
import ReactMap from '../Create_List/ReactMap';
import { bindActionCreators } from 'redux';
import { numOfStores } from '../../actions/index';
class OneStore extends Component {
  constructor(props) {
    super(props);

    this.subPrice = this.subPrice.bind(this);
  }
  subPrice(list) {
    let total = 0;
    list.products.forEach((item) => {
      total += item.price;
    });
    total = (Math.round(total * Math.pow(10, 2)) / Math.pow(10, 2));
    return total;
  }
  render() {
    const { lat, lng } = this.props.data.location.coords;
    const url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBqGn70hACTBdMyntztMhqiTbH0w5Uzw38&q=${lat},${lng}`;
    if (this.props.data.oneStore.length === 0) {
      return (
        <div className="loading">Loading...</div>
      );
    }
    const store1 = this.props.data.oneStore[0];
    const twoStop = this.props.data.twoStore;
    const store1Price = this.subPrice(store1);
    const store2FirstStop = this.subPrice(twoStop[0]);
    const store2SecondStop = this.subPrice(twoStop[1]);
    const store2Total = store2FirstStop + store2SecondStop;
    return (
      <div className="container">
        <div className="row">
          <div className="column column-12">
            <div className="column column-4" id="OneStore-Picture" />
            <div className="column column-4">
              <div className="row">
                <div className="store">
                  <div className="store-info">
                    <h2>{store1.name}</h2>
                    <ul>
                      <li><strong>Address: </strong>{store1.address}</li><br />
                      <li><strong>Contact: </strong>{store1.phone_number}</li>
                    </ul>
                  </div>
                  <img className="store-image" src={store1.store_image_url} alt="" />
                </div>
              </div>
              <hr className="list-hr" />
              <Grocery_List groceries={store1.products} />
              <br />
              <h5>Subtotal: ${this.subPrice(store1)}</h5>
            </div>
            <div className="column column-4">
              <div className="row">
                <ReactMap />
              </div>
              <div className="row">
                <div className="total">
                  <h3>Apprice Total: ${this.subPrice(store1)}
                  </h3><br />
                  <h4>You Pay ${store1Price - store2Total} more than</h4><br />
                  <tr>
                    <p>option</p>
                  </tr>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(({ data }) => ({ data }), { numOfStores })(OneStore);
