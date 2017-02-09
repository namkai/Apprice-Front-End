import React, {Component} from 'react';
import {connect} from 'react-redux';
import Grocery_List from '../Create_List/Grocery_List';
import OneStore from './OneStore';
import {Link} from 'react-router';

class TwoStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
        this.subPrice = this.subPrice.bind(this);
    }
    subPrice(list) {
        console.log(`I'm the list apparently`, list);

        let total = 0;
        list.products.forEach((item)=> {
            total += item.price;
        })
        return total;
    }
    render() {
        // console.log(this.props.data, `i'm the twostore props data`);
        // console.log(this.props.location.lat, `i'm the lat prop on page TWO`);
        // console.log(`ITS ME PAY ATTENTION`);
        if (this.props.data.products.length === 0) {
            return (
                <div>Loading...</div>
            )
        }
        if (this.props.data.products.length === 1) {
            return (<OneStore data={this.props.data}/>)
        }
        console.log(this.props.data, `i'm the twostore props data`);
        // console.log(this.props.location.lat, `i'm the lat prop on page TWO`);
        console.log(`ITS ME PAY ATTENTION`);

        let {lat, lng} = this.props.data.location.coords;
        // console.log(lat, lng, "i'm the location property");
        let url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBqGn70hACTBdMyntztMhqiTbH0w5Uzw38&q=${lat},${lng}`
        let store1 = this.props.data.products[0];
        let store2 = this.props.data.products[1];
        let oneStop = this.props.data.oneStore[0];
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
                            <h5>{this.subPrice(store1)}</h5>
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
                            <h5>{this.subPrice(store2)}</h5>
                        </div>
                        <div className="column column-4">
                            <div className="row">
                                <iframe id="google-map" width="100%" height="300" frameBorder="0" src={url}></iframe>
                            </div>
                            <div className="row">
                                <div className="total">
                                    <h3>Apprice Total: {this.subPrice(store1) + this.subPrice(store2)}
                                    </h3><br/>
                                    <h4>You Save: {this.subPrice(oneStop) - (this.subPrice(store1) + this.subPrice(store2))}vs</h4><br/>
                                    <tr>
                                        <Link onClick={this.oneStopSwitch} to="/OneStore">One Store</Link> <p>option</p>
                                        </tr>
                                </div>
                                <div className="row">
                                    <div className="One-Stop-Option">
                                        <div className="store">
                                            <div className="store-info">
                                                <h2>{oneStop.name}</h2>
                                                <ul>
                                                    <li><strong>Address:</strong> {oneStop.address}</li>
                                                    <li><strong>Contact:</strong> {oneStop.phone_number}</li>
                                                </ul>
                                            </div>
                                            <img className="store-image" src={oneStop.store_image_url} alt=""/>
                                            <h3>{this.subPrice(oneStop)}</h3>
                                        </div>

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
function mapStateToProps(state) {
    console.log(state, `I'm the mapStateToProps state on the TwoStore page`);
    return {data: state.data};

}
export default connect(mapStateToProps)(TwoStore);
