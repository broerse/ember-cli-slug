import DS from "ember-data";

var Site = DS.Model.extend({
	sort: DS.attr('number'),
	slug: DS.attr('string'),
	title: DS.attr('string'),
	pages: DS.hasMany('page', {async: true})
});

Site.reopenClass({
FIXTURES:[
   {
      "sort" : 100,
      "slug" : "info",
      "id" : 1,
      "title" : "Info",
      "pages" : [
         5,
         7,
         8
      ]
   },
   {
      "sort" : 300,
      "slug" : "contact",
      "id" : 2,
      "title" : "Contact info",
      "pages" : [
         1,
         4,
         9
      ]
   },
   {
      "sort" : 200,
      "slug" : "producs",
      "id" : 3,
      "title" : "About Producs",
      "pages" : [
         2,
         3,
         6
      ]
   }
]
});

export default Site;