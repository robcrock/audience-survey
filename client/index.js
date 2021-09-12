import React from "react"
import ReactDOM from "react-dom"
import IconButton from "@material-ui/core/IconButton"
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded"
import "./index.scss"

// Components
import MyForm from "./components/MyForm"
import MyMaterialForm from "./components/MyMaterialForm"
import SurveyList from "./components/SurveyList"

class App extends React.Component {
  render() {
    return (
      <div>
        <SurveyList />
        <IconButton aria-label="add survey">
          <AddCircleRoundedIcon />
        </IconButton>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))
