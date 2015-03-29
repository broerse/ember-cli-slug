import Ember from "ember";

export default Ember.Route.extend({
	model: function() {
		return this.store.find('site');
	},
	
	redirect: function(model, transition) {
    if (transition.targetName === 'sites.index') {
      this.transitionTo('site', model.get('firstObject'));
    }
  }

});
