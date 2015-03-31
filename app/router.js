import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('sites', { path: '/' }, function() {
	  this.resource('site', { path: '/:site_slug' }, function() {
	    this.resource('pages', { path: '/' }, function() {
		    this.resource('page', { path: '/:page_slug' });
			});
		});
	});
});
