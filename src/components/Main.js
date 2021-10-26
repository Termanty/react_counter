import { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      styling: "circle lightgrey",
    };
  }

  addOneHandler = () =>
    this.setState((state) => ({
      count: state.count + 1,
      styling: "circle lightgreen",
    }));
  resetHandler = () =>
    this.setState((state) => ({ count: 0, styling: "circle lightgrey" }));
  removeOneHandler = () => {
    if (this.state.count === 0) return;
    this.setState((state) => ({
      count: state.count - 1,
      styling: "circle lightred",
    }));
  };

  render() {
    let circleClass = "circle";
    if (this.state.count !== 0) {
      circleClass += this.state.count % 2 === 0 ? " odd" : " even";
    }

    return (
      <>
        <div className={this.state.styling}>{this.state.count}</div>
        {/* <div className={circleClass}>{this.state.count}</div> */}
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
