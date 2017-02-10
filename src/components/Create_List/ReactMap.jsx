import React, {Component} from 'react';
import {connect} from 'react-redux';


class ReactMap extends Component {
    constructor(props) {
        super(props);

        this.initMap = this.initMap.bind(this);
    }
    initMap() {
        let {lat, lng} = this.props.data.location.coords;
        let store1 = this.props.data.products[0];
        let store2 = this.props.data.products[1];

        let userLocation = {
            lat: lat,
            lng: lng
        };
        let storeOneLocation = {
            lat: store1.lat,
            lng: store1.lng
        }
        let storeTwoLocation = {
            lat: store2.lat,
            lng: store2.lng
        }
        console.log(storeOneLocation, `I'm the store one location`);
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: userLocation
        });
        var userLatLng = new google.maps.Marker({position: userLocation, map: map});
        var storeOne = new google.maps.Marker({position: storeOneLocation, map: map});
        var storeTwo = new google.maps.Marker({position: storeTwoLocation, map: map});
    }
    render() {
        return (
            <div id="map"></div>
        )

    }
}

function mapStateToProps(state) {
    return {data: state.data};

}
export default connect(mapStateToProps)(ReactMap);
