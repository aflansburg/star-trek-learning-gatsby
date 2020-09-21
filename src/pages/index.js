import React, { useState, useEffect } from "react"

const WARPFIELD_INITIAL_SETTINGS = {
  speed: 0.3,
  speedAdjFactor: 0.03,
  density: 5,
  shape: "circle",
  warpEffect: true,
  warpEffectLength: 1,
  depthFade: true,
  starSize: 8,
  backgroundColor: "hsl(263,45%,7%)",
  starColor: "#FFFFFF",
}

export default function Home() {
  const [warpCoreSettings, updateWarpCoreSettings] = useState(
    WARPFIELD_INITIAL_SETTINGS
  )

  useEffect(() => {
    const warpfield = new global.WarpSpeed("warpfield", warpCoreSettings)
  }, [warpCoreSettings])

  const handleToggleWarp = event => {
    if (warpCoreSettings.speed === 12) {
      updateWarpCoreSettings(() => WARPFIELD_INITIAL_SETTINGS)
    } else {
      updateWarpCoreSettings(prevSettings => ({
        ...prevSettings,
        speed: 12,
        shape: "square",
        warpEffectLength: 8,
        starSize: 1,
      }))
    }
  }

  return (
    <div className="main-home">
      <canvas id="warpfield" className="canvas-warpfield-background"></canvas>
      <div className="main-title-div">
        <h1 className="header-title">
          Learn your ignorant friend some Star Trek
        </h1>
        <div className="engine-controls-container">
          <button
            className={`engine-controls-item ${
              warpCoreSettings.speed === 12
                ? "engine-button-active"
                : "engine-button"
            }`}
            onClick={handleToggleWarp}
          >
            {warpCoreSettings.speed === 12 ? "Impulse" : "Warp 9"}
          </button>
          <p className="engine-controls-item">
            {"^"} First things first. Warp is not the alien guy with the
            Chewbacca bandolier and forehead ridges. That's the character Worf,
            a Klignon. Warp is synonomous with "faster than light" speed. Press
            the LCARS (Library Computer Access and Retrieval System) control
            button to experience the difference between Warp speed and Impulse
            power.
          </p>
        </div>
      </div>
    </div>
  )
}
