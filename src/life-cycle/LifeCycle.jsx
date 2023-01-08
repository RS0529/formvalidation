/*import React, { Component } from "react";
//import LifeCycleMethods from "./LifeCycleMethods";
import LifeCycleMethods from "./LifeCycleMethods";
class LifeCycle extends Component {
  state = {
    pincode: "",
  };
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.setState({ pincode: e.target.value })}
        />

        <h1>class component LifeCycle</h1>
        <LifeCycleMethods pincode={this.state.pincode} />
      </div>
    );
  }
}

export default LifeCycle;*/

// Life cycle

// life cycle of a component includes all activities from component creation to destroy.

// The life cycle of a component is devided into three parts.

// 1. mounting phase
// In mounting phase a component is created and inserted into the DOM.

// Methods of mounting phase :-

// - constructor():-
// The constructor() gets executed only once at the time of creating an object
// of the class component.
// The constructor() is useful only in two situations
// 1. If you want initialize the state
// Example:-
// constructor(){
// this.state = {}
// }
// 2. To bind the event handlers with the class object.
// Example:-

// constructor(){
// this.handleClick = this.handleClick.bind(this)
// }

// If you do not need above cases then do not constructor.

// - static getDerivedStateFromProps(nextProps, prevState)

// this method will get executed on both mounting and updating phases.

// this method is used to update the state based on props values.

// this method returns either an object to be merged with the state or null

// - render()

// This is the only mandatory method to be used in the class component.
// this method returns react elements, array, fragments, boolan, null, portals,etc.
// this method is called before each rendering
// this method is responsible for updating the UI

// - componentDidMount()
// this method gets executed after mounting a component.
// this method gets executed only once.
// this method is used perform one time initialization operations like
// fetching data from server, initializing a timer, etc.

// 2. updating phase
// In updating phase, a mounted componented is modified.

// Methods of updating phase :-

// - static getDerivedStateFromProps(nextProps, prevState)
// - shouldComponentUpdate(nextProps, nextState)
// - render()
// - getSnapshotBeforeUpdate(prevProps, prevState)
// - componentDidUpdate(prevProps, prevState)

// 3. unmounting phase

// In unmounting phase the mounted component is removed from the DOM.

// Methods of unmounting phase:-

// - componentWillUnmount()

//unmounted render

import React, { Component } from "react";
import LifeCycleMethods from "./LifeCycleMethods";

class LifeCycle extends Component {
  state = {
    pincode: "",
    pi: "",
  };
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.setState({ pi: e.target.value })}
        />
        <button onClick={(e) => this.setState({ pincode: this.state.pi })}>
          change
        </button>

        <h1>class component LifeCycle</h1>
        {this.state.pincode !== "exit" && (
          <LifeCycleMethods pincode={this.state.pincode} />
        )}
      </div>
    );
  }
}

export default LifeCycle;
