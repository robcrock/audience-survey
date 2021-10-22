// Run the create database and table to set up your postgres
CREATE DATABASE survey;

CREATE TABLE audience_survey(
  survey_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  division VARCHAR(255),
  familiarity VARCHAR(255),
  internal_or_external VARCHAR(255),
  passive_or_active VARCHAR(255),
  preference VARCHAR(255),
  seniority VARCHAR(255),
  time VARCHAR(255)
)

// The queries below are just examples
INSERT INTO audience_survey(
  name,
  division,
  familiarity,
  internal_or_external,
  passive_or_active,
  prefernece,
  seniority,
  time
)
VALUES($1, $2, $3, $4, $5, $6, $7, $8)

UPDATE audience_survey
SET name = $1,
  division = $2,
  familiarity = $3,
  internal_or_external = $4,
  passive_or_active = $5,
  prefernece = $6,
  seniority = $7,
  time = $8 WHERE survey_id = $9

UPDATE audience_survey SET division = "hello", familiarity = "", internal_or_external = "", passive_or_active = "", prefernece = "", seniority = "", time = "" WHERE survey_id = 3

ALTER TABLE audience_survey
ADD COLUMN name VARCHAR(255);