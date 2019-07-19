import React from "react"
import "./App.css"
import { AreaChart } from "react-chartkick"
import "chart.js"
import image from "./node_modules_size.jpg"
import size from "./size.json"

function App() {
  return (
    <>
      <h1>
        Size of <code>node_modules</code> folder when installing the top 100
        packages
      </h1>
      <div className="App">
        <AreaChart
          download="size-of-npm"
          xtitle="Date"
          ytitle="Size (MB)"
          data={size}
        />
      </div>
      <p>Inspired by following meme</p>
      <img
        src={image}
        alt="heaviest object in de universe, sun, neutron star, black hole, node_modules"
      />
      <p>
        On my Macbook Pro the folder containing Xcode is larger 13 GB. To get the .NET
        application running at work I had to install over 20 GB of
        applications and dependencies. So, relativity speaking, JavaScript is
        still ok. But let's not go that road as well.
      </p>
    </>
  )
}

export default App
