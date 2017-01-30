import React, {Component} from 'react';

export default class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {name} = this.props;
        return (
            <div>
                <li>- {name}</li>
                <br/>
            </div>
        )
    }
}
