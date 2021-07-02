import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }

    increment() {
        // setState is in-synchronous
        // always execute code in a callback if it needs to run after a setState
        // this.setState(
        //     {
        //         count: this.state.count + 1,
        //     },
        //     () => {
        //         console.log("Callback Value", this.state.count);
        //     }
        // );
        this.setState((prevState, props) => ({
            count: prevState.count + 1,
        }));
        console.log(this.state.count); // Not using setState will cause the UI to not update
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                <div>count: {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        );
    }
}

export default Counter;
