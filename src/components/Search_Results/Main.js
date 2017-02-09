import React, {Component} from 'react';
import {connect} from 'react-redux';

import OneStore from './OneStore';
import TwoStore from './TwoStore';
import ThreeStore from './ThreeStore';
import {getData} from '../../actions/index';

class ResultsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            storeOne: null,
            storeTwo: null,
            storeThree: null
        }
    }
    render() {
        const {data} = this.props;
        if (!data) {
            return <div>Loading...</div>
        }
        if (data.stores === 1) {
            return (
                <div className="container">
                    <OneStore />
                </div>
            )
        }
        if (data.stores === 2) {
            return (
                <div className="container">
                    <TwoStore data={data}/>
                </div>
            )
        }
        if (data.stores === 3) {
            return (
                <div className="container">
                    <ThreeStore data={data}/>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    console.log(state, `I'm the mapStateToProps state on the result page`);
    return {data: state.data};

}

export default connect(mapStateToProps)(ResultsPage);
