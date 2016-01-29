import React from 'react';
import { Link } from 'react-router';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h2>React says welcome</h2>
        <Link to="/about" >show about</Link>
      </div>
    );
  }
}