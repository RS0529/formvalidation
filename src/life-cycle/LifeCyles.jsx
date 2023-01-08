import React, { Component } from 'react';
import Counter from './Counter';
class LifeCyles extends Component {

    constructor() {
        super()
        this.state={
            count: 0
        }
    }

    componentDidMount() {
        console.log('componentDidMount: When first render');
    }

    increment() {
        this.setState({count: this.state.count + 1})
    }


    // componentWillUnmount(){
    //     console.log("componentWillUnmount : comop remove");
    // }
    render() {
        return (
          <div>
            {/* <h1>{this.state.count}</h1> */}
            <Counter number={this.state.count} />
            {/* <button onClick={this.increment.bind(this)}>Click ME</button>  */}
            <button onClick={() => {this.increment()}}>Click ME</button>
          </div>
        );
    }
}

export default LifeCyles;