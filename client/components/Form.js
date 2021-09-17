import React, { useState } from "react"
import { withRouter } from "react-router-dom"
import {
  CssBaseline,
  Box,
  Container,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  TextField,
  Typography,
} from "@material-ui/core"

// Styles
import useStyles from "../styles"

const defaultValues = {
  seniority: "",
  division: "",
  internalOrExternal: "",
  familiarity: "",
  preference: "",
  time: "",
  passiveOrActive: "",
}

const Form = (props) => {
  const classes = useStyles()
  const [formValues, setFormValues] = React.useState(defaultValues)
  const [textValue, setTextValue] = useState("")

  const handleRadioChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
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

  return (
    <>
      <CssBaseline />
      <main>
        <div className={classes.container}>
          <Container maxWidth="md">
            <Typography
              variant="h5"
              align="left"
              color="textSecondary"
              paragraph
            >
              Below you will find a series of questions. That will take you just
              a minute to fill out, but they will give our design team a huge
              headstart in designing you a great dashboard.
            </Typography>
            <form
              noValidate
              autoComplete="off"
              component="fieldset"
              onSubmit={handleSubmit}
            >
              <Box sx={{ p: 2 }}>
                <FormLabel component="legend">Audience Name</FormLabel>
                <TextField
                  id="standard-basic"
                  label="Type Name Here"
                  value={textValue}
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
                  value={formValues.seniority}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel
                    value="all"
                    control={<Radio />}
                    label="All"
                  />
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
                  <FormControlLabel
                    value="low"
                    control={<Radio />}
                    label="Low"
                  />
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
                  value={formValues.division}
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
                  value={formValues.internalOrExternal}
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
                  value={formValues.familiarity}
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
                  value={formValues.preference}
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
                  value={formValues.time}
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
                  Will the audience be using this dashboard for Passive
                  Monitoring or Active Decision Making?
                </FormLabel>
                <RadioGroup
                  aria-label=""
                  name="passiveOrActive"
                  value={formValues.passiveOrActive}
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

              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </Container>
        </div>
      </main>
    </>
  )
}

export default withRouter(Form)
