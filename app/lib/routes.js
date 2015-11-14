Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});

Router.route('login', {
  name: 'login',
  controller: 'LoginController',
  action: 'action',
  where: 'client'
});

Router.route('share', {
  name: 'share',
  controller: 'ShareController',
  action: 'action',
  where: 'client'
});

Router.route('confirmation', {
  name: 'confirmation',
  controller: 'ConfirmationController',
  action: 'action',
  where: 'client'
});

Router.route('thanks', {
  name: 'thanks',
  controller: 'ThanksController',
  action: 'action',
  where: 'client'
});

Router.onBeforeAction(function () {
  if (!Meteor.user() && !Meteor.loggingIn()) {
    this.redirect('/login');
  } else {
    this.next();
  }
}, {
  except: ['login']
});

Router.onBeforeAction(function () {
  if (Meteor.user()) {
    Router.go('/');
  } else {
    this.next();
  }
}, {
  only: ['login']
});