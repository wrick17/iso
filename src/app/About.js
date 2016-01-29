import React from 'react';
import { Link } from 'react-router';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <h2>About us page</h2>
        <Link to="/" >show home</Link>
      </div>
    );
  }
}