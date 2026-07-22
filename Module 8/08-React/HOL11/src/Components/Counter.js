import React, { Component } from "react";

class Counter extends Component {

    constructor() {

        super();

        this.state = {

            count: 0

        };

    }

    increment = () => {

        this.setState({

            count: this.state.count + 1

        });

    }

    decrement = () => {

        this.setState({

            count: this.state.count - 1

        });

    }

    sayHello = () => {

        alert("Hello! Member!");

    }

    sayWelcome = (msg) => {

        alert(msg);

    }

    onPress = () => {

        alert("I was clicked");

    }

    render() {

        return (

            <div>

                <h2>{this.state.count}</h2>

                <button

                    onClick={() => {

                        this.increment();

                        this.sayHello();

                    }}

                >

                    Increment

                </button>

                <br /><br />

                <button

                    onClick={this.decrement}

                >

                    Decrement

                </button>

                <br /><br />

                <button

                    onClick={() =>

                    this.sayWelcome("Welcome")

                    }

                >

                    Say Welcome

                </button>

                <br /><br />

                <button

                    onClick={this.onPress}

                >

                    Click on me

                </button>

            </div>

        );

    }

}

export default Counter;