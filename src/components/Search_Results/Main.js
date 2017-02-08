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
            data: []
        }

        this.getUserData = this.getUserData.bind(this);
        this.getUserData();
    }
    async getUserData() {
        let log = await console.log(this.props, `I'm the result page props`);
        await this.setState({
            data: this.props.data.data
        })
    }
    render() {
        console.log(this.props.data.data, `I"M LOOKING FOR THIS` );
        let {data} = this.state;
        console.log(data, `I'm the data`);

        return (
            <div id="result-container">
                {/* <h3>{...this.props.data.data}</h3> */}
                <OneStore userData={this.props.data.data}/>
                <TwoStore userData={this.props.data.data}/>
                <ThreeStore userData={this.props.data.data}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state, `I'm the mapStateToProps state on the result page`);
    return {data: state.data,
            location: state.location
    };

}

export default connect(mapStateToProps)(ResultsPage);
