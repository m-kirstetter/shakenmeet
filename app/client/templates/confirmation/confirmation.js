/*****************************************************************************/
/* Confirmation: Event Handlers */
/*****************************************************************************/
Template.Confirmation.events({
	'click [data-confirm]': function (e, tmpl) {
		e.preventDefault();
		Router.go('thanks');
	}
});

/*****************************************************************************/
/* Confirmation: Helpers */
/*****************************************************************************/
Template.Confirmation.helpers({
});

/*****************************************************************************/
/* Confirmation: Lifecycle Hooks */
/*****************************************************************************/
Template.Confirmation.created = function () {
};

Template.Confirmation.rendered = function () {
};

Template.Confirmation.destroyed = function () {
};
