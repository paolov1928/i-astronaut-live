import React, { Component, Fragment } from "react"
import astronaut from "./astronaut.png"
import Astronaut from "./Astronaut"

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
          <Astronaut {...person} handleClick={this.handleClick} />
          <h1>{person.name}</h1>
        </Fragment>
      ) : (
        <Astronaut {...person} handleClick={this.handleClick} />
      )
    })
  }

  render() {
    return (
      <div className="astronaut-container">
        {this.state.peopleInSpace ? this.renderAstronauts() : null}
      </div>
    )
  }
}

export default AstronautContainer
