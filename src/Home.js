import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            home: 'home'
        }
    }
    render() {
        return (
            <div>
                <h1>welcome to your{this.state.home}</h1>
            </div>
        );
    }
}

export default Home;