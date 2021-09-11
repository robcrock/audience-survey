import React from "react"
import ReactDOM from "react-dom"
import "./index.scss"

// Components
import MyForm from "./components/MyForm"
import MyMaterialForm from "./components/MyMaterialForm"

class App extends React.Component {
  render() {
    return (
      <div>
        <MyMaterialForm />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))
