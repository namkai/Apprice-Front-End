import React, {Component} from 'react';
import List from './List';

export default class Grocery_List extends Component {
    constructor(props) {
        super(props);

        this.generateGroceryList = this.generateGroceryList.bind(this);
        // this.props.specificFoodSearch()
    }
    generateGroceryList() {
        let {groceries} = this.props;

        console.log(`i'm the groceries`,groceries);
        // this.setState({selectedFood: groceries})
        return groceries.map((food) => {
            let {selectedFood, id} = food
            console.log(`I'm the name`, selectedFood);
            return (<List id={id} name={selectedFood}/>)

        })
    }
    render() {
        // let {selectedFood} = this.state;
        // let list = selectedFood.map((ele) => {
        //     console.log(`I'm the element`,ele);
        //     let {name} = ele;
        //     return (
        //          <List name={name}/>
        //     )
        // })
        return (
            <div id="list" >
                <ul>
                    {this.generateGroceryList()}
                </ul>
             </div>
        )
    }
}
