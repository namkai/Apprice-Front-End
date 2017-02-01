import React, {Component} from 'react';
import ImageList from './Image_List';
import Grocery_List from './Grocery_List';
import SearchBar from './Search_Bar';
import {fetchGenericFood, fetchSpecificFood} from '../../actions/index';

export default class List_Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genericGroceries: [],
            selectedFood: ['Strawberries']
        }
        this.topFoodSearch = this.topFoodSearch.bind(this);
        this.specificFoodSearch = this.specificFoodSearch.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.topFoodSearch();
        // this.generateImageList = this.generateImageList.bind(this);
    }
    async topFoodSearch() {
        let {groceries} = this.state;
        let food = await fetchGenericFood();
        this.setState({genericGroceries: food});
    }
    async specificFoodSearch(term) {
        console.log(term);
        let {selectedFood} = this.state;
        let food = await fetchSpecificFood(term);
        console.log(`I'm the food`, food);
        this.setState({selectedFood: food});
        console.log(`I'm the selectedFood`, this.state.selectedFood);
    }

    handleClick(food) {
        let {selectedFood} = this.state;
        console.log(names);
        this.setState({
            selectedFood: [
                ...names, {
                    name: food
                }
            ]
        })
    }
    // generateImageList(food) {
    //     console.log(food);
    //     food = [food]
    //     return food.map((food) => {
    //         // console.log(this.props);
    //         let {image, name} = food
    //         return (
    //                 <Image handleClick={this.props.handleClick} image={image} name={name}/>
    //         )
    //
    //     })
    // }
    render() {
        let {genericGroceries, selectedFood} = this.state;
        console.log(`I'm the generic `,genericGroceries);
        return (
            <div>

                <ImageList handleClick={this.handleClick} groceries={genericGroceries}/>
                <h2>Lets pickout some groceries.</h2>
                <div id="list-container">
                    <SearchBar foodSearch={this.specificFoodSearch}/>
                    <Grocery_List groceries={selectedFood}/>
                </div>
            </div>
        )
    }
}
