import React, { useState, useEffect } from "react"
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
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded"
import DeleteIcon from "@material-ui/icons/Delete"

// Components
import SurveyDetail from "./SurveyDetail"
import Form from "./Form"

// Styles
import useStyles from "../styles"

const SurveyList = () => {
  const classes = useStyles()

  const [surveys, setSurveys] = useState([])

  const getSurveys = async () => {
    try {
      const response = await fetch("http://localhost:5000/surveys")
      const jsonData = await response.json()
      setSurveys(jsonData)
    } catch (err) {
      console.error(err.message)
    }
  }

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/surveys/${id}`, {
        method: "DELETE",
      })
      // console.log(surveys)
      setSurveys(surveys.filter((survey) => survey.survey_id !== id))
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getSurveys()
  }, [])

  return (
    <>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {surveys.map((survey) => (
            <Grid item key={survey.survey_id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5">
                    Heading
                  </Typography>
                  <Typography>
                    This is a survey card that will expose summary level details
                    of your Survey.
                  </Typography>
                  <CardActions>
                    <Link to={`/${survey.survey_id}`}>
                      <Button size="small" color="primary">
                        View
                      </Button>
                    </Link>
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => handleDelete(survey.survey_id)}
                    >
                      <DeleteIcon /> Delete
                    </IconButton>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default SurveyList
