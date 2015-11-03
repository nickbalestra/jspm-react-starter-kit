import React from 'react';
import ReactDOM from 'react-dom';

var Home = React.createClass({
  render () {
    return <h1>Hello {this.props.subject}</h1>
  }
});

ReactDOM.render(<Home subject='World!'/>, document.getElementById('app'));
