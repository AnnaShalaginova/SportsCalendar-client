'use strict'

const config = require('../config')

const getActivities = function () {
  return $.ajax({
    url: config.apiUrl + '/activities'
  })
}

const deleteActivity = function (id) {
  return $.ajax({
    url: config.apiUrl + '/activities/' + id,
    method: 'DELETE'
  })
}
module.exports = {
  getActivities,
  deleteActivity
}
