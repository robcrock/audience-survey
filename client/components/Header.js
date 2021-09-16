import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import {
  Typography,
  AppBar,
  CssBaseline,
  Toolbar,
  IconButton,
} from "@material-ui/core"
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
          <Link to="/" className={classes.link}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="home"
            >
              <HomeIcon />
            </IconButton>
          </Link>
          <Link to="/" className={classes.link}>
            <Typography className={classes.link} variant="h6">
              Home
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
