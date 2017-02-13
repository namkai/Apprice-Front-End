import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';
import {Link} from 'react-router'

import ImageList from './Image_List';
import Grocery_List from './Grocery_List';
import SearchBar from './Search_Bar';
import Map from './Map';

import {
    fetchGenericFood,
    fetchSpecificFood,
    sendData,
    getMapData,
    storeData,
    storeLocation,
    numOfStores,
    saveList,
    oneStore,
    twoStore
} from '../../actions/index';

// 📑
class List_Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genericGroceries: [],
            selectedFood: [],
            products: [],
            lat: this.props.data.location.coords.lat,
            lng: this.props.data.location.coords.lat,
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
        this.handleToggle = this.handleToggle.bind(this);
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
        selectedFood.forEach((ele) => {
            if (ele.selectedFood === product.name) {
                throw new Error;
            }
        })

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
        this.setState({selectedCity: city});
    }
    numberOfStores(num) {

        this.props.numOfStores(num);
        this.setState({numOfStores: num});
    }
    getRadius(num) {
        this.setState({radius: num});
    }
    async submitData() {
        let {selectedFood, selectedCity, numOfStores, radius, products} = this.state;
        let {lat, lng} = this.props.data.location.coords;
        let {radius: radius_poop} = this.state;
        let url = `http://appriceapi.herokuapp.com/api/stores/search?lat=${lat}&long=${lng}&radius=${radius_poop}`;
        let stores = await axios.get(url);
        this.setState({lat: lat, lng: lng})
        let data = {
            products: products,
            filteredStores: stores,
            numOfStores: numOfStores,
            radius: radius
        }
        let oneStoreData = {
            products: products,
            filteredStores: stores,
            numOfStores: 1,
            radius: radius
        }
        let twoStoreData = {
            products: products,
            filteredStores: stores,
            numOfStores: 2,
            radius: radius
        }
        this.props.saveList(data)
        let resultData = await sendData(data);
        let oneStore = await sendData(oneStoreData);
        let twoStore = await sendData(twoStoreData)
        this.props.twoStore(twoStore)
        this.props.oneStore(oneStore)
        this.props.storeData(resultData)
        return resultData;

    }
    handleToggle(id) {
        let {products} = this.state;

        let updateList = this.state.products.map(function(product, index) {
            if (product.products.id === id) {
                product = undefined;
            }
            return product;
        })
        let filteredList = updateList.filter((ele) => {
            return ele !== undefined;
        })
        this.setState({products: filteredList})
    }
    render() {
        console.log(this.props, `i'm the props! on the list page`);
        console.log(this.props.data, `i'm the props.data`);
        let {
            genericGroceries,
            selectedFood,
            lat,
            lng,
            radius,
            products
        } = this.state;

        return (
            <div className="container">
                <div className="content-container">
                    <div id="list-container">
                        <h2>Choose your groceries</h2>
                        <SearchBar foodSearch={this.specificFoodSearch}/>
                        <ImageList handleClick={this.handleClick} groceries={genericGroceries}/>
                        <h3 id="shopping-title">Shopping List</h3>
                        <div id="list">
                            <Grocery_List groceries={products} onToggle={this.handleToggle}/>
                        </div>
                    </div>
                    <div id="map-container">
                        <Map numOfStores={this.numberOfStores} selectCity={this.selectCity} stateLat={lat} stateLng={lng} radius={radius} getRadius={this.getRadius}/>
                        <div id="apprice-btn-container">
                            <Link id="Apprice-me" to="/result" onClick={this.submitData}>Apprice Me</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {data: state.data}
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        storeData: storeData,
        numOfStores: numOfStores,
        storeLocation: storeLocation,
        saveList: saveList,
        oneStore: oneStore,
        twoStore: twoStore
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(List_Page)
