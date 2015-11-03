// For a more classic ES5 example of this very same file check out
// https://github.com/nickbalestra/webpack-react-starter-kit/blob/master/app/index.js

import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
  constructor() {
    super()

    this.state = {
      subject: 'World!'
    }
  }

  render () {
    return (
      <h1>Hello {this.state.subject}</h1>
    )
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
