import React from 'react';
import { Link } from 'react-router';
import  Counter from './Counter';
import configureStore from './store/createStore';
import rootReducer from './reducers';
import * as actions from './actions/counterActions';
import { connect } from 'react-redux';

const store = configureStore();

class CounterContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Counter increase={this.props.increment} decrease={this.props.decrement} count={this.props.counter} />
    );
  }
}

const mapStateToProps = function(state, comProps){
  return {
    counter: state.counter
  };
};

export default connect(mapStateToProps, actions)(CounterContainer);
