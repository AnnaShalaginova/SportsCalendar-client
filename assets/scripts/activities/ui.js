'use strict'
// const showActivitiesTemplate = require('../templates/activity-listing.handlebars')

const store = require('../store')

const onSignUpSuccess = responseData => {
  console.log('success', responseData)
  $('#create-activity-message').text('Signed up successfully!')
  $('#create-activity-message').removeClass()
  $('#create-activity-message').addClass('success')
  $('#create-activity-message').html('Sign Up Successful!')
  $('#sign-up').hide()
  $('#sign-in').show()
  $('#create-activity-message').html('Please sign in to play.')
  setTimeout(() => {
    $('#create-activity-message').html('')
    $('#create-activity-message').removeClass('success')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
  $('#sign-up').hide()
}

const onSignUpFailure = responseData => {
  // console.log('failure', responseData)
  $('#create-activity-message').text('Sign up failed :(((')
  $('#create-activity-message').removeClass()
  $('#create-activity-message').addClass('failure')
  $('form').trigger('reset')
}

const onSignInSuccess = responseData => {
  // console.log('success', responseData)
  $('#create-activity-message').text('Signed in successfully!')
  $('#create-activity-message').removeClass()
  $('#create-activity-message').addClass('success')
  $('#game-board').removeClass('hide')
  // $('#game-board').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#activity-create').show()
  $('#sign-out').show()
  $('#change-password').show()
  $('#create-activity').show()
  $('#activity-create').show()
  $('#create-activity-message').html('You are in! Next step - create some sports activities!')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#create-activity-message').html('')
    $('#create-activity-message').removeClass('success')
  }, 5000)

  store.user = responseData.user
  $('form').trigger('reset')
  // console.log('store is', store)
}

const onSignInFailure = responseData => {
  // console.log('failure', responseData)
  $('#create-activity-message').text('Sign in failed :(((')
  $('#create-activity-message').removeClass()
  $('#create-activity-message').addClass('failure')
  $('form').trigger('reset')
}

const onChangePasswordSuccess = () => {
  $('#create-activity-message').html('Password Changed!')
  $('#change-password').hide()
  $('#create-activity-message').removeClass()
  $('#create-activity-message').addClass('success')
  $('form').trigger('reset')
}

const onChangePasswordFailure = () => {
  $('#create-activity-message').text('Password change failed!')
  $('#create-activity-message').removeClass()
  $('#create-activity-message').addClass('failure')
  $('form').trigger('reset')
}

const onCreateActivitySuccess = function (responseData) {
  store.responseData = responseData
  // console.log(store.game)
  // add success message to content
  $('#create-activity-message').html('Sports Activity Has Been Created!')
  $('#create-activity-message').addClass('success')

  // use setTimeout to allow the success message to stay for 5 seconds before
  // the message is replaced with '' and the 'success' class is removed
  setTimeout(() => {
    $('#create-activity-message').html('')
    $('#create-activity-message').removeClass('success')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')

  $('#get-activities').show()
}
const onSignOutSuccess = () => {
  $('#create-activity-message').text('Signed out successfully!')
  $('#create-activity-message').removeClass()
  $('#create-activity-message').addClass('success')
  $('#change-password').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#get-activities').hide()
  $('form').trigger('reset')
  $('#game-board').hide()
}

const onSignOutFailure = () => {
  $('#create-activity-message').text('Sign out failed :(((')
  $('#create-activity-message').removeClass()
  $('#create-activity-message').addClass('failure')
  $('form').trigger('reset')
}

const onGetActivitiesSuccess = responseData => {
  $('#create-activity-message').html('hello')
  console.log('Dachshund')
}

const clearActivities = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onCreateActivitySuccess,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onGetActivitiesSuccess,
  clearActivities,
  failure
}
