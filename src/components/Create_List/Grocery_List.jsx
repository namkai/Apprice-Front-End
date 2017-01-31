import React, {Component} from 'react';
import List from './List';

export default class Grocery_List extends Component {
    constructor(props) {
        super(props);
        this.generateGroceryList = this.generateGroceryList.bind(this);
    }
    generateGroceryList() {
        let {groceries} = this.props;

        console.log(groceries);
        return groceries.map((food) => {
            let {product_image_url, name} = food
            return (<List name={name}/>)

        })
    }
    render() {
        return (
            <div id="list" >
                <ul>
                    {this.generateGroceryList()}
                </ul>
             </div>
        )
    }
}
