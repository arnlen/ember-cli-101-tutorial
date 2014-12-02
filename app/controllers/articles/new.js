import Ember from 'ember';

export default Ember.ObjectController.extend({
	isValid: Ember.computed(
		'description',
		function() {
			return !Ember.isEmpty(this.get('description'));
		}
	),
	actions: {
		save: function() {
			if (this.get('isValid')) {
				return true;
			} else {
				this.set('errorMessage', 'Description is missing');
				return false;
			}
		}
	}
});
