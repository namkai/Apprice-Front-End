import React, {Component} from 'react';
import Grocery_List from '../Create_List/Grocery_List';

export default class OneStore extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {latitude, longitude} = this.props.data.location.coords;
        let url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBqGn70hACTBdMyntztMhqiTbH0w5Uzw38&q=${latitude},${longitude}`
        return (
            <div className="container">
                <div className="row">
                    <div className="column column-12">
                        <div className="column column-4" id="OneStore-Picture">
                            <h2>I'm gonna be a picture Yo</h2>
                        </div>
                        <div className="column column-4">
                            <h2>{this.props.data.products[0].name}</h2>
                            <hr className="list-hr"/>
                            <Grocery_List groceries={this.props.data.products[0].products}/>
                        </div>
                        <div className="column column-4">
                            <div className="row">
                                <iframe id="google-map" width="350" height="300" frameBorder="0" src={url} allowFullScreen></iframe>
                            </div>
                            <div className="row">
                                <div className="total">
                                    <h3>Apprice Total:
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
