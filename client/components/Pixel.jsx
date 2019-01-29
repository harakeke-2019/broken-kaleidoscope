import React from 'react';

const randomColor = () => '#'+Math.random().toString(16).substr(-6);

const data = {
    height: "20px",
    width: "20px",
    backgroundColor: randomColor()
}

class Pixel extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div style={data}>
            </div>
        )
    }
}

export default Pixel