import React from "react"
import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import RadioGroup from "@material-ui/core/RadioGroup"
import Radio from "@material-ui/core/Radio"

function MyMaterialForm() {
  const handleChange = (event) => {
    event.preventDefault()
    if (!event.target.checkValidity()) {
      this.setState({
        invalid: true,
        displayErrors: true,
      })
      return
    }
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">
        What is the Seniority Level of this audience?
      </FormLabel>
      <RadioGroup
        aria-label="senoriority"
        name="senority"
        value=""
        onChange={handleChange}
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
        value=""
        onChange={handleChange}
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
        name="internal-or-external"
        value=""
        onChange={handleChange}
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
        value=""
        onChange={handleChange}
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
        name="interactive-or-static"
        value=""
        onChange={handleChange}
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
        value=""
        onChange={handleChange}
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
        name="passive-or-active"
        value="passive-or-active"
        onChange={handleChange}
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
      </RadioGroup>
    </FormControl>
  )
}

export default MyMaterialForm
