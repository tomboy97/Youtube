import React, { Component } from 'react';
//const Component = React.Component;
class SearchBar extends Component {
  constructor (props) {
    super(props);

    this.state = { term: '' };
  }

  render () {
    //return <input onChange = { this.onInputChange } />;
    //we set the state with new value of input
    return (
      <div className="search-bar">
        <input
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value )} />
      </div>
    );
  }
  //Value of the input: {this.state.term}
  //onInputChange(event){
    //console.log(event); //or event.target.value
  //}
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
//onchange event occurs when value of an element has been changed
export default SearchBar;
//ready to be exported to another file
