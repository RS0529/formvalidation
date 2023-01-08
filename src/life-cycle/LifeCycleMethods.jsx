/*import React, { Component } from "react";

class LifeCycleMethods extends Component {
  timer;
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      city: "",
      count: 0,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    const cities = new Map([
      [411001, "Shivajinagar"],
      [411002, "Shukrawar peth"],
      [411003, "Swargate"],
      [411004, "Kothrud"],
      [411005, "Karve nagar"],
    ]);

    const city = cities.get(parseInt(nextProps.pincode));
    if (city) return { city: city };
    else return { city: "aa" };
  }

  render() {
    console.log("render()");
    return (
      <>
        <h1>
          City: {this.state.city} - {this.state.count}
        </h1>
      </>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.timer = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
}

export default LifeCycleMethods;
*/
import React, { Component } from "react";

class LifeCycleMethods extends Component {
timer;
constructor() {
super();
console.log("constructor");
this.state = {
city: "",
count: 0,
};
}

static getDerivedStateFromProps(nextProps, prevState) {
console.log("getDerivedStateFromProps");
const cities = new Map([
[411001, "Shivajinagar"],
[411002, "Shukrawar peth"],
[411003, "Swargate"],
[411004, "Kothrud"],
[411005, "Karve nagar"],
]);

const city = cities.get(parseInt(nextProps.pincode));
if (city) return { city: city };
else return { city: "no city selected" };
}

shouldComponentUpdate(nextProps, nextState) {
console.log("shouldComponentUpdate");
// console.log("child: ", nextProps.pincode);
// if (this.props.pincode == nextProps.pincode) return false;
// else return true;

return true;
}

render() {
console.log("render()");
return (
<>
<h1>
City: {this.state.city} - {this.state.count}
</h1>
</>
);
}
getSnapshotBeforeUpdate(prevProps, prevState) {
console.log("getSnapshotBeforeUpdate");
return "from snapshot";
}

componentDidMount() {
console.log("componentDidMount");
this.timer = setInterval(() => {
this.setState({ count: this.state.count + 1 });
console.log("counter ", this.state.count + 1);
}, 1000);
}

componentDidUpdate(prevProps, prevState, snapshot) {
console.log("componentDidUpdate, ", snapshot);
}

componentWillUnmount() {
console.log("componentWillUnmount");
clearInterval(this.timer);
}
}

export default LifeCycleMethods;