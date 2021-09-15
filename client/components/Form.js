import React, { useState } from "react"
import { withRouter } from "react-router-dom"
import {
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  TextField,
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
    console.log(evt)

    let data = { formValues }
    data.formValues.internal_or_external = data.formValues.internalOrExternal
    delete data.formValues.internalOrExternal
    data.formValues.passive_or_active = data.formValues.passiveOrActive
    delete data.formValues.passiveOrActive

    // Add the audienceName to the other data
    data.formValues.name = textValue
    console.log(data)

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
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      component="fieldset"
      onSubmit={handleSubmit}
    >
      <FormLabel component="legend">Give you Audience a name</FormLabel>
      <TextField
        id="standard-basic"
        label="Audience Name"
        value={textValue}
        onChange={handleTextChange}
      />
      <FormLabel component="legend">
        What is the Seniority Level of this audience?
      </FormLabel>
      <RadioGroup
        aria-label="seniority"
        name="seniority"
        value={formValues.seniority}
        onChange={handleRadioChange}
      >
        <FormControlLabel value="all" control={<Radio />} label="All" />
        <FormControlLabel value="high" control={<Radio />} label="High" />
        <FormControlLabel value="medium" control={<Radio />} label="Medium" />
        <FormControlLabel value="low" control={<Radio />} label="Low" />
      </RadioGroup>

      <FormLabel component="legend">
        If this audience works in a certian Division, what is that Division?
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
        <FormControlLabel value="finance" control={<Radio />} label="Finance" />
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

      <FormLabel component="legend">
        How familiar is the audience with the subject of this visualization?
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

      <FormLabel component="legend">
        Does the audience expect the dashboard to be Interactive or Static?
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
        <FormControlLabel value="static" control={<Radio />} label="Static" />
      </RadioGroup>

      <FormLabel component="legend">
        How much time does this audience have to spend with the dashboard?
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
        <FormControlLabel value="both" control={<Radio />} label="Both" />
      </RadioGroup>

      <FormLabel component="legend">
        Will the audience be using this dashboard for Passive Monitoring or
        Active Decision Making?
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
        <FormControlLabel value="both" control={<Radio />} label="Both" />

        <Button type="submit" variant="contained" color="primary">
          Subscribe
        </Button>
      </RadioGroup>
    </form>
  )
}

export default withRouter(Form)
