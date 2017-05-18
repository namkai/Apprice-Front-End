import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';

class ReactMap extends Component {
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true,
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

  render() {
    if (this.props.data.stores === 1) {
      const { coords } = this.props.data.location;
      const store1 = this.props.data.oneStore[0];
      return (
        <Gmaps
          width={'100%'}
          height={'300px'}
          lat={coords.lat}
          lng={coords.lng}
          zoom={12}
          loadingMessage={'Be happy'}
          params={{ v: '3.exp', key: 'YOUR_API_KEY' }}
          onMapCreated={this.onMapCreated}
        >
          <Marker
            lat={coords.lat}
            lng={coords.lng}
            draggable
            onDragEnd={this.onDragEnd}
          />
          <InfoWindow
            lat={coords.lat}
            lng={coords.lng}
            content={'You are here!'}
            onCloseClick={this.onCloseClick}
          />
          <Marker
            lat={store1.latitude}
            lng={store1.longitude}
            draggable
            onDragEnd={this.onDragEnd}
          />
          <InfoWindow
            lat={store1.latitude}
            lng={store1.longitude}
            content={store1.name}
            onCloseClick={this.onCloseClick}
          />
        </Gmaps>
      );
    }
    if (this.props.data.stores === 2) {
      const { coords } = this.props.data.location;
      const store1 = this.props.data.products[0];
      const store2 = this.props.data.products[1];

      return (
        <Gmaps
          width={'100%'}
          height={'300px'}
          lat={coords.lat}
          lng={coords.lng}
          zoom={12}
          loadingMessage={'Be happy'}
          params={{ v: '3.exp', key: 'YOUR_API_KEY' }}
          onMapCreated={this.onMapCreated}
        >
          <Marker
            lat={coords.lat}
            lng={coords.lng}
            draggable
            onDragEnd={this.onDragEnd}
          />
          <InfoWindow
            lat={coords.lat}
            lng={coords.lng}
            content={'You are here!'}
            onCloseClick={this.onCloseClick}
          />
          <Marker
            lat={store1.latitude}
            lng={store1.longitude}
            draggable
            onDragEnd={this.onDragEnd}
          />
          <InfoWindow
            lat={store1.latitude}
            lng={store1.longitude}
            content={store1.name}
            onCloseClick={this.onCloseClick}
          />
          <Marker
            lat={store2.latitude}
            lng={store2.longitude}
            draggable
            onDragEnd={this.onDragEnd}
          />
          <InfoWindow
            lat={store2.latitude}
            lng={store2.longitude}
            content={store2.name}
            onCloseClick={this.onCloseClick}
          />
        </Gmaps>
      );
    }
    if (this.props.data.stores === 3) {
      const { coords } = this.props.data.location;
      const store1 = this.props.data.products[0];
      const store2 = this.props.data.products[1];
      const store3 = this.props.data.products[2];
      return (
        <Gmaps
          width={'100%'}
          height={'300px'}
          lat={coords.lat}
          lng={coords.lng}
          zoom={12}
          loadingMessage={'Be happy'}
          params={{ v: '3.exp', key: 'YOUR_API_KEY' }}
          onMapCreated={this.onMapCreated}
        >
          <Marker
            lat={coords.lat}
            lng={coords.lng}
            draggable
            onDragEnd={this.onDragEnd}
          />
          <InfoWindow
            lat={coords.lat}
            lng={coords.lng}
            content={'You are here!'}
            onCloseClick={this.onCloseClick}
          />
          <Marker
            lat={store1.latitude}
            lng={store1.longitude}
            draggable
            onDragEnd={this.onDragEnd}
          />
          <InfoWindow
            lat={store1.latitude}
            lng={store1.longitude}
            content={store1.name}
            onCloseClick={this.onCloseClick}
          />
          <Marker
            lat={store2.latitude}
            lng={store2.longitude}
            draggable
            onDragEnd={this.onDragEnd}
          />
          <InfoWindow
            lat={store2.latitude}
            lng={store2.longitude}
            content={store2.name}
            onCloseClick={this.onCloseClick}
          />
          <Marker
            lat={store3.latitude}
            lng={store3.longitude}
            draggable
            onDragEnd={this.onDragEnd}
          />
          <InfoWindow
            lat={store3.latitude}
            lng={store3.longitude}
            content={store3.name}
            onCloseClick={this.onCloseClick}
          />
        </Gmaps>
      );
    }
  }
}

export default connect(({ data }) => ({ data }))(ReactMap);
