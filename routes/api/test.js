'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex');
const Graph = require('../../lib/graph.js').Graph

router.route('/appriceme').get(function(req, res, next){
    var result;
    var numOfStores = 3;
    var storesInRadius = [
        {
            "id":1,
            "name":"Whole Foods Market",
            "address":"399 4th St, San Francisco, CA 94107",
            "phone_number":"(415) 618-0066",
            "store_url":"http://www.wholefoodsmarket.com/stores/soma",
            "store_image_url":"http://www.trbimg.com/img-568288cb/turbine/ct-whole-foods-overcharging-nyc-customers-20151229",
            "latitude":"37.780875000000",
            "longitude":"-122.399641000000",
            "created_at":"2016-11-14T20:26:16.000Z",
            "updated_at":"2016-11-14T20:26:16.000Z"
        },
        {
            "id":2,
            "name":"Bristol Farms",
            "address":"Westfield San Francisco Centre, 845 Market St #10, San Francisco, CA 94103",
            "phone_number":"(415) 979-0106",
            "store_url":"http://www.bristolfarms.com/locations/?loc=76",
            "store_image_url":"http://comediva.com/images/stories/bristol2222012.jpg",
            "latitude":"37.784100000000",
            "longitude":"-122.406144990000",
            "created_at":"2016-11-14T20:26:16.000Z",
            "updated_at":"2016-11-14T20:26:16.000Z"
        },
        {
            "id":3,
            "name":"Target",
            "address":"Metreon, 789 Mission St, San Francisco, CA 94103",
            "phone_number":"(415) 343-6272"
            ,"store_url":"http://www.target.com/sl/san-francisco-central/2766#?afid=storeloc&cpng=CA&Inm=san-francisco-central_2766"
            ,"store_image_url":"http://www.savingadvice.com/articles/wp-content/uploads/2015/09/237014_Martinsburg_VA_Target_38a77055-e931-4f2c-8455-bf8c7c8925f4-prv.jpg"
            ,"latitude":"37.784736000000"
            ,"longitude":"-122.403691000000"
            ,"created_at":"2016-11-14T20:26:16.000Z"
            ,"updated_at":"2016-11-14T20:26:16.000Z"
        },
        {
            "id":4,"name":"Safeway"
            ,"address":"298 King St, San Francisco, CA 94107"
            ,"phone_number":"(415) 633-1001"
            ,"store_url":"http://local.safeway.com/ca/san-francisco-2606.html?utm_source=G&utm_medium=Maps&utm_campaign=G+Places"
            ,"store_image_url":"http://www.operating-hours.com/wp-content/uploads/2015/08/SAFEWAY-STORE.jpg"
            ,"latitude":"37.776667000000"
            ,"longitude":"-122.394109000000"
            ,"created_at":"2016-11-14T20:26:16.000Z"
            ,"updated_at":"2016-11-14T20:26:16.000Z"
        },
        {
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
          }
    ];
    var selectedProducts = [{products: {
        id: 6,
        upc: "015141503495",
        plu: null,
        name: "Eggland's Best Grade A, White, Large Eggs (dozen)",
        brand_name: "Eggsland Best",
        brand_type: "Grade A, White, Large",
        size: "dozen",
        product_image_url: "http://scene7.targetimg1.com/is/image/Target/14711485?wid=1000&hei=1000"
    }}, {products: {
        id: 8,
        upc: "037000138815",
        plu: null,
        name: "Tide Original Scent Liquid (75 oz.)",
        brand_name: "Tide",
        brand_type: "Original Scent Liquid",
        size: "75 oz.",
        product_image_url: "https://i5.walmartimages.com/asr/3915ec1e-7968-456a-ad1d-e0897671e7c6_1.a9dac59d32cd4344d473213c761ae62b.jpeg"
    }}, {products: {
        id: 15,
        upc: "492840220616",
        plu: null,
        name: "Horizon Organic 1% Lowfat Milk (Gallon)",
        brand_name: "Horizon Organic",
        brand_type: "1% Lowfat Milk",
        size: "Gallon",
        product_image_url: "http://scene7.targetimg1.com/is/image/Target/14937615?wid=1000&hei=1000"
    }}, {products: {
      id: 47,
      upc: null,
      plu: "94050",
      name: "Cantaloupe (large) [organic]",
      brand_name: null,
      brand_type: null,
      size: "large",
      product_image_url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQzAZEG33Tn3FOuGvmwlzg6IUxrUpdgOX26xMrI5gAZU3SQ1MmAWQ",
      created_at: new Date('2016-11-14 20:26:16 UTC'),
      updated_at: new Date('2016-11-14 20:26:16 UTC')
  }}, {products: {
    id: 84,
    upc: "492310012048",
    plu: null,
    name: "Post Fruity Pebbles (11 oz.)",
    brand_name: "Post",
    brand_type: "Fruity Pebbles (11 oz.)",
    size: "11 oz.",
    product_image_url: "http://target.scene7.com/is/image/Target/14775577?wid=450&hei=450&fmt=pjpeg",
    created_at: new Date('2016-11-16 20:26:16 UTC'),
    updated_at: new Date('2016-11-16 20:26:16 UTC')
}}, {products: {
      id: 91,
      upc: "073435093305",
      plu: null,
      name: "King's Hawaiian Sweet Sliced Bread (16 oz.)",
      brand_name: "King's Hawaiian",
      brand_type: "Sweet Sliced Bread (16 oz.)",
      size: "16 oz.",
      product_image_url: "http://target.scene7.com/is/image/Target/16229584?wid=450&hei=450&fmt=pjpeg",
      created_at: new Date('2016-11-16 20:26:16 UTC'),
      updated_at: new Date('2016-11-16 20:26:16 UTC')
    }}
];
    var storesProductsGraph = new Graph();
    var selectedProductsIds = [];
    var storesInRadiusIds = [];

    selectedProducts.forEach(function(curProduct){
        selectedProductsIds.push(curProduct.products.id);
    });

    storesInRadius.forEach(function(curStore){
        storesInRadiusIds.push(curStore.id);
    });


    knex('stores_products').whereIn('product_id', selectedProductsIds).andWhere(function(){
        this.whereIn('store_id', storesInRadiusIds)
    })
    .then(function(storesProductsData){
        var returnData;
        if(numOfStores == 1){
            storesProductsGraph.initialize(storesInRadius, selectedProducts, storesProductsData)
            result = storesProductsGraph.oneStopSearch(selectedProductsIds)
            returnData = storesProductsGraph.convertOneStoptoJSON(result, storesProductsData)
        }else {
            storesProductsGraph.initializeForMultiple(storesInRadius, selectedProducts, storesProductsData)
            result = storesProductsGraph.MultipleStopSearch(numOfStores, storesInRadius, selectedProductsIds)
            returnData = storesProductsGraph.convertOptMSTtoJSON(result, storesProductsData)
        }
            res.json(returnData)
    })





});

router.route('/convert').get(function (req, res, next) {
    let storesProducts = [{
      product_id: 6,
      store_id: 3,
      availability: true,
      price: 3.99
  }, {
    product_id: 8,
    store_id: 4,
    availability: true,
    price: 9.49
}, {
  product_id: 15,
  store_id: 3,
  availability: true,
  price: 7.49
}, {
  product_id: 47,
  store_id: 7,
  availability: true,
  price: 0.99
}]
    var results;
    var optimalStores = [];
    var selectedProducts = [];
    storesProducts.forEach(function(currentStoreProduct){
        if(optimalStores.indexOf(currentStoreProduct.store_id) === -1) {
            optimalStores.push(currentStoreProduct.store_id)
        }
        if(selectedProducts.indexOf(currentStoreProduct.product_id) === -1) {
            selectedProducts.push(currentStoreProduct.product_id)
        }
    })
    knex('stores').whereIn('id', optimalStores).then(function (storeData) {
        results = storeData;
        return knex('products').whereIn('id', selectedProducts).then(function (productData) {
            results.forEach(function(currentStore){
                currentStore.products = [];
                productData.forEach(function (currentProduct) {
                    storesProducts.forEach(function(currentStoreProduct){
                        if (currentStoreProduct.store_id === currentStore.id && currentStoreProduct.product_id === currentProduct.id){
                            currentProduct.price = currentStoreProduct.price;
                            currentStore.products.push(currentProduct);
                        }
                    })
                })
            })
            res.json(results)
        })
    })
})


module.exports = router;