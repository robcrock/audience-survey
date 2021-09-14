import React, { useState, useEffect } from "react"
import IconButton from "@material-ui/core/IconButton"
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

// Components
import MyMaterialForm from "./MyMaterialForm"

const SurveyDetail = ({ match }) => {
  const [survey, setSurvey] = useState([])

  const getSurvey = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/surveys/${match.params.id}`
      )
      const jsonData = await response.json()

      console.log(jsonData)

      setSurvey(jsonData)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getSurvey()
  }, [])

  return (
    <>
      <h1>Survey</h1>
      <ul>
        <li>Division: {survey.division}</li>
        <li>Familiarity: {survey.familiarity}</li>
        <li>Internal or External: {survey.internal_or_external}</li>
        <li>Passive or Active: {survey.poassive_or_active}</li>
        <li>Preference: {survey.preference}</li>
        <li>Seniority: {survey.seniority}</li>
        <li>Survey Id: {survey.survey_id}</li>
        <li>Time: {survey.time}</li>
      </ul>
    </>
  )
}

export default SurveyDetail
