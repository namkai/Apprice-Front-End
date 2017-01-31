import React, {Component} from 'react';
import ImageList from './Image_List';
import Grocery_List from './Grocery_List';
import SearchBar from './Search_Bar';

let seededNames = [];
let seededGroceries = [];
// let seededList = [];
let seedGroceries = () => {
    for (var i = 0; i < 20; i++) {
        seededGroceries.push({image: 'http://i.imgur.com/NMLpcKj.jpg', name: 'Strawberries'})
    }
}

let seedList = () => new Promise(function(resolve, reject) {
    for(var i = 0; i < 5; i++) {
        seededNames.push({name: 'Strawberries'})
    }
});

seedGroceries();
seedList();
// seedList();
export default class List_Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groceries: seededGroceries,
            names: seededNames
        }
        this.foodSearch = this.foodSearch.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    foodSearch(term) {
        let {names} = this.state;
            this.setState({
                names: [...names, {name: term}]
            });
            console.log(names);
    }
    handleClick(food) {
        let {names} = this.state;
        console.log(names);
        this.setState({
            names:[...names, {name: food}]
        })
    }
    render() {
        let {groceries, names} = this.state;
        return (
            <div>
                {/* <div>I'm the list page</div> */}
                <ImageList handleClick={this.handleClick} groceries={groceries}/>
                <div id="list-container">
                <h2>Lets pickout some groceries.</h2>
                <SearchBar foodSearch={this.foodSearch}/>
                <Grocery_List groceries={names}/>
            </div>
            </div>
        )
    }
}
