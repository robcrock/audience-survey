import React, { useState, useEffect } from "react"

const SurveyList = () => {
  const [surveys, setSurveys] = useState([])

  const getSurveys = async () => {
    console.log("Trying to get surveys")
    try {
      const response = await fetch("http://localhost:5000/surveys")
      const jsonData = await response.json()
      setSurveys(jsonData)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    console.log("useEffect Called")
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
              <td>{survey.survey_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default SurveyList
