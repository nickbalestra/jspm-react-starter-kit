import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      subject: 'World!'
    }
  }

  render () {
    return <h1>Hello {this.state.subject}</h1>
  }
}

ReactDOM.render(<Home />, document.getElementById('app'));
