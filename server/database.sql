CREATE DATABASE survey;

CREATE TABLE audience_survey(
  survey_id SERIAL PRIMARY KEY,
  division VARCHAR(255),
  familiarity VARCHAR(255),
  internal_or_external VARCHAR(255),
  passive_or_active VARCHAR(255),
  preference VARCHAR(255),
  seniority VARCHAR(255),
  time VARCHAR(255)
)

INSERT INTO audience_survey(
  division,
  familiarity,
  internal_or_external,
  passive_or_active,
  prefernece,
  seniority,
  time
)
VALUES($1, $2, $3, $4, $5, $6, $7)

UPDATE audience_survey
SET division = $1,
  familiarity = $2,
  internal_or_external = $3,
  passive_or_active = $4,
  prefernece = $5,
  seniority = $6,
  time = $7 WHERE survey_id = $8

UPDATE audience_survey SET division = "hello", familiarity = "", internal_or_external = "", passive_or_active = "", prefernece = "", seniority = "", time = "" WHERE survey_id = 3