import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';

import {
	fetchGenericFood,
	fetchSpecificFood,
	numOfStores,
	oneStore,
	saveList,
	sendData,
	storeData,
	storeLocation,
	twoStore,
} from '../../actions/index';
import Grocery_List from './Grocery_List';

import ImageList from './Image_List';
import Map from './Map';
import SearchBar from './Search_Bar';

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
      radius: 5,
    };
    this.topFoodSearch = this.topFoodSearch.bind(this);
    this.specificFoodSearch = this.specificFoodSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.selectCity = this.selectCity.bind(this);
    this.numberOfStores = this.numberOfStores.bind(this);
    this.submitData = this.submitData.bind(this);
    this.getRadius = this.getRadius.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentWillMount() {
    this.topFoodSearch();
  }

  async topFoodSearch() {
    const food = await fetchGenericFood();
    this.setState({ genericGroceries: food });
  }

  async specificFoodSearch(term) {
    const food = await fetchSpecificFood(term);
    this.setState({ genericGroceries: food });
  }

  handleClick(product, food) {
    const { selectedFood, products } = this.state;
    selectedFood.forEach((ele) => {
      if (ele.selectedFood === product.name) {
        throw new Error();
      }
    });

    this.setState({
      selectedFood: [
        ...selectedFood, {
          selectedFood: food,
        },
      ],
      products: [
        ...products, {
          products: product,
        },
      ],
    });
  }

  selectCity(city) {
    this.setState({ selectedCity: city });
  }

  numberOfStores(num) {
    this.props.numOfStores(num);
    this.setState({ numOfStores: num });
  }

  getRadius(num) {
    this.setState({ radius: num });
  }

  async submitData() {
    const { selectedFood, selectedCity, numOfStores, radius, products } = this.state;
    const { lat, lng } = this.props.data.location.coords;
    const { radius: radius_poop } = this.state;
    const url = `http://appriceapi.herokuapp.com/api/stores/search?lat=${lat}&long=${lng}&radius=${radius_poop}`;
    const stores = await axios.get(url);
    this.setState({ lat, lng });
    const data = {
      products,
      filteredStores: stores,
      numOfStores,
      radius,
    };
    const oneStoreData = {
      products,
      filteredStores: stores,
      numOfStores: 1,
      radius,
    };
    const twoStoreData = {
      products,
      filteredStores: stores,
      numOfStores: 2,
      radius,
    };
    this.props.saveList(data);
    const resultData = await sendData(data);
    const oneStore = await sendData(oneStoreData);
    const twoStore = await sendData(twoStoreData);
    this.props.twoStore(twoStore);
    this.props.oneStore(oneStore);
    this.props.storeData(resultData);
    return resultData;
  }

  handleToggle(id) {
    const updateList = this.state.products.map((product) => {
      if (product.products.id === id) {
        product = undefined;
      }
      return product;
    });
    const filteredList = updateList.filter(ele => ele !== undefined);
    this.setState({ products: filteredList });
  }

  render() {
    const { genericGroceries, lat, lng, radius, products } = this.state;

    return (
      <div className="container">
        <div className="content-container">
          <div id="list-container">
            <h2>Choose your groceries</h2>
            <SearchBar foodSearch={this.specificFoodSearch} />
            <ImageList handleClick={this.handleClick} groceries={genericGroceries} />
            <h3 id="shopping-title">Shopping List</h3>
            <div id="list">
              <Grocery_List groceries={products} onToggle={this.handleToggle} />
            </div>
          </div>
          <div id="map-container">
            <Map
              numOfStores={this.numberOfStores} selectCity={this.selectCity} stateLat={lat} stateLng={lng}
              radius={radius} getRadius={this.getRadius}
            />
            <div id="apprice-btn-container">
              <Link id="Apprice-me" to="/result" onClick={this.submitData}>Apprice Me</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    storeData,
    numOfStores,
    storeLocation,
    saveList,
    oneStore,
    twoStore,
  }, dispatch);
}

export default connect(({ data }) => ({ data }), mapDispatchToProps)(List_Page);
