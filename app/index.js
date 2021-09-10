import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

// Components
import MyForm from "./components/MyForm"

class App extends React.Component {
  render() {
    return (
      <div>
        <MyForm />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))
