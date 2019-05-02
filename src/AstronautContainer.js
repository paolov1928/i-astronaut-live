import React, { Component, Fragment } from "react";
import astronaut from "./astronaut.png";

class AstronautContainer extends Component {
  state = { peopleInSpace: null };

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(r => r.json())
      .then(data => this.setState({ peopleInSpace: data.people }));
  }

  renderAstronauts = () => {
    // For each astronaut in state.peopleInSpace
    // render an img of astronaut
    return this.state.peopleInSpace.map(person => {
      return <img className="astronauts" src={astronaut} alt="astronaut" />;
    });
  };

  render() {
    return (
      <Fragment>
        <h1>Astronauts Here</h1>
        {this.state.peopleInSpace ? (
          this.renderAstronauts()
        ) : (
          <h1>NO ONE HERE</h1>
        )}
      </Fragment>
    );
  }
}

export default AstronautContainer;
