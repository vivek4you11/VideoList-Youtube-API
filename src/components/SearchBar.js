import React, { Component } from 'react';
import './SearchBar.css';
class SearchBar extends Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({
      term: event.target.value
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <div className="ui right labeled input">
              <input type="text" placeholder="Search..." value={this.state.term} onChange={this.onInputChange} />
              <div className="ui basic label" style={{ backgroundColor: 'gainsboro' }}>
                <i className="search icon" onClick={this.onFormSubmit} />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
