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
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  Avatar,
} from "@material-ui/core"
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded"
import DeleteIcon from "@material-ui/icons/Delete"
import VisibilityIcon from "@material-ui/icons/Visibility"

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
      console.log("JSON ", jsonData)
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

  console.log(surveys.name)
  return (
    <>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {surveys.map((survey) => (
            <Grid item key={survey.survey_id} xs={12} md={6}>
              <div className={classes.demo}>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <IconButton>
                        <Link to={`/${survey.survey_id}`}>
                          <VisibilityIcon />
                        </Link>
                      </IconButton>
                    </ListItemAvatar>
                    <ListItemText primary={survey.name} />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => handleDelete(survey.survey_id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default SurveyList
