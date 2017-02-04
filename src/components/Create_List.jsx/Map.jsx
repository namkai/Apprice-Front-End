
import React, {Component} from 'react';

const GOOGLE_MAPS_EMBED_API = `AIzaSyBqGn70hACTBdMyntztMhqiTbH0w5Uzw38`

export default class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: '',
            lat: '',
            lon: '',
            term: ''

        }
        this.getLocation = this.getLocation.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.onInputChange = this.onInputChange.bind(this);
        // this.getLatLon = this.getLatLon.bind(this);
        this.getLocation();
        // this.getLatLon();
    }
    async getLocation() {
        let {location} = this.state;
        await navigator.geolocation.getCurrentPosition((position) => {
            console.log(`I'm the position.`, position);
            this.setState({location: position, lat: position.coords.latitude, lon: position.coords.longitude})
        })
        // let {latitude, longitude} = mylocation.coords;
        // console.log(latitude);
        // this.setState({
        //     location: mylocation
        // })
    }

    render() {
        let {lat, lon} = this.state
        console.log(this.props.selectedCity);
        console.log(lat);
        let link = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBqGn70hACTBdMyntztMhqiTbH0w5Uzw38&q=${lat},${lon}`
        return (
            <div>
                    <iframe id="google-map" width="300" height="300" frameBorder="0" src={link} allowFullScreen></iframe>
            </div>
        )

    }
}
