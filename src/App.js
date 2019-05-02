import React from "react";
import AstronautContainer from "./AstronautContainer";
import ISSLocationContainer from "./ISSLocationContainer";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Kenan and Paolo's iAstronautLive!</h1>
      <AstronautContainer />
      <ISSLocationContainer />
    </div>
  );
}

export default App;
