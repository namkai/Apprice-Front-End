import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';
import {Link} from 'react-router'
// import {storeData} from '../../actions/index';

import ImageList from './Image_List';
import Grocery_List from './Grocery_List';
import SearchBar from './Search_Bar';
import Map from './Map';

import {fetchGenericFood, fetchSpecificFood, sendData, getMapData, storeData} from '../../actions/index';

class List_Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genericGroceries: [],
            selectedFood: [],
            products: [],
            selectedCity: '',
            numOfStores: 2,
            radius: 5
        }
        this.topFoodSearch = this.topFoodSearch.bind(this);
        this.specificFoodSearch = this.specificFoodSearch.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.selectCity = this.selectCity.bind(this);
        this.numberOfStores = this.numberOfStores.bind(this);
        this.submitData = this.submitData.bind(this);
        this.getRadius = this.getRadius.bind(this);
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

    handleClick(product, food) {
        let {selectedFood, products} = this.state;

        this.setState({
            selectedFood: [
                ...selectedFood, {
                    selectedFood: food
                }
            ],
            products: [
                ...products, {
                    products: product
                }
            ]
        })
    }
    selectCity(city) {
        this.setState({selectedCity: city})
    }
    numberOfStores(num) {
        this.setState({numOfStores: num})
    }
    getRadius(num) {
        this.setState({radius: num})
    }
    async submitData() {
        let {selectedFood, selectedCity, numOfStores, radius, products} = this.state;
        let city = await getMapData(selectedCity)
        let {lat, lng} = await city.results[0].geometry.location;
        let {radius: radius_poop} = this.state;
        let url = `http://appriceapi.herokuapp.com/api/stores/search?lat=${lat}&long=${lng}&radius=${radius_poop}`;
        let stores = await axios.get(url);

        let data = {
            products: products,
            filteredStores: stores,
            numOfStores: numOfStores,
            radius: radius
        }
        let resultData = await sendData(data)
        console.log(this.props.storeData);
        this.props.storeData(resultData)
        console.log(this.props, `I'm the store data`);
        console.log(`I"M the result data`, resultData);
        return resultData;

    }
    render() {
        let {genericGroceries, selectedFood, selectedCity, radius} = this.state;
        console.log(this.props, `I'm the list page component props`);
        return (
            <div>
                <div id="list-container">
                    <h2>Choose your groceries</h2>
                    <SearchBar foodSearch={this.specificFoodSearch}/>
                    <ImageList handleClick={this.handleClick} groceries={genericGroceries}/>
                    <Grocery_List groceries={selectedFood}/>
                </div>
                <div id="map-container">
                    <Map numOfStores={this.numberOfStores} selectCity={this.selectCity} selectedCity={selectedCity} radius={radius} getRadius={this.getRadius}/>
                    <Link id="Apprice-me" to="/result" onClick={this.submitData}>Apprice Me</Link>
                </div>

            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log(state, `I'm the map State to PROPS state`);
    return {data: state.data}
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
    return  bindActionCreators({ storeData: storeData }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(List_Page)
