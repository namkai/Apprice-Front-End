'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex');
const Graph = require('../../lib/graph.js').Graph

router.route('/test').get(function(req, res, next){
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
        }
    ];
    var lat = '37.786734';
    var long = '-122.397807';
    var radius = '1'
    var url = `http://appriceapi.herokuapp.com/api/stores/search?lat=${lat}&long=${long}&radius=${radius}`;
    var selectedProducts = [{
        id: 6,
        upc: "015141503495",
        plu: null,
        name: "Eggland's Best Grade A, White, Large Eggs (dozen)",
        brand_name: "Eggsland Best",
        brand_type: "Grade A, White, Large",
        size: "dozen",
        product_image_url: "http://scene7.targetimg1.com/is/image/Target/14711485?wid=1000&hei=1000"
      }, {
        id: 8,
        upc: "037000138815",
        plu: null,
        name: "Tide Original Scent Liquid (75 oz.)",
        brand_name: "Tide",
        brand_type: "Original Scent Liquid",
        size: "75 oz.",
        product_image_url: "https://i5.walmartimages.com/asr/3915ec1e-7968-456a-ad1d-e0897671e7c6_1.a9dac59d32cd4344d473213c761ae62b.jpeg"
      }, {
        id: 15,
        upc: "492840220616",
        plu: null,
        name: "Horizon Organic 1% Lowfat Milk (Gallon)",
        brand_name: "Horizon Organic",
        brand_type: "1% Lowfat Milk",
        size: "Gallon",
        product_image_url: "http://scene7.targetimg1.com/is/image/Target/14937615?wid=1000&hei=1000"
    }];

    var storesProductsGraph = new Graph();
    //grab all id's from the selected products and filter the stores_products table
    //then pass in the json from that into the below func as the 3rd param.
    var selectedProductsIds = [];
    selectedProducts.forEach(function(curProduct){
        selectedProductsIds.push(curProduct.id);
    })
    var storesInRadiusIds = [];
    storesInRadius.forEach(function(curStore){
        storesInRadiusIds.push(curStore.id);
    })


    knex('stores_products').whereIn('product_id', selectedProductsIds).andWhere(function(){
        this.whereIn('store_id', storesInRadiusIds)
    })
        .then(function(storesProductsData){
            storesProductsGraph.initialize(storesInRadius, selectedProducts, storesProductsData)
            console.log('STARTING NOW', storesProductsGraph.oneStopSearch(selectedProductsIds), 'IN A WORLD WHERE PRODUCTS ARE SOMETHING ');
            let optimalStores = [];

            if(numOfStores === 1){
                let result = storesProductsGraph.oneStopSearch(selectedProductsIds)
                optimalStores.push(result[0])
            }
            var output = [];
            storesProductsData.forEach(function(currentStoreProduct){
                optimalStores.forEach(function(curStore){
                    if(currentStoreProduct.store_id === curStore) {
                        output.push(currentStoreProduct);
                    }

                })
            })
            console.log(output)
            res.send(output)
    })





});
router.route('/').post(function(req, res, next){
    let selectedProducts = req.body.products;
    let storesInRadius = req.body.filteredStores.data;
    let output = [];
    let numOfStores = req.body.numOfStores
    res.json(req.body)
});


module.exports = router;
