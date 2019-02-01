import React from "react";

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000)
    .toString(16)
    .padStart(6, 0)}`;

class Pixel extends React.Component {
  constructor() {
    super();
    this.state = {
      style: {
        height: "50px",
        width: "50px",
        backgroundColor: randomHexColor()
      }
    };
  }

  clickHandler = () => {
    const style = {
      width: "50px",
      height: "50px",
      backgroundColor: randomHexColor()
    };
    this.setState({ style });
  };

  render() {
    const { style } = this.state;
    return <div onClick={() => this.clickHandler()} style={style} />;
  }
}

export default Pixel;
