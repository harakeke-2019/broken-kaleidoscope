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
        height: "5px",
        width: "5px",
        backgroundColor: randomHexColor()
      }
    };
  }

  clickHandler = () => {
    const style = {
      width: "5px",
      height: "5px",
      backgroundColor: randomHexColor()
    };
    this.setState({ style });
  };

  enterHandler = () => {
    const style = {
      width: "5px",
      height: "5px",
      backgroundColor: "yellow"
    };
    this.setState({ style });
  };

  leaveHandler = () => {
    const style = {
      width: "50px",
      height: "50px",
      backgroundColor: "magenta"
    };
    this.setState({ style });
  };

  contextHandler = () => {
    const style = {
      width: "50px",
      height: "50px",
      backgroundColor: "black"
    };
    this.setState({ style });
  };

  doubleClickHandler = () => {
    const style = {
      width: "50px",
      height: "50px",
      backgroundColor: "white"
    };
    this.setState({ style });
  };

  dragEnterHandler = () => {
    const style = {
      width: "50px",
      height: "50px",
      backgroundColor: "yellow"
    };
    this.setState({ style });
  };

  dragExitHandler = () => {
    const style = {
      width: "50px",
      height: "50px",
      backgroundColor: randomHexColor()
    };
    this.setState({ style });
  };

  render() {
    const { style } = this.state;
    return (
      <div
        onClick={() => this.clickHandler()}
        onMouseEnter={() => this.enterHandler()}
        style={style}
      />
    );

    // return (
    //   <div
    //     onMouseOver={() => this.enterHandler()}
    //     onMouseLeave={() => this.leaveHandler()}
    //     style={style}
    //   />
    // );

    // return <div onContextMenu={() => this.contextHandler()} style={style} />;

    // return (
    //   <div onDoubleClick={() => this.doubleClickHandler()} style={style} />
    // );

    // return (
    //   <div
    //     onDragEnter={() => this.dragEnterHandler()}
    //     onDragExit={() => this.dragExitHandler()}
    //     style={style}
    //   />
    // );
  }
}

export default Pixel;
