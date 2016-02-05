import React from 'react';
import { Link } from 'react-router';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {count, increase, decrease} = this.props;
    console.log(this.props);
    return (
      <div>
        <h2>Counter page</h2>
        <Link to="/" >show home</Link>
        <hr />
        {count}
        <button  onClick={increase} >Increment</button>
        <button  onClick={decrease} >Decrement</button>
      </div>
    );
  }
}
