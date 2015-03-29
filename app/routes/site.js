import Ember from "ember";

export default Ember.Route.extend({
 model: function(params) {
   console.log(params.site_slug);
   var sites = this.modelFor('sites');
   return sites.findBy('slug', params.site_slug);
 },
 
 serialize: function(model) {
    return { site_slug: model.get('slug')};
  }
});
