import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import IconButton from "@material-ui/core/IconButton"
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded"
import "./index.scss"

// Components
import Home from "./components/Home"
import MyForm from "./components/MyForm"
import MyMaterialForm from "./components/MyMaterialForm"
import SurveyList from "./components/SurveyList"
import SurveyDetail from "./components/SurveyDetail"

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/add-survey" component={MyMaterialForm}></Route>
            <Route exact path="/" component={SurveyList}></Route>
            <Route path="/:id" component={SurveyDetail}></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))
