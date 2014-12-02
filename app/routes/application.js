import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		save: function() {
			console.log("Save in APPLICATION");
			return true;
		},
		cancel: function() {
			console.log("Cancel in APPLICATION");
			return true;
		}
	}
});