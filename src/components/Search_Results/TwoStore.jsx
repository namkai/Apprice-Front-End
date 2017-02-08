import React, {Component} from 'react';
import Grocery_List from '../Create_List/Grocery_List';

export default class TwoStore extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props, `i'm the twostore props`);
        return (
            <div className="container">
            <div className="row">
                <div className="column column-4">
                    <h3>SafeWay</h3>
                </div>
                <div className="column column-4">
                    <h3>Whole Foods</h3>

                </div>
                <div className="column column-4">Test</div>
            </div>
        </div>
        )
    }
}
