import React, { useState, useEffect } from "react"
import {
  CssBaseline,
  Box,
  IconButton,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core"
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

// Styles
import useStyles from "../styles"

const SurveyDetail = ({ match }) => {
  const classes = useStyles()
  const [survey, setSurvey] = useState([])

  const getSurvey = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/surveys/${match.params.id}`
      )
      const jsonData = await response.json()

      setSurvey(jsonData)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getSurvey()
  }, [])

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <List className={classes.root}>
          <Box sx={{ m: 2 }}>
            <Typography variant="h5" align="left" color="textPrimary" paragraph>
              {survey.name}
            </Typography>
          </Box>
          <ListItem>
            <ListItemText
              primary="What is the Seniority Level of this audience?"
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body1"
                    color="textPrimary"
                  >
                    {survey.seniority === ""
                      ? "No answer was given."
                      : survey.seniority}
                  </Typography>
                </>
              }
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="If this audience works in a certian Division, what is that Division?"
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body1"
                    color="textPrimary"
                  >
                    {survey.division === ""
                      ? "No answer was given."
                      : survey.division}
                  </Typography>
                </>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Is the audience Internal or External?"
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body1"
                    color="textPrimary"
                  >
                    {survey.internal_or_external === ""
                      ? "No answer was given."
                      : survey.internal_or_external}
                  </Typography>
                </>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="How familiar is the audience with the subject of this visualization?"
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body1"
                    color="textPrimary"
                  >
                    {survey.familiarity === ""
                      ? "No answer was given."
                      : survey.familiarity}
                  </Typography>
                </>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Does the audience expect the dashboard to be Interactive or Static?"
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body1"
                    color="textPrimary"
                  >
                    {survey.preference === ""
                      ? "No answer was given."
                      : survey.preference}
                  </Typography>
                </>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="How much time does this audience have to spend with the dashboard?"
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body1"
                    color="textPrimary"
                  >
                    {survey.time === "" ? "No answer was given." : survey.time}
                  </Typography>
                </>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Will the audience be using this dashboard for Passive Monitoring or
          Active Decision Making?"
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body1"
                    color="textPrimary"
                  >
                    {survey.passive_or_active === ""
                      ? "No answer was given."
                      : survey.passive_or_active}
                  </Typography>
                </>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="What is the Seniority Level of this audience?"
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body1"
                    color="textPrimary"
                  >
                    {survey.seniority === ""
                      ? "No answer was given."
                      : survey.seniority}
                  </Typography>
                </>
              }
            />
          </ListItem>
        </List>
      </Container>
    </>
  )
}

export default SurveyDetail
