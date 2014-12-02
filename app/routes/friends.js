import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		delete: function(friend) {
			friend.destroyRecord();
			console.log("Deleted in friends router");
			this.transitionTo('friends.index');
			return false;
		}
	}
});
