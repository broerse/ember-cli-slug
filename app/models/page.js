import DS from "ember-data";

var Page = DS.Model.extend({
	sort: DS.attr('number'),
  slug: DS.attr('string'),
	title: DS.attr('string'),
	body: DS.attr('string'),
	site: DS.belongsTo('site')
});

Page.reopenClass({
FIXTURES:[
   {
      "body" : "Route",
      "sort" : 200,
      "site" : 2,
      "slug" : "route",
      "id" : 1,
      "title" : "Route"
   },
   {
      "body" : "product info(1)",
      "sort" : 100,
      "site" : 3,
      "slug" : "info1",
      "id" : 2,
      "title" : "Product 1"
   },
   {
      "body" : "product (3)",
      "sort" : 300,
      "site" : 3,
      "slug" : "product3",
      "id" : 3,
      "title" : "Product 3"
   },
   {
      "body" : "Address",
      "sort" : 100,
      "site" : 2,
      "slug" : "adres",
      "id" : 4,
      "title" : "Address info"
   },
   {
      "body" : "Info 3 about",
      "sort" : 300,
      "site" : 1,
      "slug" : "info3",
      "id" : 5,
      "title" : "Info 3"
   },
   {
      "body" : "product (2)",
      "sort" : 200,
      "site" : 3,
      "slug" : "product2",
      "id" : 6,
      "title" : "Product 2"
   },
   {
      "body" : "Info 2 about",
      "sort" : 200,
      "site" : 1,
      "slug" : "info2",
      "id" : 7,
      "title" : "Info 2"
   },
   {
      "body" : "Info 1 about",
      "sort" : 100,
      "site" : 1,
      "slug" : "info1",
      "id" : 8,
      "title" : "Info 1"
   },
   {
      "body" : "Form",
      "sort" : 300,
      "site" : 2,
      "slug" : "contact",
      "id" : 9,
      "title" : "Contact me"
   }
]
});

export default Page;