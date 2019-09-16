import React from "react";

class SearchBox extends React.Component  {
    state = { 
        term: "" 
    }

    onInputChange = (event) => {
        this.setState({ term : event.target.value});
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        // call back from parent
        this.props.onFormSubmit(this.state.term);

    }

    render() {
        return(
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit= {this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text"
                         // name="search"
                         onChange={this.onInputChange}
                         value={this.state.term}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBox;

