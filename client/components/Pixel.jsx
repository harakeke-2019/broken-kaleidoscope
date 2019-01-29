import React from "react";

const randomColour = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

class Pixel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      style: {
        width: "100px",
        height: "100px",
        backgroundColor: randomColour()
      }
    };
  }

  render() {
    const { style } = this.state;
    return <div style={style} />;
  }
}

export default Pixel;
