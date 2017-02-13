import React, {Component} from 'react';
import Grocery_List from '../Create_List/Grocery_List';
import {connect} from 'react-redux';
import ReactMap from '../Create_List/ReactMap';
class OneStore extends Component {
    constructor(props) {
        super(props);

        this.subPrice = this.subPrice.bind(this);
    }
    subPrice(list) {
        let total = 0;
        list.products.forEach((item) => {
            total += item.price;
        })
        total = (Math.round(total * Math.pow(10, 2)) / Math.pow(10, 2))
        return total;
    }
    render() {
        let {lat, lng} = this.props.data.location.coords;
        let url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBqGn70hACTBdMyntztMhqiTbH0w5Uzw38&q=${lat},${lng}`
        if (this.props.data.oneStore.length === 0) {
            return (
                <div className="loading">Loading...</div>
            )
        }
        let store1 = this.props.data.oneStore[0];
        return (
            <div className="container">
                <div className="row">
                    <div className="column column-12">
                        <div className="column column-4" id="OneStore-Picture"></div>
                        <div className="column column-4">
                            <div className="row">
                                <div className="store">
                                    <div className="store-info">
                                        <h2>{store1.name}</h2>
                                        <ul>
                                            <li>{store1.address}</li>
                                            <li>{store1.phone_number}</li>
                                        </ul>
                                    </div>
                                    <img className="store-image" src={store1.store_image_url} alt=""/>
                                </div>
                            </div>
                            <hr className="list-hr"/>
                            <Grocery_List groceries={store1.products}/>
                            <h5>Subtotal: ${this.subPrice(store1)}</h5>
                        </div>
                        <div className="column column-4">
                            <div className="row">
                                {/* <iframe id="google-map" width="100%" height="300" frameBorder="0" src={url} allowFullScreen></iframe> */}
                                <ReactMap/>
                            </div>
                            <div className="row">
                                <div className="total">
                                    <h3>Apprice Total: ${this.subPrice(store1)}
                                    </h3><br/>
                                    <h4>You Save: vs</h4><br/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {data: state.data};

}
export default connect(mapStateToProps)(OneStore);
