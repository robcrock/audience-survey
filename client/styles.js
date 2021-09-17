import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  btnCenter: {
    justifyContent: "center",
  },
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  icon: {
    marginRight: "20px",
  },
  button: {
    marginTop: "40px",
  },
  cardGrid: {
    padding: "20px 0",
  },
  card: {
    height: "100%",
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9 Ratio
  },
  cardContent: {
    flexGrow: "1",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: "50px 0",
  },
  form: {
    margin: theme.spacing(4, 0, 0, 4),
  },
  formLabel: {
    margin: theme.spacing(4, 0, 0, 0),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
}))

export default useStyles
