import React, { useState, useEffect } from "react"
import IconButton from "@material-ui/core/IconButton"
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

// Components
import MyMaterialForm from "./MyMaterialForm"

const SurveyList = () => {
  const [surveys, setSurveys] = useState([])

  const getSurveys = async () => {
    try {
      const response = await fetch("http://localhost:5000/surveys")
      const jsonData = await response.json()
      setSurveys(jsonData)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getSurveys()
  }, [])

  return (
    <>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Survey ID</th>
          </tr>
        </thead>
        <tbody>
          {surveys.map((survey) => (
            <tr key={survey.survey_id}>
              <td>
                <Link to={`/${survey.survey_id}`}>{survey.survey_id}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/add-survey">
        <IconButton aria-label="add survey">
          <AddCircleRoundedIcon />
        </IconButton>
      </Link>
    </>
  )
}

export default SurveyList
