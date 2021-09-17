import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  IconButton,
  Button,
} from "@material-ui/core"

// Styles
import useStyles from "../styles"

// Components
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import Form from "./Form"
import SurveyList from "./SurveyList"
import SurveyDetail from "./SurveyDetail"
import EditSurvey from "./EditSurvey"

const App = () => {
  const classes = useStyles()
  return (
    <Router>
      <>
        <CssBaseline />
        <Header />
        {/* Switch will match the first path that matches and nothing after */}
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route path="/add-survey" component={Form}></Route>
          <Route path="/edit/:id" component={EditSurvey}></Route>
          <Route path="/:id" component={SurveyDetail}></Route>
        </Switch>
        <Footer />
      </>
    </Router>
  )
}

export default App
