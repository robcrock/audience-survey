const express = require("express")
const app = express()
const port = 5000
const cors = require("cors")
const pool = require("./db")

// middleware
app.use(cors())
app.use(express.json()) // gets us access to req.body

// ROUTES

// create a survey
app.post("/surveys", async (req, res) => {
  try {
    const {
      division,
      familiarity,
      internal_or_external,
      passive_or_active,
      preference,
      seniority,
      time,
    } = req.body

    const newSurvey = await pool.query(
      "INSERT INTO audience_survey (division, familiarity, internal_or_external, passive_or_active, preference, seniority, time) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        division,
        familiarity,
        internal_or_external,
        passive_or_active,
        preference,
        seniority,
        time,
      ]
    )

    res.json(newSurvey.rows[0])
  } catch (err) {
    console.error(err.message)
  }
})

// update a survey
app.put("/surveys/:id", async (req, res) => {
  try {
    const { id } = req.params
    const {
      division,
      familiarity,
      internal_or_external,
      passive_or_active,
      preference,
      seniority,
      time,
    } = req.body

    const updatedSurvey = await pool.query(
      "UPDATE audience_survey SET division = $1, familiarity = $2, internal_or_external = $3, passive_or_active = $4, preference = $5, seniority = $6, time = $7 WHERE survey_id = $8",
      [
        division,
        familiarity,
        internal_or_external,
        passive_or_active,
        preference,
        seniority,
        time,
        id,
      ]
    )

    res.json("Survey was updated!")
  } catch (err) {
    console.error(err.message)
  }
})

// get a survey
app.get("/surveys/:id", async (req, res) => {
  try {
    const { id } = req.params
    const survey = await pool.query(
      "SELECT * FROM audience_survey WHERE survey_id = $1",
      [id]
    )
    res.json(survey.rows[0])
  } catch (err) {
    console.error(message)
  }
})

// get all surveys
app.get("/surveys", async (req, res) => {
  try {
    const allSurveys = await pool.query("SELECT * FROM audience_survey")
    res.json(allSurveys.rows)
  } catch (err) {
    console.error(message)
  }
})

app.listen(port, () => {
  console.log(`Server has started on port ${port}`)
})

// delete a survey
app.delete("/surveys/:id", async (req, res) => {
  try {
    const { id } = req.params
    const deleteSurvey = await pool.query(
      "DELETE FROM audience_survey WHERE survey_id = $1",
      [id]
    )
    res.json("Survey was deleted!")
  } catch (err) {
    console.error(message)
  }
})
