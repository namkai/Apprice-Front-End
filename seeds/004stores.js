
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stores').del()
    .then(function () {
      return Promise.all([
          knex('stores').insert({
                      id: 1,
                      name: "Whole Foods Market",
                      address: "399 4th St, San Francisco, CA 94107",
                      phone_number: "(415) 618-0066",
                      store_url: "http://www.wholefoodsmarket.com/stores/soma",
                      store_image_url: "http://www.trbimg.com/img-568288cb/turbine/ct-whole-foods-overcharging-nyc-customers-20151229",
                      latitude: 37.7808750,
                      longitude: -122.3996410,
                      created_at: new Date('2016-11-14 20:26:16 UTC'),
                      updated_at: new Date('2016-11-14 20:26:16 UTC')
                    }).returning('id'),

                  knex('stores').insert({
                      id: 2,
                      name: "Bristol Farms",
                      address: "Westfield San Francisco Centre, 845 Market St #10, San Francisco, CA 94103",
                      phone_number: "(415) 979-0106",
                      store_url: "http://www.bristolfarms.com/locations/?loc=76",
                      store_image_url: "http://comediva.com/images/stories/bristol2222012.jpg",
                      latitude: 37.7841,
                      longitude: -122.40614499,
                      created_at: new Date('2016-11-14 20:26:16 UTC'),
                      updated_at: new Date('2016-11-14 20:26:16 UTC')
                    }).returning('id'),

                  knex('stores').insert({
                      id: 3,
                      name: "Target",
                      address: "Metreon, 789 Mission St, San Francisco, CA 94103",
                      phone_number: "(415) 343-6272",
                      store_url: "http://www.target.com/sl/san-francisco-central/2766#?afid=storeloc&cpng=CA&Inm=san-francisco-central_2766",
                      store_image_url: "http://www.savingadvice.com/articles/wp-content/uploads/2015/09/237014_Martinsburg_VA_Target_38a77055-e931-4f2c-8455-bf8c7c8925f4-prv.jpg",
                      latitude: 37.784736,
                      longitude: -122.403691,
                      created_at: new Date('2016-11-14 20:26:16 UTC'),
                      updated_at: new Date('2016-11-14 20:26:16 UTC')
                    }).returning('id'),

                  knex('stores').insert({
                      id: 4,
                      name: "Safeway",
                      address: "298 King St, San Francisco, CA 94107",
                      phone_number: "(415) 633-1001",
                      store_url: "http://local.safeway.com/ca/san-francisco-2606.html?utm_source=G&utm_medium=Maps&utm_campaign=G+Places",
                      store_image_url: "http://www.operating-hours.com/wp-content/uploads/2015/08/SAFEWAY-STORE.jpg",
                      latitude: 37.776667,
                      longitude: -122.394109,
                      created_at: new Date('2016-11-14 20:26:16 UTC'),
                      updated_at: new Date('2016-11-14 20:26:16 UTC')
                    }).returning('id'),

                  knex('stores').insert({
                      id: 5,
                      name: "Safeway",
                      address: "Potrero Center, 2300 16th St #203, San Francisco, CA 94103",
                      phone_number: "(415) 575-1120",
                      store_url: "http://local.safeway.com/ca/san-francisco-1490.html?utm_source=G&utm_medium=Maps&utm_campaign=G+Places",
                      store_image_url: "http://www.operating-hours.com/wp-content/uploads/2015/08/SAFEWAY-STORE.jpg",
                      latitude: 37.7659054,
                      longitude: -122.40796499,
                      created_at: new Date('2016-11-14 20:26:16 UTC'),
                      updated_at: new Date('2016-11-14 20:26:16 UTC')
                    }).returning('id'),

                  knex('stores').insert({
                      id: 6,
                      name: "Foodsco",
                      address: "1800 Folsom St, San Francisco, CA 94103",
                      phone_number: "(415) 558-9137",
                      store_url: "https://www.foodsco.net/storeHours?store=70400357",
                      store_image_url: "http://amybsherman.com/images/foodsco.jpg",
                      latitude: 37.7683560,
                      longitude: -122.4157630,
                      created_at: new Date('2016-11-14 20:26:16 UTC'),
                      updated_at: new Date('2016-11-14 20:26:16 UTC')
                    }).returning('id'),

                  knex('stores').insert({
                      id: 7,
                      name: "Trader Joe's",
                      address: "555 9th St, San Francisco, CA 94103",
                      phone_number: "(415) 863-1292",
                      store_url: "http://www.traderjoes.com/",
                      store_image_url: "http://www.traderjoes.com/images/announcement/778-Davie-Store.jpg",
                      latitude: 37.7707200,
                      longitude: -122.4075760,
                      created_at: new Date('2016-11-14 20:26:16 UTC'),
                      updated_at: new Date('2016-11-14 20:26:16 UTC')
                    }).returning('id')
      ]);
    });
};
