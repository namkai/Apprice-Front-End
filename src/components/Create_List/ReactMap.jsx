import React, {Component} from 'react';
import {connect} from 'react-redux';
import Map from 'google-maps-react'

class ReactMap extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Map google={this.props.google} style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative'
                }} className={'map'} zoom={14}>
                    <Marker name={'SOMA'} position={{
                        lat: 37.778519,
                        lng: -122.405640
                    }}/>
                    <Marker name={'Dolores park'} position={{
                        lat: 37.759703,
                        lng: -122.428093
                    }}/>
                    <Marker name={'Your position'} position={{
                        lat: 37.762391,
                        lng: -122.439192
                    }}/>
                </Map>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {data: state.data};

}

export default connect(mapStateToProps)(ReactMap);
