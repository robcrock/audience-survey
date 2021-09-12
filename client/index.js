import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
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
      <Router>
        <div>
          <SurveyList />
          <IconButton aria-label="add survey">
            <Link to="/add-survey">
              <AddCircleRoundedIcon />
            </Link>
          </IconButton>

          <Route path="/add-survey" component={MyMaterialForm} />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))
