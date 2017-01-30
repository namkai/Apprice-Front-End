import React, {Component} from 'react';

class SearchBar extends Component {
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
        this.props.foodSearch(this.state.term);
        this.setState({term: ''});
    }

    render() {
        return (
            <div className="search-bar">
                <h2>Lets pickout some groceries.</h2>
                <form onSubmit={this.onFormSubmit} className="grocery-search">
                    <input placeholder="Search for groceries" className="form-control" value={this.state.term} onChange={this.onInputChange}/>
                    <button id="search-button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;
