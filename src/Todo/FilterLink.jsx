import React, { Component } from 'react';

import Filter from './Filter';

class FilterLink extends Component {
  constructor (props) {
    super(props);
    this.state = {visibilityFilter: props.store.getState().visibilityFilter};
  }

  componentDidMount() {
    this.storeSubscription = this.props.store.subscribe(() => this.setState({visibilityFilter: this.props.store.getState().visibilityFilter}));
  }

  componentWillUnmount() {
    this.storeSubscription.unsubscribe();
  }

  handleClick= filter => this.props.store.dispatch({ type: "SET_VISIBILITY_FILTER", filter })
  
  isSelected = () => this.props.filter === this.state.visibilityFilter;

  render () {
    return (
      <Filter
        handleClick={() => this.handleClick(this.props.filter)}
        isSelected={this.isSelected()}
      >
        {this.props.children}
      </Filter>
    );
  }
};

export default FilterLink;
