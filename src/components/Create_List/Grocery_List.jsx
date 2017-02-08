import React, {Component} from 'react';
import List from './List';
import uuid from 'node-uuid';

// 📜🍋
export default class Grocery_List extends Component {
    constructor(props) {
        super(props);

        this.generateGroceryList = this.generateGroceryList.bind(this);
    }
    generateGroceryList() {
        let {groceries} = this.props;

        return groceries.map((food) => {
            let {name, id} = food.products;
            let key = uuid();

            return (<List key={key} id={id} {...food} name={name} onToggle={this.props.onToggle}/>)

        })
    }
    render() {
        return (
            <div>
                <h3 id="shopping-title" >Shopping List</h3>
            <div id="list" >
                <ul id="list-ul">
                    {this.generateGroceryList()}
                </ul>
             </div>
             </div>
        )
    }
}
