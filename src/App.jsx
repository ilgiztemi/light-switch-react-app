import { Component } from "react";
import "./styles.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isSwitched: false
    };
  }
  switchBtn = () => {
    this.setState({ isSwitched: !this.state.isSwitched });
  };
  render() {
    const { isSwitched } = this.state;
    return (
      <div className="App">
        {isSwitched ? (
          <img
            src="https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png"
            alt="lightbulbon"
          />
        ) : (
          <img
            src="https://learn.seytech.co/assets/slides/js-intro/assets/lightoff.png"
            alt="lightbulboff"
          />
        )}
        <button onClick={this.switchBtn}>Switch</button>
      </div>
    );
  }
}
