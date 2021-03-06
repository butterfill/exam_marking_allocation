import { FlowRouter } from 'meteor/kadira:flow-router'
import { BlazeLayout } from 'meteor/kadira:blaze-layout'
import { AccountsTemplates } from 'meteor/useraccounts:core'

// Import needed templates
import '../../ui/layouts/body/body.js'
import '../../ui/pages/auth/auth.js'
import '../../ui/pages/not-found/not-found.js'

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action () {
    BlazeLayout.render('App_body', { main: 'App_home' });
  }
})

FlowRouter.route('/test', {
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  name: 'App.home',
  action () {
    BlazeLayout.render('App_body', { main: 'App_test' });
  }
})

FlowRouter.notFound = {
  action () {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  }
}
