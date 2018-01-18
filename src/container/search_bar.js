import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(event){
    //always make sure that this function is bound or else 'this' becomes a mystery!
    this.setState({term:event.target.value});
  }
  onFormSubmit(event){
    //so that it doesn't try to submit form automatically.
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a Forecast on your cities!"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}
