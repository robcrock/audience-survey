import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import { Typography, AppBar, CssBaseline, Toolbar } from "@material-ui/core"
import HomeIcon from "@material-ui/icons/Home"

// Styles
import useStyles from "../styles"

const Header = () => {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Link to="/">
            <HomeIcon className={classes.icon} />
            <Typography variant="h6">Home</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
