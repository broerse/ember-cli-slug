import Ember from "ember";

export default Ember.Route.extend({
  model: function(params) {
    console.log(params.page_slug);
    var pages = this.modelFor('pages');
    return pages.findBy('slug', params.page_slug);
  },

  serialize: function(model) {
    return { page_slug: model.get('slug')};
  }
});
