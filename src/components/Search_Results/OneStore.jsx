import React, {Component} from 'react';
import Grocery_List from '../Create_List/Grocery_List';
import {connect} from 'react-redux';
import ReactMap from '../Create_List/ReactMap';
import {bindActionCreators} from 'redux';
import {numOfStores} from '../../actions/index';
class OneStore extends Component {
    constructor(props) {
        super(props);

        this.subPrice = this.subPrice.bind(this);
    }
    subPrice(list) {
        let total = 0;
        console.log(`i'm the list in the subPrice func`, list);
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
        let twoStop = this.props.data.twoStore;
        let store1Price = this.subPrice(store1)
        console.log(`i'm the twoStop[0]`, twoStop[0]);
        let store2FirstStop = this.subPrice(twoStop[0]);
        let store2SecondStop = this.subPrice(twoStop[1]);
        let store2Total = store2FirstStop + store2SecondStop;
        console.log(`i'm the twoStop`, twoStop);
        console.log(`i'm the store2Price`, store2Total);
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
                                            <li><strong>Address: </strong>{store1.address}</li><br/>
                                            <li><strong>Contact: </strong>{store1.phone_number}</li>
                                        </ul>
                                    </div>
                                    <img className="store-image" src={store1.store_image_url} alt=""/>
                                </div>
                            </div>
                            <hr className="list-hr"/>
                            <Grocery_List groceries={store1.products}/>
                            <br/>
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
                                    <h4>You Pay ${store1Price - store2Total} more than</h4><br/>
                                    <tr>

                                        <p>option</p>
                                    </tr>
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
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        numOfStores: numOfStores
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(OneStore);
