'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onGetActivities = (event) => {
  event.preventDefault()
  api.getActivities()
    .then(ui.getBooksSuccess)
    .catch(ui.failure)
}

const onClearActivities = (event) => {
  event.preventDefault()
  ui.clearBooks()
}

const onDeleteActivity = (event) => {
  const id = $(event.target).data('id')
  event.preventDefault()
  api.deleteBook(id)
    .then(function (data) {
      onGetActivities(event)
    })
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#getActivitiesButton').on('click', onGetActivities)
  $('#clearActivitiesButton').on('click', onClearActivities)
  $('.content').on('click', 'button', onDeleteActivity)
}

module.exports = {
  addHandlers,
  onDeleteActivity
}
