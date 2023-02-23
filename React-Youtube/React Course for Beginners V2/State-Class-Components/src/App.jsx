import './App.css';
import React from 'react';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      name: props.name,
    };
  }

  clickHandler = () => {
    const newValue = {
      name: 'Me',
    };
    this.setState(newValue);
    if (newValue.name === 'Me') {
      this.props.onHide();
    }
  };
  render() {
    return (
      <h1 className='greeting' onClick={this.clickHandler}>
        Hello {this.state.name}. Welcome
      </h1>
    );
  }
}
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  render() {
    return (
      <main>
        <button
          onClick={() =>
            this.setState((prev) => ({
              show: !prev.show,
            }))
          }
        >
          toggle visibility
        </button>
        {this.state.show ? (
          <Greeting
            name='everyone'
            onHide={() => {
              this.setState({
                show: false,
              });
            }}
          />
        ) : null}
      </main>
    );
  }
}
