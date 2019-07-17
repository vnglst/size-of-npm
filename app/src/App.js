import React from "react"
import "./App.css"
import { LineChart } from "react-chartkick"
import "chart.js"
import size from "./size.json"

function App() {
  return (
    <div className="App">
      <LineChart xtitle="Date" ytitle="Size (MB)" data={size} />
    </div>
  )
}

export default App
