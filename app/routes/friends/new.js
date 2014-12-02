import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.createRecord('friend', {
			firstName: 'Jack',
			lastName: 'Jefferson',
			email: 'jackjafferson@oss.fr',
			twitter: 'oss283'
		});
	}
});
