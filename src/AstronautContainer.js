import React, { Component, Fragment } from "react"
import astronaut from "./astronaut.png"

class AstronautContainer extends Component {
  state = { peopleInSpace: null, selectedAstronaut: null }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(r => r.json())
      .then(data => this.setState({ peopleInSpace: data.people }))
  }

  handleClick = name => {
    this.setState({ selectedAstronaut: name })
  }

  renderAstronauts = () => {
    return this.state.peopleInSpace.map(person => {
      return this.state.selectedAstronaut === person.name ? (
        <Fragment>
          <img
            className="astronauts"
            src={astronaut}
            alt="astronaut"
            onClick={() => this.handleClick(person.name)}
          />
          <h1>{person.name}</h1>{" "}
        </Fragment>
      ) : (
        <img
          className="astronauts"
          src={astronaut}
          alt="astronaut"
          onClick={() => this.handleClick(person.name)}
        />
      )
    })
  }

  render() {
    return (
      <Fragment>
        {this.state.peopleInSpace ? this.renderAstronauts() : null}
      </Fragment>
    )
  }
}

export default AstronautContainer
