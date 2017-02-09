'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex');
const Graph = require('../../lib/graph.js').Graph;


router.route('/').post(function(req, res, next){
    console.log(req.body)

    let storesInRadius = req.body.filteredStores.data;
    let selectedProducts = req.body.products;
    let numOfStores = parseInt(req.body.numOfStores);
    var result;

    var storesProductsGraph = new Graph();
    var selectedProductsIds = [];
    selectedProducts.forEach(function(curProduct){
        selectedProductsIds.push(curProduct.products.id);
    });
    var storesInRadiusIds = [];
    storesInRadius.forEach(function(curStore){
        storesInRadiusIds.push(curStore.id);
    });
    knex('stores_products').whereIn('product_id', selectedProductsIds).andWhere(function(){
        this.whereIn('store_id', storesInRadiusIds)
    })
        .then(function(storesProductsData){
            let optimalStores = [];
            var returnData;
            if(numOfStores == 1){
                storesProductsGraph.initialize(storesInRadius, selectedProducts, storesProductsData)
                result = storesProductsGraph.oneStopSearch(selectedProductsIds)
                optimalStores.push(result[0])
                returnData = storesProductsGraph.convertOneStoptoJSON(result, storesProductsData)
            } else {
                storesProductsGraph.initializeForMultiple(storesInRadius, selectedProducts, storesProductsData)
                result = storesProductsGraph.MultipleStopSearch(numOfStores, storesInRadius, selectedProductsIds)
                returnData = storesProductsGraph.convertOptMSTtoJSON(result, storesProductsData)
            }

            res.json(returnData);
        })
});

router.route('/convert').post(function (req, res, next) {
    let storesProducts = req.body.data;
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
    });
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
                    });
                });
            });
            res.json(results);
        })
    })
});



module.exports = router;
