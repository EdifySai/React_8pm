import React from 'react';
class SubCounter extends React.Component {
    constructor() {
        super();
        console.log("SubCounter- constructor called");
    }
    render() {
        console.log("SubCounter-Render called");

        return (
            <div>
                <h1>The Sub counter value is {this.props.counterValue}</h1>
            </div>
        )
    }
    componentDidMount() {
        console.log("Component did mount - subcounter");
    }
    componentDidUpdate() {
        console.log("component did update - subcounter");
    }
}
export default SubCounter;