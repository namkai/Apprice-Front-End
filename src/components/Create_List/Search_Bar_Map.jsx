import React, {Component} from 'react';

export default class SearchBarMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value})
    }

     onFormSubmit(event) {
        event.preventDefault();
        if(this.state.term.length === 0) {
            return;
        }

        this.props.selectCity(this.state.term);
        this.setState({term: ''});
    }

    render() {
        // var autocomplete = new google.maps.places.Autocomplete(input);
        return (
            <div className="search-bar">
                <form onSubmit={this.onFormSubmit} className="grocery-search">
                    <input placeholder="Search for city" className="form-control" value={this.state.term} onChange={this.onInputChange}/>
                    <button id="search-button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
