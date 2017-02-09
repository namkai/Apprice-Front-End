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

        // this.seperateStores = this.seperateStores.bind(this);
        // this.seperateStores();
    }
    // componentWillMount() {
    //     // this.setState({data: this.props.data})
    // }
    // seperateStores(storeData = []) {
    //     let storeOne = [];
    //     let storeTwo = [];
    //     let storeThree = [];
    //     storeData = this.props.data.data;
    //     console.log(storeData, `I'm the props store data`);
    //      sortedData = storeData.sort((a, b) => {
    //         let objA = a.id;
    //         let objB = b.id;
    //         return objA - objB;
    //     })
    //     console.log(sortedData, `I'm the sortedData YO!`);
    // }
    render() {
        // console.log(this.state.data, `I'm the state data yo!`);
        console.log(this.props.data, 'im the props on the result page');
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
