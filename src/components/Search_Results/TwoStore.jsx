import React, {Component} from 'react';
import Grocery_List from '../Create_List/Grocery_List';
import OneStore from './OneStore';
export default class TwoStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    // componentWillMount() {
    //     this.setState({data: this.props.data.products})
    // }
    render() {
        console.log(this.props.data, `i'm the twostore props data`);
        if (this.props.data.products.length === 0) {
            return (
                <div>Loading...</div>
            )
        }
        if(this.props.data.products.length === 1) {
            return (
                <OneStore data={this.props.data}/>
            )
        }
        let {latitude, longitude} = this.props.data.location.coords;
        let url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBqGn70hACTBdMyntztMhqiTbH0w5Uzw38&q=${latitude},${longitude}`
        return (
            <div className="container">
                <div className="row">
                    <div className="column column-12">
                        <div className="column column-4">
                            <h2>{this.props.data.products[0].name}</h2>
                            <hr className="list-hr"/>
                            <Grocery_List groceries={this.props.data.products[0].products}/>
                        </div>
                        <div className="column column-4">
                            <h2>{this.props.data.products[1].name}</h2>
                            <hr className="list-hr"/>
                            <Grocery_List groceries={this.props.data.products[1].products}/>
                        </div>
                        <div className="column column-4">
                            <div className="row">
                                <iframe id="google-map" width="350" height="300" frameBorder="0" src={url} allowFullScreen></iframe>
                            </div>
                            <div className="row">
                                <div className="total">
                                    <h3>Apprice Total: </h3><br/>
                                    <h4>You Save:  vs</h4><br/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
