import React, {Component} from 'react';
import OneStore from './OneStore';
import TwoStore from './TwoStore';
import ThreeStore from './ThreeStore';
import {getData} from '../../actions/index';

export default class ResultsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.getUserData = this.getUserData.bind(this);
        this.getUserData();
    }
    async getUserData() {
        let data = await getData();
        this.setState({data: data});
    }
    render() {
        console.log(this.state.data);
        let {data} = this.state;
        return (
            <div id="result-container">
                <OneStore userData={data}/>
                <TwoStore userData={data}/>
                <ThreeStore userData={data}/>
            </div>
        )
    }
}
