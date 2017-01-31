"use strict";

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      return Promise.all([
          knex('products').insert({
                    id: 1,
                    upc: "072250037129",
                    plu: null,
                    name: "Nature's Own 100% Whole Wheat (20 oz.)",
                    brand_name: "Nature's Own",
                    brand_type: "100% Whole Wheat",
                    size: "20 oz.",
                    product_image_url: "http://scene7.targetimg1.com/is/image/Target/13159012?wid=410&hei=410",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 2,
                    upc: "447000305306",
                    plu: null,
                    name: "Oscar Mayer Deli Fresh Smoked Turkey (9 oz.)",
                    brand_name: "Oscar Mayer",
                    brand_type: "Deli Fresh Smoked Turkey",
                    size: "9 oz.",
                    product_image_url: "http://scene7.targetimg1.com/is/image/Target/12945825?wid=1000&hei=1000",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 3,
                    upc: "492100100818",
                    plu: null,
                    name: "Oscar Mayer Deli Fresh Smoked Turkey (16 oz.)",
                    brand_name: "Oscar Mayer",
                    brand_type: "Deli Fresh Smoked Turkey",
                    size: "16 oz.",
                    product_image_url: "http://scene7.targetimg1.com/is/image/Target/14766741?wid=410&hei=410",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 4,
                    upc: "051500241912",
                    plu: null,
                    name: "JIF Creamy Peanut Butter (12 oz.)",
                    brand_name: "JIF",
                    brand_type: "Creamy Peanut Butter",
                    size: "12 oz.",
                    product_image_url: "http://c.shld.net/rpx/i/s/i/spin/image/spin_prod_ec_775596101",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 5,
                    upc: "051500255162",
                    plu: null,
                    name: "JIF Creamy Peanut Butter (16 oz.)",
                    brand_name: "JIF",
                    brand_type: "Creamy Peanut Butter",
                    size: "16 oz.",
                    product_image_url: "https://pics.drugstore.com/prodimg/494944/450.jpg",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 6,
                    upc: "015141503495",
                    plu: null,
                    name: "Eggland's Best Grade A, White, Large Eggs (dozen)",
                    brand_name: "Eggsland Best",
                    brand_type: "Grade A, White, Large",
                    size: "dozen",
                    product_image_url: "http://scene7.targetimg1.com/is/image/Target/14711485?wid=1000&hei=1000",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 7,
                    upc: "037000876243",
                    plu: null,
                    name: "Tide Original Scent Liquid (40 oz.)",
                    brand_name: "Tide",
                    brand_type: "Original Scent Liquid",
                    size: "50 oz.",
                    product_image_url: "https://pics.drugstore.com/prodimg/187687/450.jpg",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 8,
                    upc: "037000138815",
                    plu: null,
                    name: "Tide Original Scent Liquid (75 oz.)",
                    brand_name: "Tide",
                    brand_type: "Original Scent Liquid",
                    size: "75 oz.",
                    product_image_url: "https://i5.walmartimages.com/asr/3915ec1e-7968-456a-ad1d-e0897671e7c6_1.a9dac59d32cd4344d473213c761ae62b.jpeg",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 9,
                    upc: "663157244378",
                    plu: null,
                    name: "Tide Original Scent Liquid (100 oz.)",
                    brand_name: "Tide",
                    brand_type: "Original Scent Liquid",
                    size: "100 oz.",
                    product_image_url: "http://i.ebayimg.com/00/s/NzUwWDc1MA==/z/iYkAAOSwzaJX-gun/$_57.JPG",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 10,
                    upc: "492840614033",
                    plu: null,
                    name: "Horizon Organic Whole Milk (1/2 gallon)",
                    brand_name: "Horizon Organic",
                    brand_type: "Whole Milk",
                    size: "1/2 gallon",
                    product_image_url: "http://scene7.targetimg1.com/is/image/Target/14937629?wid=1000&hei=1000",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 11,
                    upc: "742365228407",
                    plu: null,
                    name: "Horizon Organic Whole Milk (Gallon)",
                    brand_name: "Horizon Organic",
                    brand_type: "Whole Milk",
                    size: "Gallon",
                    product_image_url: "http://scene7.targetimg1.com/is/image/Target/13453571?wid=1000&hei=1000",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 12,
                    upc: "492840614026",
                    plu: null,
                    name: "Horizon Organic 2% Reduced Fat Milk (1/2 gallon)",
                    brand_name: "Horizon Organic",
                    brand_type: "2% Reduced Fat Milk",
                    size: "1/2 gallon",
                    product_image_url: "http://scene7.targetimg1.com/is/image/Target/14937628?wid=1000&hei=1000",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 13,
                    upc: "742365228209",
                    plu: null,
                    name: "Horizon Organic 2% Reduced Fat Milk (Gallon)",
                    brand_name: "Horizon Organic",
                    brand_type: "2% Reduced Fat Milk",
                    size: "Gallon",
                    product_image_url: "http://scene7.targetimg1.com/is/image/Target/13453574?wid=1000&hei=1000",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 14,
                    upc: "492840614019",
                    plu: null,
                    name: "Horizon Organic 1% Lowfat Milk (1/2 gallon)",
                    brand_name: "Horizon Organic",
                    brand_type: "1% Lowfat Milk",
                    size: "1/2 gallon",
                    product_image_url: "http://scene7.targetimg1.com/is/image/Target/14937627?wid=1000&hei=1000",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 15,
                    upc: "492840220616",
                    plu: null,
                    name: "Horizon Organic 1% Lowfat Milk (Gallon)",
                    brand_name: "Horizon Organic",
                    brand_type: "1% Lowfat Milk",
                    size: "Gallon",
                    product_image_url: "http://scene7.targetimg1.com/is/image/Target/14937615?wid=1000&hei=1000",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 16,
                    upc: "492840614002",
                    plu: null,
                    name: "Horizon Organic Fat-Free Milk (1/2 gallon)",
                    brand_name: "Horizon Organic",
                    brand_type: "Fat-Free Milk",
                    size: "1/2 gallon",
                    product_image_url: "http://scene7.targetimg1.com/is/image/Target/14937626?wid=1000&hei=1000",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 17,
                    upc: "742365024399",
                    plu: null,
                    name: "Horizon Organic Fat-Free Milk (Gallon)",
                    brand_name: "Horizon Organic",
                    brand_type: "Fat-Free Milk",
                    size: "Gallon",
                    product_image_url: "https://i5.walmartimages.com/asr/fed21da9-0611-43f8-a8c3-e162a54af315_1.deea86ea0ec2916d236c0acefbcb9c8b.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 18,
                    upc: "028400598125",
                    plu: null,
                    name: "Lay's Classic Potato Chips (10.25 oz.)",
                    brand_name: "Lay's",
                    brand_type: "Classic Potato Chips",
                    size: "10.25 oz.",
                    product_image_url: "http://c.shld.net/rpx/i/s/i/spin/10056965/prod_1878512212",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 19,
                    upc: "028400421775",
                    plu: null,
                    name: "Lay's Classic Potato Chips (15.75 oz.)",
                    brand_name: "Lay's",
                    brand_type: "Classic Potato Chips",
                    size: "15.75 oz.",
                    product_image_url: "http://i.ebayimg.com/00/s/Njk5WDUwMA==/z/yfQAAOSwZJBX~dnN/$_12.JPG",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 20,
                    upc: "013800558121",
                    plu: null,
                    name: "Stouffer's Lasagna with Meat Sauce (19 oz.)",
                    brand_name: "Stouffer's",
                    brand_type: "Lasagna with Meat Sauce",
                    size: "19 oz.",
                    product_image_url: "http://c.shld.net/rpx/i/s/i/spin/10127449/prod_ec_1688550102",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 21,
                    upc: "138001433340",
                    plu: null,
                    name: "Stouffer's Lasagna with Meat Sauce (38 oz.)",
                    brand_name: "Stouffer's",
                    brand_type: "Lasagna with Meat Sauce",
                    size: "38 oz.",
                    product_image_url: "http://scene7.targetimg1.com/is/image/Target/13291541?wid=1000&hei=1000",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 22,
                    upc: "013800232601",
                    plu: null,
                    name: "Stouffer's Lasagna with Meat Sauce (57 oz.)",
                    brand_name: "Stouffer's",
                    brand_type: "Lasagna with Meat Sauce",
                    size: "57 oz.",
                    product_image_url: "http://ecx.images-amazon.com/images/I/31gTzkiYkyL._SL160_.jpg",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 23,
                    upc: "016000665903",
                    plu: null,
                    name: "Honey Nut Cheerios (12.25 oz.)",
                    brand_name: "Cheerios",
                    brand_type: "Honey Nut",
                    size: "12.25 oz.",
                    product_image_url: "http://c.shld.net/rpx/i/s/i/spin/image/spin_prod_ec_765894701",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 24,
                    upc: "016000275713",
                    plu: null,
                    name: "Honey Nut Cheerios (17 oz.)",
                    brand_name: "Cheerios",
                    brand_type: "Honey Nut",
                    size: "17 oz.",
                    product_image_url: "http://www.meijer.com/assets/product_images/styles/xlarge/1001029_016000275713_A_400.jpg",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 25,
                    upc: "016000483668",
                    plu: null,
                    name: "Honey Nut Cheerios (21.06 oz.)",
                    brand_name: "Cheerios",
                    brand_type: "Honey Nut",
                    size: "21.06 oz.",
                    product_image_url: "http://www.meijer.com/assets/product_images/styles/xlarge/1001029_016000483668_A_400.jpg",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 26,
                    upc: "049000000443",
                    plu: null,
                    name: "Coca-Cola Classic (20 oz.)",
                    brand_name: "Coca-Cola",
                    brand_type: "Classic",
                    size: "20 oz.",
                    product_image_url: "http://www.officedepot.com/pictures/us/od/sk/lg/417690_sk_lg.jpg",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 27,
                    upc: "049000050103",
                    plu: null,
                    name: "Coca-Cola Classic (2 L)",
                    brand_name: "Coca-Cola",
                    brand_type: "Classic",
                    size: "2 L",
                    product_image_url: "http://ecx.images-amazon.com/images/I/41nTYaCBlUL._SL160_.jpg",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 28,
                    upc: null,
                    plu: "4011",
                    name: "Bananas (yellow)",
                    brand_name: null,
                    brand_type: null,
                    size: null,
                    product_image_url: "http://globalblurb.com/wp-content/uploads/2016/02/Bananas-1.jpg",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 29,
                    upc: null,
                    plu: "4011",
                    name: "Bananas (yellow) [organic]",
                    brand_name: null,
                    brand_type: null,
                    size: null,
                    product_image_url: "http://cdn3.volusion.com/kalng.kxgpu/v/vspfiles/photos/FSSA60008-2.jpg",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 30,
                    upc: null,
                    plu: 4050,
                    name: "Cantaloupe (large)",
                    brand_name: null,
                    brand_type: null,
                    size: "large",
                    product_image_url: "http://mysquarefootgarden.net/wp-content/uploads/cantaloupe.jpg",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 31,
                    upc: "048001353565",
                    plu: null,
                    name: "Best Foods Real Mayonnaise (11.5 oz.)",
                    brand_name: "Best Foods",
                    brand_type: "Real Mayonnaise",
                    size: "11.5 oz.",
                    product_image_url: "http://ecx.images-amazon.com/images/I/41-JEYd5K1L._SL160_.jpg",
                    created_at: new Date('2016-11-15 20:26:16 UTC'),
                    updated_at: new Date('2016-11-15 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 32,
                    upc: "048001354494",
                    plu: null,
                    name: "Best Foods Real Mayonnaise (20 oz.)",
                    brand_name: "Best Foods",
                    brand_type: "Real Mayonnaise",
                    size: "20 oz.",
                    product_image_url: "http://ecx.images-amazon.com/images/I/31MzA3EpRkL._SL160_.jpg",
                    created_at: new Date('2016-11-15 20:26:16 UTC'),
                    updated_at: new Date('2016-11-15 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 33,
                    upc: "048001354715",
                    plu: null,
                    name: "Best Foods Light Mayonnaise (11.5 oz.)",
                    brand_name: "Best Foods",
                    brand_type: "Light Mayonnaise",
                    size: "11.5 oz.",
                    product_image_url: "http://c.shld.net/rpx/i/s/i/spin/10127449/prod_ec_1682682202",
                    created_at: new Date('2016-11-15 20:26:16 UTC'),
                    updated_at: new Date('2016-11-15 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 34,
                    upc: "048001353862",
                    plu: null,
                    name: "Best Foods Light Mayonnaise (20 oz.)",
                    brand_name: "Best Foods",
                    brand_type: "Light Mayonnaise",
                    size: "20 oz.",
                    product_image_url: "https://i5.walmartimages.com/asr/3b9f2987-6fb4-4e75-bada-9e87a39f5fba_1.930b361063d29c475c714a32e802e0c7.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
                    created_at: new Date('2016-11-15 20:26:16 UTC'),
                    updated_at: new Date('2016-11-15 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 35,
                    upc: "044800001478",
                    plu: null,
                    name: "Sugar in the Raw Natural Cane Sugar (4 lb.)",
                    brand_name: "Sugar in the Raw",
                    brand_type: "Natural Cane Sugar",
                    size: "4 lb.",
                    product_image_url: "http://ecx.images-amazon.com/images/I/516JPmcwReL._SL160_.jpg",
                    created_at: new Date('2016-11-15 20:26:16 UTC'),
                    updated_at: new Date('2016-11-15 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 36,
                    upc: "015800030119",
                    plu: null,
                    name: "C&H Pure Cane Granulated White Sugar (1 lb.)",
                    brand_name: "C&H",
                    brand_type: "Pure Cane Granulated White Sugar",
                    size: "1 lb.",
                    product_image_url: "http://ecx.images-amazon.com/images/I/51FiYghM0zL._SL160_.jpg",
                    created_at: new Date('2016-11-15 20:26:16 UTC'),
                    updated_at: new Date('2016-11-15 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 37,
                    upc: "015800030584",
                    plu: null,
                    name: "C&H Pure Cane Granulated White Sugar (4 lb.)",
                    brand_name: "C&H",
                    brand_type: "Pure Cane Granulated White Sugar",
                    size: "4 lb.",
                    product_image_url: "http://ecx.images-amazon.com/images/I/51BMc7yrOwL._SL160_.jpg",
                    created_at: new Date('2016-11-15 20:26:16 UTC'),
                    updated_at: new Date('2016-11-15 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 38,
                    upc: "089836185136",
                    plu: null,
                    name: "Simply Organic Ground Cinnamon (2.45 oz.)",
                    brand_name: "Simply Organic",
                    brand_type: "Ground Cinnamon",
                    size: "2.45 oz.",
                    product_image_url: "http://ecx.images-amazon.com/images/I/41z3cV7GLyL._SL160_.jpg",
                    created_at: new Date('2016-11-15 20:26:16 UTC'),
                    updated_at: new Date('2016-11-15 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 39,
                    upc: "052100004389",
                    plu: null,
                    name: "McCormick Ground Cinnamon (2.37 oz.)",
                    brand_name: "McCormick",
                    brand_type: "Ground Cinnamon",
                    size: "2.37 oz.",
                    product_image_url: "http://www.meijer.com/assets/product_images/styles/xlarge/1001029_052100004389_A_400.jpg",
                    created_at: new Date('2016-11-15 20:26:16 UTC'),
                    updated_at: new Date('2016-11-15 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 40,
                    upc: "052100090054",
                    plu: null,
                    name: "McCormick Ground Cinnamon (8.75 oz.)",
                    brand_name: "McCormick",
                    brand_type: "Ground Cinnamon",
                    size: "8.75 oz.",
                    product_image_url: "http://www.meijer.com/assets/product_images/styles/xlarge/1001029_052100090054_A_400.jpg",
                    created_at: new Date('2016-11-15 20:26:16 UTC'),
                    updated_at: new Date('2016-11-15 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 41,
                    upc: "052100071039",
                    plu: null,
                    name: "McCormick Pure Vanilla Extract (2 oz.)",
                    brand_name: "McCormick",
                    brand_type: "Pure Vanilla Extract",
                    size: "2 oz.",
                    product_image_url: "http://www.meijer.com/assets/product_images/styles/xlarge/1001029_052100071039_A_400.jpg",
                    created_at: new Date('2016-11-15 20:26:16 UTC'),
                    updated_at: new Date('2016-11-15 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 42,
                    upc: "052100071060",
                    plu: null,
                    name: "McCormick Pure Vanilla Extract (4 oz.)",
                    brand_name: "McCormick",
                    brand_type: "Pure Vanilla Extract",
                    size: "4 oz.",
                    product_image_url: "http://ecx.images-amazon.com/images/I/41pio7dgz4L._SL160_.jpg",
                    created_at: new Date('2016-11-15 20:26:16 UTC'),
                    updated_at: new Date('2016-11-15 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 43,
                    upc: "89836185310",
                    plu: null,
                    name: "Simply Organic Vanilla Extract (2 oz.)",
                    brand_name: "Simply Organic",
                    brand_type: "Vanilla Extract",
                    size: "2 oz.",
                    product_image_url: "http://ecx.images-amazon.com/images/I/41ZLgv2TJCL._SL160_.jpg",
                    created_at: new Date('2016-11-15 20:26:16 UTC'),
                    updated_at: new Date('2016-11-15 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 44,
                    upc: "089836187567",
                    plu: null,
                    name: "Simply Organic Vanilla Extract (4 oz.)",
                    brand_name: "Simply Organic",
                    brand_type: "Vanilla Extract",
                    size: "4 oz.",
                    product_image_url: "http://www.meijer.com/assets/product_images/styles/xlarge/1003855_74389_A_400.jpg",
                    created_at: new Date('2016-11-15 20:26:16 UTC'),
                    updated_at: new Date('2016-11-15 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 45,
                    upc: null,
                    plu: "4049",
                    name: "Cantaloupe (small)",
                    brand_name: null,
                    brand_type: null,
                    size: "small",
                    product_image_url: "http://mysquarefootgarden.net/wp-content/uploads/cantaloupe.jpg",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 46,
                    upc: null,
                    plu: "94049",
                    name: "Cantaloupe (small) [organic]",
                    brand_name: null,
                    brand_type: null,
                    size: "small",
                    product_image_url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQzAZEG33Tn3FOuGvmwlzg6IUxrUpdgOX26xMrI5gAZU3SQ1MmAWQ",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
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
                  }).returning('id'),

                  knex('products').insert({
                    id: 48,
                    upc: "0034500151023",
                    plu: null,
                    name: "Land o' Lakes Unsalted Butter (1 lb.)",
                    brand_name: "Land o' Lakes",
                    brand_type: "Unsalted Butter",
                    size: "1 lb.",
                    product_image_url: "https://www.landolakes.com/LOL/products/butter/sticks/15150.png?ext=.png",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 49,
                    upc: "0003450015136",
                    plu: null,
                    name: "Land o' Lakes Salted Butter (1 lb.)",
                    brand_name: "Land o' Lakes",
                    brand_type: "Salted Butter",
                    size: "1 lb.",
                    product_image_url: "https://www.landolakes.com/LOL/products/butter/sticks/15136.png?ext=.png",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 50,
                    upc: "0767707001067",
                    plu: null,
                    name: "Kerrygold Pure Irish Butter (8 oz.)",
                    brand_name: "Kerrygold",
                    brand_type: "Pure Irish Butter",
                    size: "8 oz.",
                    product_image_url: "http://www.kerrygoldusa.com/media/1009/salted_butter.jpg",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 51,
                    upc: "0742365416002",
                    plu: null,
                    name: "Horizon Organic Butter (1 lb.)",
                    brand_name: "Horizon",
                    brand_type: "Organic Butter",
                    size: "1 lb.",
                    product_image_url: "https://www.horizon.com/sites/default/files/products/Master_Products_Reflections_PNG_Product_Butter_0000_UnsaltedButter_0.png",
                    created_at: new Date('2016-11-14 20:26:16 UTC'),
                    updated_at: new Date('2016-11-14 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 52,
                    upc: "078433490903",
                    plu: null,
                    name: "Tostitos Mild Chunky Salsa (15.5 oz.)",
                    brand_name: "Tostitos",
                    brand_type: "Mild Chunky Salsa",
                    size: "15.5 oz.",
                    product_image_url: "http://ecx.images-amazon.com/images/I/51FD-aSk1LL._SL160_.jpg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 53,
                    upc: "028400055987",
                    plu: null,
                    name: "Tostitos Medium Chunky Salsa (15.5 oz.)",
                    brand_name: "Tostitos",
                    brand_type: "Medium Chunky Salsa",
                    size: "15.5 oz.",
                    product_image_url: "http://ecx.images-amazon.com/images/I/511FZ5-vdFL._SL160_.jpg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 54,
                    upc: "028400055994",
                    plu: null,
                    name: "Tostitos Hot Chunky Salsa (15.5 oz.)",
                    brand_name: "Tostitos",
                    brand_type: "Hot Chunky Salsa",
                    size: "15.5 oz.",
                    product_image_url: "http://ecx.images-amazon.com/images/I/51NakrkTrVL._SL160_.jpg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 55,
                    upc: "072878275514",
                    plu: null,
                    name: "Herdez Salsa Casera Mild (12 oz.)",
                    brand_name: "Herdez",
                    brand_type: "Salsa Casera Mild",
                    size: "12 oz.",
                    product_image_url: "http://ecx.images-amazon.com/images/I/51vlq2EK%2BnL._SL160_.jpg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 56,
                    upc: "0072878275545",
                    plu: null,
                    name: "Herdez Salsa Casera Medium (12 oz.)",
                    brand_name: "Herdez",
                    brand_type: "Salsa Casera Medium",
                    size: "12 oz.",
                    product_image_url: "http://ecx.images-amazon.com/images/I/214X7hlNyxL._SL160_.jpg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 57,
                    upc: "0044300106321",
                    plu: null,
                    name: "Rosarita Refried Beans Traditional 98% Fat Free (16 oz.)",
                    brand_name: "Rosarita",
                    brand_type: "Refried Beans Traditional 98% Fat Free",
                    size: "16 oz.",
                    product_image_url: "http://c.shld.net/rpx/i/s/i/spin/image/spin_prod_ec_773747001",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 58,
                    upc: "0044300106253",
                    plu: null,
                    name: "Rosarita Vegetarian Refried Beans (16 oz.)",
                    brand_name: "Rosarita",
                    brand_type: "Vegetarian Refried Beans",
                    size: "16 oz.",
                    product_image_url: "https://www.yummy.com/images/products/04430010625.png",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 59,
                    upc: "0011195207723",
                    plu: null,
                    name: "Sun-Vista Pinto Beans (29 oz.)",
                    brand_name: "Sun-Vista",
                    brand_type: " Pinto Beans",
                    size: "29 oz.",
                    product_image_url: "https://images.heb.com/is/image/HEBGrocery/000850963-1?id=xMrSr3&fmt=jpg&fit=constrain,1&wid=296&hei=296",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 60,
                    upc: "0011195207808",
                    plu: null,
                    name: "Sun-Vista Pinto Beans (40 oz.)",
                    brand_name: "Sun-Vista",
                    brand_type: " Pinto Beans",
                    size: "40 oz.",
                    product_image_url: "https://i5.walmartimages.com/asr/66c40b4a-cf06-4505-b22a-bba99b38f673_1.e106192809d0216cd491c8f24dc7a3d3.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 61,
                    upc: null,
                    plu: "6074",
                    name: "Pinto Beans",
                    brand_name: null,
                    brand_type: null,
                    size: null,
                    product_image_url: "https://survivalfarm.files.wordpress.com/2016/07/pinto-bean.jpg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 62,
                    upc: "492122603878",
                    plu: null,
                    name: "Guerrero White Corn Tortillas 6\" (18 Ct.)",
                    brand_name: "Guerrero",
                    brand_type: "White Corn Tortillas 6\" (18 Ct.)",
                    size: "16 oz.",
                    product_image_url: "https://i5.walmartimages.com/asr/f4134a39-ea8a-4cd7-a275-b713d5f25118_2.74c3ea2e24fd01d855f3680686befa5a.jpeg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 63,
                    upc: "492122607401",
                    plu: null,
                    name: "Mission White Corn Tortillas (30 Ct.)",
                    brand_name: "Mission",
                    brand_type: "White Corn Tortillas (30 Ct.)",
                    size: "25 oz.",
                    product_image_url: "http://www.missionmenus.com/images/products/147/4094227a_3848333_(73731_06002_367578)_mission_white_corn_30ct.jpg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 64,
                    upc: "0073731008201",
                    plu: null,
                    name: "Mission Flour Tortillas (10 Ct.)",
                    brand_name: "Mission",
                    brand_type: "Flour Tortillas (10 Ct.)",
                    size: "17.5 oz.",
                    product_image_url: "http://everyonelovescouponing.com/wp-content/uploads/2016/01/super-soft-flour-soft-taco.jpg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 65,
                    upc: "0073731008201",
                    plu: null,
                    name: "Mission Tortillas Flour (20 Ct.)",
                    brand_name: "Mission",
                    brand_type: "Tortillas Flour (20 Ct.)",
                    size: "26 oz.",
                    product_image_url: "http://ecx.images-amazon.com/images/I/51V%2BhwRMg7L.jpg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 66,
                    upc: "0073731071168",
                    plu: null,
                    name: "Mission Whole Wheat Tortillas 96% Fat-free (8 Ct.)",
                    brand_name: "Mission",
                    brand_type: "Whole Wheat Tortillas 96% Fat-free (8 Ct.)",
                    size: "14 oz.",
                    product_image_url: "http://i.upcindex.com/i/WjI5dlphVzFuTVM1eU1UQXVhVzh2VUVsREx6a3hPVGszT1RVeUx6QXZNUzh5TlRBdk9URTVPVGM1TlRJdWFuQm4yeGxjM1ZqYTNN.jpg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 67,
                    upc: "492123803154",
                    plu: null,
                    name: "Barilla Spaghetti Pasta (16 oz.)",
                    brand_name: "Barilla",
                    brand_type: "Spaghetti Pasta (16 oz.)",
                    size: "16 oz.",
                    product_image_url: "http://target.scene7.com/is/image/Target/13156213?wid=450&hei=450&fmt=pjpeg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 68,
                    upc: "492123803161",
                    plu: null,
                    name: "Barilla Penne Pasta (16 oz.)",
                    brand_name: "Barilla",
                    brand_type: "Penne Pasta 16 oz",
                    size: "16 oz.",
                    product_image_url: "http://target.scene7.com/is/image/Target/13156215?wid=450&hei=450&fmt=pjpeg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 69,
                    upc: "492123800122",
                    plu: null,
                    name: "Barilla Fettuccine Pasta (16 oz.)",
                    brand_name: "Barilla",
                    brand_type: "Fettuccine Pasta (16 oz.)",
                    size: "16 oz.",
                    product_image_url: "http://target.scene7.com/is/image/Target/13156090?wid=450&hei=450&fmt=pjpeg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 70,
                    upc: "033400721152",
                    plu: null,
                    name: "Ronzoni Healthy Harvest Thin Spaghetti Ancient Grains (12 oz.)",
                    brand_name: "Ronzoni",
                    brand_type: "Healthy Harvest Thin Spaghetti Ancient Grains (12 oz.)",
                    size: "12 oz.",
                    product_image_url: "http://target.scene7.com/is/image/Target/50281483?wid=450&hei=450&fmt=pjpeg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 71,
                    upc: "492124003287",
                    plu: null,
                    name: "Dave's Gourmet Organic Red Heirloom Pasta Sauce (26 oz.)",
                    brand_name: "Dave's Gourmet",
                    brand_type: "Organic Red Heirloom Pasta Sauce (26 oz.)",
                    size: "26 oz.",
                    product_image_url: "http://target.scene7.com/is/image/Target/14765857?wid=450&hei=450&fmt=pjpeg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 72,
                    upc: "492124002945",
                    plu: null,
                    name: "Dave's Gourmet Butternut Squash Pasta Sauce (25.5 oz.)",
                    brand_name: "Dave's Gourmet",
                    brand_type: "Butternut Squash Pasta Sauce (25.5 oz.)",
                    size: "25.5 oz.",
                    product_image_url: "http://target.scene7.com/is/image/Target/14779772?wid=450&hei=450&fmt=pjpeg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 73,
                    upc: "747479000079",
                    plu: null,
                    name: "Rao's Homemade Marinara Sauce (24 oz.)",
                    brand_name: "Rao's",
                    brand_type: "Homemade Marinara Sauce (24 oz.)",
                    size: "24 oz.",
                    product_image_url: "http://target.scene7.com/is/image/Target/13349580?wid=450&hei=450&fmt=pjpeg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 74,
                    upc: "492124004260",
                    plu: null,
                    name: "Barilla Traditional Pasta Sauce (24 oz.)",
                    brand_name: "Barilla",
                    brand_type: "Traditional Pasta Sauce (24 oz.)",
                    size: "24 oz.",
                    product_image_url: "https://i5.walmartimages.com/asr/a64bdd5b-fdb9-47be-82d3-179154bd9b5b_1.cde4f1861ff30ab62118c10a8e7c7db7.jpeg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 75,
                    upc: "492841109316",
                    plu: null,
                    name: "Horizon Organic Shreds Monterey Jack Finely Shredded Cheese (6 oz.)",
                    brand_name: "Horizon",
                    brand_type: "Organic Shreds Monterey Jack Finely Shredded Cheese (6 oz.)",
                    size: "6 oz.",
                    product_image_url: "http://target.scene7.com/is/image/Target/15332001?wid=450&hei=450&fmt=pjpeg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 76,
                    upc: "492841109323",
                    plu: null,
                    name: "Horizon Organic Shreds Mexican Blend Finely Shredded Cheese (6 oz.)",
                    brand_name: "Horizon",
                    brand_type: "Organic Shreds Mexican Blend Finely Shredded Cheese (6 oz.)",
                    size: "6 oz.",
                    product_image_url: "http://target.scene7.com/is/image/Target/15332002?wid=450&hei=450&fmt=pjpeg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 77,
                    upc: "492841102492",
                    plu: null,
                    name: "Sargento Reduced Fat 4 Cheese Mexican Shredded Cheese (8 oz.)",
                    brand_name: "Sargento",
                    brand_type: "Reduced Fat 4 Cheese Mexican Shredded Cheese (8 oz.)",
                    size: "8 oz.",
                    product_image_url: "http://target.scene7.com/is/image/Target/13305246?wid=450&hei=450&fmt=pjpeg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 78,
                    upc: "492841100665",
                    plu: null,
                    name: "Kraft Big Slice Pepper Jack Cheese Slices (10 ct.)",
                    brand_name: "Kraft",
                    brand_type: "Big Slice Pepper Jack Cheese Slices (10 ct.)",
                    size: "8 oz.",
                    product_image_url: "http://target.scene7.com/is/image/Target/12955113?wid=450&hei=450&fmt=pjpeg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 79,
                    upc: "021000054541",
                    plu: null,
                    name: "Kraft Finely Shredded Mild Cheddar Cheese Made with 2% Reduced Fat Milk and Added Calcium (7 oz.)",
                    brand_name: "Kraft",
                    brand_type: "Finely Shredded Mild Cheddar Cheese Made with 2% Reduced Fat Milk and Added Calcium (7 oz.)",
                    size: "7 oz.",
                    product_image_url: "http://target.scene7.com/is/image/Target/12955155?wid=450&hei=450&fmt=pjpeg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 80,
                    upc: "021000054398",
                    plu: null,
                    name: "Kraft Finely Shredded Sharp Cheddar Cheese Made with 2% Reduced Fat Milk and Added Calcium (7 oz.)",
                    brand_name: "Kraft",
                    brand_type: "Finely Shredded Sharp Cheddar Cheese Made with 2% Reduced Fat Milk and Added Calcium (7 oz.)",
                    size: "7 oz.",
                    product_image_url: "http://target.scene7.com/is/image/Target/12955135?wid=450&hei=450&fmt=pjpeg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 81,
                    upc: "715141113570",
                    plu: null,
                    name: "Eggland's Best Eggs Large (18 Ct.)",
                    brand_name: "Eggland's Best",
                    brand_type: "Eggs Large (18 Ct.)",
                    size: "18 Ct.",
                    product_image_url: "http://target.scene7.com/is/image/Target/14711486?wid=450&hei=450&fmt=pjpeg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 82,
                    upc: "492840300219",
                    plu: null,
                    name: "Vital Farms Alfresco Large Eggs (12 Ct.)",
                    brand_name: "Vital Farms",
                    brand_type: "Alfresco Large Eggs (12 Ct.)",
                    size: "12 Ct.",
                    product_image_url: "http://target.scene7.com/is/image/Target/18783617?wid=450&hei=450&fmt=pjpeg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 83,
                    upc: "852810488123",
                    plu: null,
                    name: "Land o' Lakes Brown Eggs (12 Ct.)",
                    brand_name: "Land o' Lakes",
                    brand_type: "Brown Eggs (12 Ct.)",
                    size: "12 Ct.",
                    product_image_url: "http://target.scene7.com/is/image/Target/50086881?wid=450&hei=450&fmt=pjpeg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 84,
                    upc: "300000614048",
                    plu: null,
                    name: "Quaker Cap'n Crunch Crunch Berries Cereal (18.7 oz.)",
                    brand_name: "Quaker",
                    brand_type: "Cap'n Crunch Crunch Berries Cereal (18.7 oz.)",
                    size: "18.7 oz.",
                    product_image_url: "http://target.scene7.com/is/image/Target/13304764?wid=450&hei=450&fmt=pjpeg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 85,
                    upc: "492310004159",
                    plu: null,
                    name: "General Mills Cinnamon Toast Crunch Cereal (17 oz.)",
                    brand_name: "General Mills",
                    brand_type: "Cinnamon Toast Crunch Cereal (17 oz.)",
                    size: "17 oz.",
                    product_image_url: "http://target.scene7.com/is/image/Target/12935810?wid=450&hei=450&fmt=pjpeg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 86,
                    upc: "492310012048",
                    plu: null,
                    name: "Post Fruity Pebbles (11 oz.)",
                    brand_name: "Post",
                    brand_type: "Fruity Pebbles (11 oz.)",
                    size: "11 oz.",
                    product_image_url: "http://target.scene7.com/is/image/Target/14775577?wid=450&hei=450&fmt=pjpeg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 87,
                    upc: "492310004142",
                    plu: null,
                    name: "General Mills Lucky Charms Original Cereal (16 oz.)",
                    brand_name: "General Mills",
                    brand_type: "Lucky Charms Original Cereal (16 oz.)",
                    size: "16 oz.",
                    product_image_url: "http://target.scene7.com/is/image/Target/12935623?wid=450&hei=450&fmt=pjpeg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 88,
                    upc: "492610106256",
                    plu: null,
                    name: "Papa Pita Organic Multigrain with Flax Seeds (24 oz.)",
                    brand_name: "Papa Pita",
                    brand_type: "Organic Multigrain with Flax Seeds (24 oz.)",
                    size: "24 oz.",
                    product_image_url: "http://target.scene7.com/is/image/Target/50010834?wid=450&hei=450&fmt=pjpeg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 89,
                    upc: "031493021609",
                    plu: null,
                    name: "Rudi's Organic 100% Whole Wheat Bread (22 oz.)",
                    brand_name: "Rudi's",
                    brand_type: "Organic 100% Whole Wheat Bread (22 oz.)",
                    size: "22 oz.",
                    product_image_url: "http://target.scene7.com/is/image/Target/15432613?wid=1000&hei=1000",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 90,
                    upc: "492610105501",
                    plu: null,
                    name: "Wonder Round Top White Sliced Bread (20 oz.)",
                    brand_name: "Wonder",
                    brand_type: "Round Top White Sliced Bread (20 oz.)",
                    size: "20 oz.",
                    product_image_url: "http://target.scene7.com/is/image/Target/15077154?wid=450&hei=450&fmt=pjpeg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
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
                  }).returning('id'),

                  knex('products').insert({
                    id: 92,
                    upc: "051500700204",
                    plu: null,
                    name: "Adams 100% Natural Peanut Butter Creamy (26 oz.)",
                    brand_name: "Adams",
                    brand_type: "100% Natural Peanut Butter Creamy (26 oz.)",
                    size: "26 oz.",
                    product_image_url: "https://images-na.ssl-images-amazon.com/images/I/51c8unpWcWL.jpg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 93,
                    upc: "https://images-na.ssl-images-amazon.com/images/I/51c8unpWcWL.jpg",
                    plu: null,
                    name: "Adams 100% Natural Peanut Butter Crunchy (26 oz.)",
                    brand_name: "Adams",
                    brand_type: "100% Natural Peanut Butter Crunchy (26 oz.)",
                    size: "26 oz.",
                    product_image_url: "https://images-na.ssl-images-amazon.com/images/I/41Z2Ahw0yxL.jpg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 94,
                    upc: "037600110723",
                    plu: null,
                    name: "Skippy Chunky Peanut Butter (16.3 oz.)",
                    brand_name: "Skippy",
                    brand_type: "Chunky Peanut Butter (16.3 oz.)",
                    size: "16.3 oz.",
                    product_image_url: "http://target.scene7.com/is/image/Target/12935796?wid=450&hei=450&fmt=pjpeg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 95,
                    upc: "048001270640",
                    plu: null,
                    name: "Skippy Creamy Peanut Butter Original (16.3 oz.)",
                    brand_name: "Skippy",
                    brand_type: "Creamy Peanut Butter Original (16.3 oz.)",
                    size: "16.3 oz.",
                    product_image_url: "http://target.scene7.com/is/image/Target/12935716?wid=450&hei=450&fmt=pjpeg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 96,
                    upc: "037600106184",
                    plu: null,
                    name: "Skippy Chunky Peanut Butter (40 oz.)",
                    brand_name: "Skippy",
                    brand_type: "Chunky Peanut Butter (40 oz.)",
                    size: "40 oz.",
                    product_image_url: "http://target.scene7.com/is/image/Target/12935771?wid=450&hei=450&fmt=pjpeg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id'),

                  knex('products').insert({
                    id: 97,
                    upc: "037600106252",
                    plu: null,
                    name: "Skippy Creamy Peanut Butter Original (40 oz.)",
                    brand_name: "Skippy",
                    brand_type: "Creamy Peanut Butter Original (40 oz.)",
                    size: "40 oz.",
                    product_image_url: "http://target.scene7.com/is/image/Target/12935775?wid=450&hei=450&fmt=pjpeg",
                    created_at: new Date('2016-11-16 20:26:16 UTC'),
                    updated_at: new Date('2016-11-16 20:26:16 UTC')
                  }).returning('id')

              ]);
              });
          };
