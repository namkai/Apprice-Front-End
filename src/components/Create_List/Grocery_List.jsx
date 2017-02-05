import React, {Component} from 'react';
import List from './List';

export default class Grocery_List extends Component {
    constructor(props) {
        super(props);

        this.generateGroceryList = this.generateGroceryList.bind(this);
    }
    generateGroceryList() {
        let {groceries} = this.props;

        return groceries.map((food) => {
            let {selectedFood, id} = food
            return (<List id={id} name={selectedFood}/>)

        })
    }
    render() {
        return (
            <div>
                <h3 id="shopping-title" >Shopping List</h3>
            <div id="list" >
                <ul>
                    {this.generateGroceryList()}
                </ul>
             </div>
             </div>
        )
    }
}
