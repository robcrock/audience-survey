import React, { useState, useEffect } from "react"
import { withRouter } from "react-router-dom"
import {
  CssBaseline,
  Box,
  Grid,
  Container,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  TextField,
  Typography,
} from "@material-ui/core"
import SendIcon from "@material-ui/icons/Send"

// Styles
import useStyles from "../styles"

const EditSurvey = (props) => {
  const defaultValues = {
    seniority: "",
    division: "",
    internal_or_external: "",
    familiarity: "",
    preference: "",
    time: "",
    passive_or_active: "",
  }

  const classes = useStyles()
  const [formValues, setFormValues] = useState(defaultValues)
  const [textValue, setTextValue] = useState("")
  const [survey, setSurvey] = useState(defaultValues)

  const handleRadioChange = (e) => {
    const { name, value } = e.target
    setSurvey({
      ...survey,
      [name]: value,
    })
  }

  const handleTextChange = (e) => {
    setTextValue(e.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()

    let data = { formValues }
    data.formValues.internal_or_external = data.formValues.internalOrExternal
    delete data.formValues.internalOrExternal
    data.formValues.passive_or_active = data.formValues.passiveOrActive
    delete data.formValues.passiveOrActive

    // Add the audienceName to the other data
    data.formValues.name = textValue

    fetch("http://localhost:5000/surveys", {
      method: "POST",
      body: JSON.stringify(data.formValues),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => console.log("Success:", JSON.stringify(response)))
      .catch((error) => console.error("Error:", error))

    props.history.push("/")
  }

  const getSurvey = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/surveys/${props.match.params.id}`
      )
      console.log(`match params ${props.match.params.id}`)
      const jsonData = await response.json()

      setSurvey(jsonData)
      console.log("Survey from the edit screen ", JSON.parse(survey))
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
      <main>
        <Container maxWidth="md">
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            component="fieldset"
            onSubmit={handleSubmit}
          >
            <Box sx={{ m: 2 }}>
              <Typography
                variant="body1"
                align="left"
                color="textPrimary"
                paragraph
              >
                Below you will find a series of questions. That will take you
                just a minute to fill out, but they will give our design team a
                huge headstart in designing you a great dashboard.
              </Typography>
            </Box>
            <Box sx={{ p: 2 }}>
              <FormLabel component="legend">Audience Name</FormLabel>
              <TextField
                id="standard-basic"
                label=""
                value={survey.name}
                onChange={handleTextChange}
              />
            </Box>

            <Box sx={{ p: 2 }}>
              <FormLabel component="legend">
                What is the Seniority Level of this audience?
              </FormLabel>
              <RadioGroup
                aria-label="seniority"
                name="seniority"
                value={survey.seniority}
                onChange={handleRadioChange}
              >
                <FormControlLabel value="all" control={<Radio />} label="All" />
                <FormControlLabel
                  value="high"
                  control={<Radio />}
                  label="High"
                />
                <FormControlLabel
                  value="medium"
                  control={<Radio />}
                  label="Medium"
                />
                <FormControlLabel value="low" control={<Radio />} label="Low" />
              </RadioGroup>
            </Box>

            <Box sx={{ p: 2 }}>
              <FormLabel component="legend">
                If this audience works in a certian Division, what is that
                Division?
              </FormLabel>
              <RadioGroup
                aria-label="division"
                name="division"
                value={survey.division}
                onChange={handleRadioChange}
              >
                <FormControlLabel
                  value="marketing"
                  control={<Radio />}
                  label="Marketing"
                />
                <FormControlLabel
                  value="finance"
                  control={<Radio />}
                  label="Finance"
                />
                <FormControlLabel
                  value="management"
                  control={<Radio />}
                  label="Management"
                />
                <FormControlLabel value="hR" control={<Radio />} label="HR" />
                <FormControlLabel
                  value="operations"
                  control={<Radio />}
                  label="Operations"
                />
              </RadioGroup>
            </Box>
            <Box sx={{ p: 2 }}>
              <FormLabel component="legend">
                Is the audience Internal or External
              </FormLabel>
              <RadioGroup
                aria-label="internal-or-external"
                name="internalOrExternal"
                value={survey.internal_or_external}
                onChange={handleRadioChange}
              >
                <FormControlLabel
                  value="internal"
                  control={<Radio />}
                  label="Internal"
                />
                <FormControlLabel
                  value="external"
                  control={<Radio />}
                  label="External"
                />
              </RadioGroup>
            </Box>
            <Box sx={{ p: 2 }}>
              <FormLabel component="legend">
                How familiar is the audience with the subject of this
                visualization?
              </FormLabel>
              <RadioGroup
                aria-label="familiarity"
                name="familiarity"
                value={survey.familiarity}
                onChange={handleRadioChange}
              >
                <FormControlLabel
                  value="familiar"
                  control={<Radio />}
                  label="Familiar"
                />
                <FormControlLabel
                  value="unfamiliar"
                  control={<Radio />}
                  label="Unfamiliar"
                />
              </RadioGroup>
            </Box>
            <Box sx={{ p: 2 }}>
              <FormLabel component="legend">
                Does the audience expect the dashboard to be Interactive or
                Static?
              </FormLabel>
              <RadioGroup
                aria-label="interactive-or-static"
                name="preference"
                value={survey.preference}
                onChange={handleRadioChange}
              >
                <FormControlLabel
                  value="interactive"
                  control={<Radio />}
                  label="Interactive"
                />
                <FormControlLabel
                  value="static"
                  control={<Radio />}
                  label="Static"
                />
              </RadioGroup>
            </Box>
            <Box sx={{ p: 2 }}>
              <FormLabel component="legend">
                How much time does this audience have to spend with the
                dashboard?
              </FormLabel>
              <RadioGroup
                aria-label="time"
                name="time"
                value={survey.time}
                onChange={handleRadioChange}
              >
                <FormControlLabel
                  value="quick-glance"
                  control={<Radio />}
                  label="Quick Glance"
                />
                <FormControlLabel
                  value="in-depth-analysis"
                  control={<Radio />}
                  label="In-depth Analysis"
                />
                <FormControlLabel
                  value="both"
                  control={<Radio />}
                  label="Both"
                />
              </RadioGroup>
            </Box>
            <Box sx={{ p: 2 }}>
              <FormLabel component="legend">
                Will the audience be using this dashboard for Passive Monitoring
                or Active Decision Making?
              </FormLabel>
              <RadioGroup
                aria-label=""
                name="passiveOrActive"
                value={survey.passive_or_active}
                onChange={handleRadioChange}
              >
                <FormControlLabel
                  value="passive-monitoring"
                  control={<Radio />}
                  label="Passive Monitoring"
                />
                <FormControlLabel
                  value="active-decision-making"
                  control={<Radio />}
                  label="Active Decision Making"
                />
                <FormControlLabel
                  value="both"
                  control={<Radio />}
                  label="Both"
                />
              </RadioGroup>
            </Box>
            <Box sx={{ p: 2 }}>
              <Button
                className={classes.btnCenter}
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
              >
                Send
              </Button>
            </Box>
          </form>
        </Container>
      </main>
    </>
  )
}

export default withRouter(EditSurvey)
