import React from "react"
import AstronautContainer from "./AstronautContainer"
import ISSLocationContainer from "./ISSLocationContainer"

function App() {
  return (
    <div className="App">
      <h1>Welcome to iAstronautLive!</h1>
      <AstronautContainer />
      <ISSLocationContainer />
      <h1 className="copywright">© Kenan and Paolo</h1>
    </div>
  )
}

export default App
