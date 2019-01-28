import React from "react";

// const Pixel = () => {
//   return (
//     <div
//       style={{
//         height: "50px",
//         width: "50px",
//         backgroundColor: "cornflowerblue"
//       }}
//     />
//   );
// };

class Pixel extends React.Component {
  constructor() {
    super();
  }

  state = {
    style: {
      height: "50px",
      width: "50px",
      backgroundColor: "cornflowerblue"
    }
  };

  render() {
    return <div style={this.state.style}> </div>;
  }
}

export default Pixel;
