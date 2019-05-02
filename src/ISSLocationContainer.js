import React, { Component } from "react"

class ISSLocationContainer extends Component {
  state = { latitude: null, longitude: null }

  componentDidMount() {
    fetch("http://api.open-notify.org/iss-now.json")
      .then(r => r.json())
      .then(data => this.setState({ ...data.iss_position }))
  }

  render() {
    const { longitude, latitude } = this.state
    return (
      <div className="iss-location">
        <h1>ISS Current Location:</h1>
        <h1>{`Longitude: ${longitude}`}</h1>
        <h1>{`Latitude: ${latitude}`}</h1>
      </div>
    )
  }
}

export default ISSLocationContainer
