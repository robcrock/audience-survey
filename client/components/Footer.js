import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import { Typography } from "@material-ui/core"

// Styles
import useStyles from "../styles"

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutter="bottom">
        Footer
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary">
        Some random text to fill in this footer.
      </Typography>
    </footer>
  )
}

export default Footer
