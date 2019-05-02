import React, { Component } from "react"

class AstronautContainer extends Component {
  state = { peopleInSpace: null }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(r => r.json())
      .then(data => this.setState({ peopleInSpace: data.people }))
  }

  render() {
    return <h1>Astronauts Here</h1>
  }
}

export default AstronautContainer
