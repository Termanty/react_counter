import { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  addOneHandler = () => this.setState((state) => ({ count: state.count + 1 }));
  resetHandler = () => this.setState((state) => ({ count: 0 }));
  removeOneHandler = () =>
    this.setState((state) => ({ count: state.count - 1 }));

  render() {
    return (
      <>
        <div className="circle">{this.state.count}</div>
        <div className="buttons">
          <button className="bt" onClick={this.addOneHandler}>
            Add One
          </button>
          <button className="bt" onClick={this.resetHandler}>
            Reset
          </button>
          <button className="bt" onClick={this.removeOneHandler}>
            Remove One
          </button>
        </div>
      </>
    );
  }
}

export default Main;
