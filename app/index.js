import React from "react"
import ReactDOM from "react-dom"
import * as Survey from "survey-react"
import "./index.css"

Survey.StylesManager.applyTheme("default")

var surveyJSON = {
  title: "Let's get to know our audience",
  description:
    "All of the questions in this survey are geared toward helping us better understand those we are design this dashboard for.",
  pages: [
    {
      name: "Page 1",
      elements: [
        {
          type: "radiogroup",
          name: "inernal_or_external",
          title: "Is the audience internal or external?",
          choices: [
            { value: "item1", text: "External" },
            { value: "item2", text: "Internal" },
            { value: "item3", text: "Both" },
          ],
        },
        {
          type: "checkbox",
          name: "industry",
          title: "What industry does this dashboard pertain to?",
          choices: [
            { value: "item1", text: "Goods-Producing" },
            { value: "item2", text: "Natural Resources and Mining" },
            { value: "item3", text: "Construction" },
            { value: "item4", text: "Manufacturing" },
            { value: "item5", text: "Service-Providing" },
            { value: "item6", text: "Trade, Transportation, and Utilities" },
            { value: "item7", text: "Information" },
            { value: "item8", text: "Financial Activities" },
            { value: "item9", text: "Professional and Business Services" },
            { value: "item10", text: "Education and Health Services" },
            { value: "item11", text: "Leisure and Hospitality" },
            { value: "item12", text: "Public Administration" },
          ],
          hasOther: true,
          otherText: "Other (please specify)",
          hasSelectAll: true,
        },
        {
          type: "radiogroup",
          name: "individual_or_group",
          title: "Is this dashboard for an individual or a group?",
          choices: [
            { value: "item1", text: "Individual" },
            { value: "item2", text: "Group" },
            { value: "item3", text: "Both" },
          ],
        },
        {
          type: "checkbox",
          name: "question1",
          title:
            "What division of the organization does the audience roughly fit into?",
          choices: [
            { value: "item1", text: "Marketing" },
            { value: "item2", text: "Finance" },
            { value: "item3", text: "Management" },
            { value: "item4", text: "HR" },
            { value: "item5", text: "Operations" },
          ],
          hasOther: true,
          otherText: "Other (please specify)",
        },
        {
          type: "rating",
          name: "familiarity",
          title:
            "How familiar is your audience with the subject of this dashboard?",
        },
        {
          type: "checkbox",
          name: "senority",
          title: "What would you say is the Seniority of the audience?",
          choices: [
            { value: "item1", text: "All Levels" },
            { value: "item2", text: "Low" },
            { value: "item3", text: "Medium" },
            { value: "item4", text: "High" },
            { value: "item5", text: "Doesn't Apply" },
          ],
        },
        {
          type: "checkbox",
          name: "time",
          title:
            "How much time does this audience generally have to spend looking at this dashboard?",
          choices: [
            { value: "item1", text: "< 2 Minutes" },
            { value: "item2", text: "2 to 5 Minutes" },
            { value: "item3", text: "5 to 10 Minutes" },
            { value: "item4", text: "10 to 30 Minutes" },
            { value: "item5", text: "> 30 Minutes" },
          ],
        },
        {
          type: "radiogroup",
          name: "intent",
          title: "What is the intent of the audience in viewing the dashboard?",
          choices: [
            { value: "item1", text: "Passive Monitoring" },
            { value: "item2", text: "Active Decision Making" },
            { value: "item3", text: "Both" },
          ],
        },
        {
          type: "radiogroup",
          name: "static_or_interactive",
          title: "Does the audience prefer a static or interactive dashboard?",
          choices: [
            { value: "item1", text: "Static" },
            { value: "item2", text: "Interactive" },
            { value: "item3", text: "Both" },
          ],
        },
      ],
    },
  ],
  showPageTitles: false,
  showQuestionNumbers: "off",
}

function sendDataToServer(survey) {
  //send Ajax request to your web server.
  alert("The results are:" + JSON.stringify(survey.data))
}

ReactDOM.render(
  <Survey.Survey json={surveyJSON} onComplete={sendDataToServer} />,
  document.getElementById("surveyContainer")
)
