import React, {Component} from 'react';
import ImageList from './Image_List';
import Grocery_List from './Grocery_List';
import SearchBar from './Search_Bar';
import Map from './Map';
import {fetchGenericFood, fetchSpecificFood} from '../../actions/index';

export default class List_Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genericGroceries: [],
            selectedFood: [],
            selectedCity: '',
            numOfStores: 2
        }
        this.topFoodSearch = this.topFoodSearch.bind(this);
        this.specificFoodSearch = this.specificFoodSearch.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.selectCity = this.selectCity.bind(this);
        this.numberOfStores = this.numberOfStores.bind(this);
        this.topFoodSearch();
    }
    async topFoodSearch() {
        let {groceries} = this.state;
        let food = await fetchGenericFood();
        this.setState({genericGroceries: food});
    }
    async specificFoodSearch(term) {
        let {selectedFood} = this.state;
        let food = await fetchSpecificFood(term);
        this.setState({genericGroceries: food});
    }

    handleClick(food) {
        let {selectedFood} = this.state;

        this.setState({
            selectedFood: [
                ...selectedFood, {
                    selectedFood: food
                }
            ]
        })
    }
    selectCity(city) {
        this.setState({selectedCity: city})
    }
    numberOfStores(num) {
        this.setState({numOfStores: num})
        console.log(this.state.numOfStores);
    }
    render() {
        let {genericGroceries, selectedFood, selectedCity} = this.state;
        // console.log(`I'm the number of stores`,this.state.numberOfStores);
        // console.log('Im the selected food', selectedFood);
        // console.log(`I'm the generic `,genericGroceries);
        return (
            <div>
                <div id="list-container">
                    <h2>Choose your groceries</h2>
                    <SearchBar foodSearch={this.specificFoodSearch}/>
                    <ImageList handleClick={this.handleClick} groceries={genericGroceries}/>
                    <Grocery_List groceries={selectedFood}/>
                </div>
                <div id="map-container">
                    <Map numOfStores={this.numberOfStores} selectCity={this.selectCity} selectedCity={selectedCity}/>
                </div>

            </div>
        )
    }
}
