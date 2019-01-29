import React from 'react';

const randomColor = () => '#'+Math.random().toString(16).substr(-6);

class Pixel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            style: {
                height: "20px",
                width: "20px",
                backgroundColor: randomColor()
            }
        }
    }

    render() {
        return(
            <div style={this.state.style}/>

        )
    }
}

export default Pixel