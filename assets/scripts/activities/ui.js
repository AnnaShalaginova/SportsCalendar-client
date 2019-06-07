'use strict'
const showActivitiesTemplate = require('../templates/activity-listing.handlebars')

const getActivitiesSuccess = (data) => {
  console.log(data)
  const showActivitiesHtml = showActivitiesTemplate({ activities: data.activities })
  $('.content').html(showActivitiesHtml)
}

const clearActivities = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getActivitiesSuccess,
  clearActivities,
  failure
}
