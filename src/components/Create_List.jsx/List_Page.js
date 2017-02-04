import React, {Component} from 'react';
import ImageList from './Image_List';
import Grocery_List from './Grocery_List';
import SearchBar from './Search_Bar';
import SearchBarMap from './Search_Bar_Map';
import Map from './Map';
import {fetchGenericFood, fetchSpecificFood} from '../../actions/index';


export default class List_Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genericGroceries: [],
            selectedFood: [],
            selectedCity: ''
        }
        this.topFoodSearch = this.topFoodSearch.bind(this);
        this.specificFoodSearch = this.specificFoodSearch.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.selectCity = this.selectCity.bind(this);
        this.topFoodSearch();
        // this.generateImageList = this.generateImageList.bind(this);
    }
    async topFoodSearch() {
        let {groceries} = this.state;
        let food = await fetchGenericFood();
        this.setState({genericGroceries: food});
    }
    async specificFoodSearch(term) {
        let {selectedFood} = this.state;
        let food = await fetchSpecificFood(term);
        // console.log('Im the new selected food',food);
        this.setState({genericGroceries: food});
    }

    handleClick(food) {
        let {selectedFood} = this.state;
        // console.log(`I'm the `, selectedFood);
        // console.log(`I'm the food`, food);
        // console.log(`I'm the this`,this);
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
    render() {
        let {genericGroceries, selectedFood, selectedCity} = this.state;
        console.log('Im the selected food', selectedFood);
        // console.log(`I'm the generic `,genericGroceries);
        return (
            <div>
                <h2>Lets pickout some groceries.</h2>
                <SearchBarMap selectCity={this.selectCity}/>
                <div id="list-container">

                    <Map selectedCity={selectedCity}/>
                    <div id="search-and-list">
                        <SearchBar foodSearch={this.specificFoodSearch}/>
                        <Grocery_List groceries={selectedFood}/>
                    </div>
                </div>
                <ImageList handleClick={this.handleClick} groceries={genericGroceries}/>
            </div>
        )
    }
}
