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
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value="gender"
        onChange={handleChange}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="(Disabled option)"
        />
      </RadioGroup>
    </FormControl>
  )
}

export default MyMaterialForm
