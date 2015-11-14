Template.MasterLayout.helpers({
});

Template.MasterLayout.events({
	'click [data-logout]': function (e, tmpl) {
		Meteor.logout();
	}
});
