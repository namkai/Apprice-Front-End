import React, {Component} from 'react';
import Grocery_List from '../Create_List/Grocery_List';
import OneStore from './OneStore';
import {Link} from 'react-router';

export default class TwoStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    oneStopSwitch() {

    }
    render() {
        console.log(this.props.data, `i'm the twostore props data`);
        if (this.props.data.products.length === 0) {
            return (
                <div>Loading...</div>
            )
        }
        if (this.props.data.products.length === 1) {
            return (<OneStore data={this.props.data}/>)
        }
        let {latitude, longitude} = this.props.data.location.coords;
        let url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBqGn70hACTBdMyntztMhqiTbH0w5Uzw38&q=${latitude},${longitude}`
        let store1 = this.props.data.products[0]
        let store2 = this.props.data.products[1]
        return (
            // <div className="container">
                <div className="row">
                    <div className="column column-12">
                        <div className="column column-4">
                            <div className="row">
                                <div className="store">
                                    <div className="store-info">
                                        <h2>{store1.name}</h2>
                                        <ul>
                                            <li><strong>Address:</strong> {store1.address}</li>
                                            <li><strong>Contact:</strong> {store1.phone_number}</li>
                                        </ul>
                                    </div>
                                    <img className="store-image" src={store1.store_image_url} alt=""/>
                                </div>
                            </div>
                            <hr className="list-hr"/>
                            <Grocery_List groceries={store1.products}/>
                        </div>
                        <div className="column column-4">
                            <div className="row">
                                <div className="store">
                                    <div className="store-info">
                                        <h2>{store2.name}</h2>
                                        <ul>
                                            <li><strong>Address:</strong> {store2.address}</li>
                                            <li><strong>Contact:</strong> {store2.phone_number}</li>
                                        </ul>
                                    </div>
                                    <img className="store-image" src={store2.store_image_url} alt=""/>
                                </div>
                            </div>
                            <hr className="list-hr"/>
                            <Grocery_List groceries={store2.products}/>
                        </div>
                        <div className="column column-4">
                            <div className="row">
                                <iframe id="google-map" width="100%" height="300" frameBorder="0" src={url} allowFullScreen></iframe>
                            </div>
                            <div className="row">
                                <div className="total">
                                    <h3>Apprice Total:
                                    </h3><br/>
                                    <h4>You Save: vs</h4><br/>
                                    <tr>
                                        <Link onClick={this.oneStopSwitch} to="/OneStore">One Store</Link> <p>option</p>
                                        </tr>
                                </div>
                                <div className="row">
                                    <div className="One-Stop-Option">
                                        <h3>One stop option</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            // </div>
        )
    }
}
