import React, {Component} from 'react';
import SearchBarMap from './Search_Bar_Map'
import Range from 'react-range';

const GOOGLE_MAPS_EMBED_API = `AIzaSyBqGn70hACTBdMyntztMhqiTbH0w5Uzw38`

export default class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: '',
            lat: '',
            lon: '',
            term: '',
            numOfStores: 3,
            button1: 'store-button-inactive',
            button2: 'store-button-active',
            button3: 'store-button-inactive'

        }
        this.getLocation = this.getLocation.bind(this);
        this.buttonOne = this.buttonOne.bind(this);
        this.buttonTwo = this.buttonTwo.bind(this);
        this.buttonThree = this.buttonThree.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getLocation();
    }
    async getLocation() {
        let {location} = this.state;
        await navigator.geolocation.getCurrentPosition((position) => {
            console.log(`I'm the position.`, position);
            this.setState({location: position, lat: position.coords.latitude, lon: position.coords.longitude})
        })
    }
    buttonOne() {
        this.props.numOfStores(1);
        this.setState({button1: 'store-button-active', button2: 'store-button-inactive', button3: 'store-button-inactive'})
        // console.log(`I was clicked!`);
    }
    buttonTwo() {
        this.props.numOfStores(2);
        this.setState({button1: 'store-button-inactive', button2: 'store-button-active', button3: 'store-button-inactive'})
        // console.log(`I was clicked!`);
    }
    buttonThree() {
        this.props.numOfStores(3);
        this.setState({button1: 'store-button-inactive', button2: 'store-button-inactive', button3: 'store-button-active'})
        // console.log(`I was clicked!`);
    }
    handleChange(event) {
        let {value} = event.target;
        let {getRadius} = this.props;
        getRadius(value)
    }
    render() {
        let {lat, lon, button1, button2, button3} = this.state;
        let {selectCity, selectedCity, radius} = this.props;
        console.log(this.props.selectedCity);
        console.log(lat);
        let yourLocation = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBqGn70hACTBdMyntztMhqiTbH0w5Uzw38&q=${lat},${lon}`
        let selectedLocation = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBqGn70hACTBdMyntztMhqiTbH0w5Uzw38
    &q=${selectedCity}`
        if (this.props.selectedCity === '') {
            return (
                <div>
                    <h3>Choose your search preferences</h3><br/>
                    <h4>Whats your location?</h4>
                    <SearchBarMap selectCity={this.props.selectCity}/><br/>
                    <h4>How many stores will you visit?</h4>
                    <button className={button1} onClick={this.buttonOne}>One</button>
                    <button className={button2} onClick={this.buttonTwo}>Two</button>
                    <button className={button3} onClick={this.buttonThree}>Three</button><br/>
                    <h4>What's your search radius?</h4>
                    <Range id="store-radius" onChange={this.handleChange} type='range' value={radius} min={1} max={10}/><span id="display-radius">{radius} mile</span><br/>
                    <iframe id="google-map" width="300" height="300" frameBorder="0" src={yourLocation} allowFullScreen></iframe>
                </div>
            )
        } else {
            return (
                <div>
                    <h3>Choose your search preferences</h3><br/>
                    <h4>Whats your location?</h4>
                    <SearchBarMap selectCity={this.props.selectCity}/><br/>
                    <h4>How many stores will you visit?</h4>
                    <button className={button1} onClick={this.buttonOne}>One</button>
                    <button className={button2} onClick={this.buttonTwo}>Two</button>
                    <button className={button3} onClick={this.buttonThree}>Three</button><br/>
                    <h4>What's your search radius?</h4>
                    <Range id="store-radius" onChange={this.handleChange} type='range' value={radius} min={1} max={10}/><span>{radius} mile</span><br/>
                    <iframe id="google-map" width="350" height="300" frameBorder="0" src={selectedLocation} allowFullScreen></iframe>
                </div>
            )
        }
    }

}
