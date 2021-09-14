import React, { useState, useEffect } from "react"
import IconButton from "@material-ui/core/IconButton"
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded"
import DeleteForeverIcon from "@material-ui/icons/DeleteForever"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

// Components
import SurveyDetail from "./SurveyDetail"
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

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/surveys/${id}`, {
        method: "DELETE",
      })
      // console.log(surveys)
      setSurveys(surveys.filter((survey) => survey.survey_id !== id))
    } catch (err) {
      console.error(err.message)
    }
    // fetch("http://localhost:5000/surveys", {
    //   method: "DELETE",
    //   body: JSON.stringify(data.formValues),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((response) => console.log("Success:", JSON.stringify(response)))
    //   .catch((error) => console.error("Error:", error))
    return
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
              <td>
                <IconButton
                  aria-label="delete survey"
                  onClick={() => handleDelete(survey.survey_id)}
                >
                  <DeleteForeverIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <IconButton aria-label="add survey">
        <Link to="/add-survey">
          <AddCircleRoundedIcon />
        </Link>
      </IconButton>
    </>
  )
}

export default SurveyList
