import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import {
  Typography,
  Grid,
  Container,
  Button,
  CssBaseline,
} from "@material-ui/core"

// Styles
import useStyles from "../styles"

// Components
import Header from "./Header"
import Form from "./Form"
import SurveyList from "./SurveyList"
import SurveyDetail from "./SurveyDetail"

const Main = () => {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Audience Survey
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              This app makes the process of capturing key information from our
              audience both quick and painless. Without this vital information,
              dashboard designers are left guessing. Thanks in advance for
              helping us create a great dashboard for you.
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Link to="/add-survey">
                    <Button
                      className={classes.button}
                      variant="contained"
                      color="primary"
                    >
                      Create a Survey
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
      <SurveyList />
    </>
  )
}

export default Main
