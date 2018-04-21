import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

const mode = process.env.NODE_ENV;

ReactDOM.render(
  <Hello name={mode}/>,
  document.getElementById('root')
);
