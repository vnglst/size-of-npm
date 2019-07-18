import React from "react"
import "./App.css"
import { AreaChart } from "react-chartkick"
import "chart.js"
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
    </>
  )
}

export default App
