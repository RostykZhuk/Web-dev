import React from 'react';

const ErrorComponent = (props) => <div>{props.ignore}</div>;

class Counter extends React.Component {
  constructor(props) {
    console.log('Constructor');
    super(props);

    this.state = {
      counter: 0,
      seed: 0,
      initializing: true,
    };
    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed,
      };
    }
    return null;
  }
  componentDidMount() {
    console.log('Component did Mount');
    setTimeout(() => {
      this.setState({ initializing: false });
    }, 1000);
    console.log('----------------');
  }

  componentWillUnmount() {
    console.log('Component will Unmount');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component did update');
    console.log('----------------');
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Get Snapshot before update');
    return null;
  }

  componentDidCatch(error, info) {
    console.log('Component did Catch');
    this.setState({ error, info });
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log('Should Component update - DO NOT RENDER');
      return false;
    }
    console.log('Should Component update');
    return true;
  }

  render() {
    console.log('Render', this.state.error);

    if (this.state.initializing) {
      return <div>Initializing...</div>;
    }

    if (this.props.showErrorComponent && this.state.error) {
      return <div>We have encountered an error! {this.state.error}</div>;
    }
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div className='counter'>Counter: {this.state.counter}</div>
        {this.props.showErrorComponent ? <ErrorComponent /> : null}
      </div>
    );
  }
}

export default Counter;
