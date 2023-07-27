
import React from 'react';
import SubCounter from './SubCounter';
class Counter extends React.Component {
    // Mounting
    constructor() {
        console.log("constructor called - Mounting Phase");
        super();
        this.state = {
            counter: 0
        }

    }
    updateCounter = () => {
        this.setState({ counter: this.state.counter + 1 });
    }
    // Mounting
    render() {
        console.log("render called - Counter");
        return (
            <div>
                <h1 onClick={this.updateCounter}>The counter value is {this.state.counter}</h1>
                <SubCounter counterValue={this.state.counter}></SubCounter>
            </div>
        )
    }
    //Mounting
    componentDidMount() {
        console.log("component did mount called - Mounting Phase");
    }
    // Updating Phase
    componentDidUpdate() {
        console.log("Component did update called - Counter");
    }
}
export default Counter;