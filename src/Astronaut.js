import React, { Component } from "react"
import astronaut from "./astronaut.png"

class Astronaut extends Component {
  state = {}
  render() {
    const { name, handleClick } = this.props
    return (
      <img
        className="astronauts"
        src={astronaut}
        alt="astronaut"
        onClick={() => handleClick(name)}
      />
    )
  }
}

export default Astronaut
