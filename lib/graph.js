function GraphEdge(config) {
    this.productId = config.product_id;
    this.storeId = config.store_id;
    this.price = config.price;
}

function GraphNode(config) {
    this.id = config.id;
    this.name = config.name;
    this.type = config.type;
}

function Graph(){
    this.nodes = [];
    this.edges = [];
}

Graph.prototype.initialize = function (stores, products, edges) {
    var initGraph = this
    stores.forEach(function (curStore) {
        initGraph.addNode({id: curStore.id, name: curStore.name, type: 'store'})
    })
    products.forEach(function (curProduct) {
        initGraph.addNode({id: curProduct.id, name: curProduct.name, type: 'product'})
    })
    edges.forEach(function (curEdge) {
        initGraph.addEdge(curEdge)
    })
    for (var i = 0; i < stores.length; i++) {
        for (var k = i+1; k < stores.length; k++) {
            initGraph.addEdge({product_id: stores[i].id, store_id: stores[k].id, price: 0})
        }
    }

}

Graph.prototype.initializeForMultiple = function (stores, products, edges) {
    var initGraph = this
    stores.forEach(function (curStore) {
        initGraph.addNode({id: curStore.id, name: curStore.name, type: 'store'})
    })
    products.forEach(function (curProduct) {
        initGraph.addNode({id: curProduct.products.id, name: curProduct.products.name, type: 'product'})
    })
    edges.forEach(function (curEdge) {
        initGraph.addEdge(curEdge)
    })
    for (var i = 0; i < stores.length; i++) {
        for (var k = i+1; k < stores.length; k++) {
            initGraph.addEdge({product_id: stores[i].id, store_id: stores[k].id, price: 0})
        }
    }

}

Graph.prototype.oneStopSearch = function (shoppingList) {
    var possibleStores = [];

    for (var i = 0; i < this.nodes.length; i++) {
        var currentNode = this.nodes[i]
        if (currentNode.type === 'store') {
            if (this.findAvailableProducts(currentNode.id).length === shoppingList.length) {
                possibleStores.push(currentNode.id)
            }
        }
    }

    if(possibleStores.length === 0) {
        // just simply route to a two stop search if no stores have all selected products.
        return "Sorry. Looks like you'll need to stop at multiple stores (or expand your radius) to get all your items."
    } else if (possibleStores.length === 1) {
        return [possibleStores[0], this.priceCheckList(possibleStores[0], shoppingList)]
    } else {
        var lowestTotal;
        var optimalStore;

        for (var i = 0; i < possibleStores.length; i++) {
            if(!lowestTotal) {
                lowestTotal = this.priceCheckList(possibleStores[i], shoppingList);
                optimalStore = possibleStores[i];
            }else if (this.priceCheckList(possibleStores[i], shoppingList) < lowestTotal) {
                lowestTotal = this.priceCheckList(possibleStores[i], shoppingList);
                optimalStore = possibleStores[i];
            }
        }

        lowestTotal = (Math.round(lowestTotal * Math.pow(10, 2)) / Math.pow(10, 2))
        return [optimalStore, lowestTotal]
    }

};

Graph.prototype.MultipleStopSearch = function (numOfStores, filteredStores, shoppingList) {
    var possibleCombos = [];


    if(numOfStores === 2) {
        for (var i = 0; i < filteredStores.length; i++) {
            for (var k = i+1; k < filteredStores.length; k++) {
                possibleCombos.push([filteredStores[i].id, filteredStores[k].id]);
            }
        }
    } else if(numOfStores === 3) {
        for (var i = 0; i < filteredStores.length; i++) {
            for (var k = i+1; k < filteredStores.length; k++) {
                for (var m = k+1; m < filteredStores.length; m++) {
                    possibleCombos.push([filteredStores[i].id, filteredStores[k].id, filteredStores[m].id]);
                }
            }
        }
    }

    var optimalCombo
    var possibleMSTs = [];

    for (var i = 0; i < possibleCombos.length; i++) {
        possibleMSTs.push(this.__findOptimalMST(possibleCombos[i]))
    }

    for (var i = 0; i < possibleMSTs.length; i++) {
        if(shoppingList.length !== (possibleMSTs[i].size - (numOfStores-1))) {
            possibleMSTs.splice(i, 1)
            i--;
        }
    }

    //handle err when some products are not available at any of the selected stores.
    // if (possibleMSTs.length === 0){
    //     for (var i = 0; i < possibleCombos.length; i++) {
    //         possibleMSTs.push(this.__findOptimalMST(possibleCombos[i]))
    //     }
    //     var
    //     filteredStores.forEach(function(curstore){
    //
    //     })
    // }
    if (possibleMSTs.length === 0){
        optimalCombo = "sorry you will need to expand your search radius."
    }




    var smallestTotal = Infinity;
    var currentTotal = 0;

    for (var i = 0; i < possibleMSTs.length; i++) {
        currentTotal = 0;
        possibleMSTs[i].forEach(function (curMSTedge) {
            currentTotal += curMSTedge.price
        })
        currentTotal = (Math.round(currentTotal * Math.pow(10, 2)) / Math.pow(10, 2))
        if(i>0 && currentTotal < smallestTotal) {
            smallestTotal = currentTotal
            optimalCombo = possibleMSTs[i]
        }
    }
    if(typeof optimalCombo === 'string') {
        return optimalCombo
    }
    optimalCombo.forEach(function(curEdge){
        if(curEdge.price === 0) {
            optimalCombo.delete(curEdge)
        }
    })
    return optimalCombo
};

Graph.prototype.findNodeById = function(nodeId) {
    for (var i = 0; i < this.nodes.length; i++) {
        if(this.nodes[i].id === nodeId) {
            return this.nodes[i]
        }
    }
}

Graph.prototype.__findOptimalMST = function(storeNodes) {
    //return an object with the properties:
    // edge list, total, storeIds & storeIds = storeNodes(the passed in param)
    //storeNodes = [ 1, 2, 3 ]
    var subGraph = new Graph();
    subGraph.nodes = this.nodes.slice()
    subGraph.edges = this.edges.slice()
    for (var i = 0; i < subGraph.nodes.length; i++) {
        if (subGraph.nodes[i].type === 'store' && storeNodes.indexOf(subGraph.nodes[i].id) === -1) {
            subGraph.nodes.splice(i, 1);
            i--;
        }
    }

    for (var i = 0; i < subGraph.edges.length; i++) {
        if(subGraph.edges[i].price > 0 && storeNodes.indexOf(subGraph.edges[i].storeId) === -1) {
            subGraph.edges.splice(i, 1);
            i--;
        }
        else if (subGraph.edges[i].price === 0 && storeNodes.indexOf(subGraph.edges[i].productId) === -1 || storeNodes.indexOf(subGraph.edges[i].storeId) === -1) {
            subGraph.edges.splice(i, 1);
            i--;
        }

    }

    function swap(arr, idx1, idx2) {
        var temporary = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temporary;
    }
    var sortedEdges = subGraph.edges.slice();
    for (var i = 0; i < sortedEdges.length; i++) {
        for (var k = 0; k < sortedEdges.length-1; k++) {
            if(sortedEdges[k].price>sortedEdges[k+1].price) {
                swap(sortedEdges, k, k+1)
            }
        }
    }
    var mst = new Set();
    var trees = new Set();
    subGraph.nodes.forEach(function (curNode) {
        var nodeSet = new Set()
        nodeSet.add(curNode)
        trees.add(nodeSet)
    })
    sortedEdges.forEach(function (curEdge) {
        var u = subGraph.findNodeById(curEdge.storeId)
        var v = subGraph.findNodeById(curEdge.productId)
        trees.forEach(function(curTreeSet){
            if((!curTreeSet.has(u) && curTreeSet.has(v)) || (!curTreeSet.has(v) && curTreeSet.has(u))) {
                mst.add(curEdge)
                var oldset
                trees.forEach(function(curTree){
                    if(curTree.has(u)) {
                        oldset = curTree
                    }
                })
                trees.delete(curTreeSet)
                trees.delete(oldset)
                var newSet = new Set();
                newSet.add(curTreeSet)
                newSet.add(oldset)
                trees.add(newSet)
            }
        })
    })
    return mst;
};

Graph.prototype.convertOptMSTtoJSON = function(optMST, storesProductsData) {
    var optMSTArr = Array.from(optMST)
    storesProductsData = storesProductsData.filter(function (currentStoreProduct) {
        var include = false;
        optMSTArr.forEach(function(currentEdge){
            if(currentEdge.storeId === currentStoreProduct.store_id && currentEdge.productId === currentStoreProduct.product_id) {
                include = true
            }
        })
        return include
    })
    return storesProductsData
}

Graph.prototype.addNode = function (config) {
    this.nodes.push(new GraphNode(config));
};

Graph.prototype.addEdge = function (config) {
    this.edges.push(new GraphEdge(config));
};

Graph.prototype.priceCheck = function (storeIdNum, productIdNum) {
    for (var i = 0; i < this.edges.length; i++) {
        if(this.edges[i].productId === productIdNum && this.edges[i].storeId === storeIdNum && this.edges[i].price !== 0) {
            return this.edges[i].price;
        }
    }
    return "Product not found at that store"
}

Graph.prototype.priceCheckList = function (storeIdNum, listofProductIds) {
    var total = 0
    for (var i = 0; i < listofProductIds.length; i++) {
        total += this.priceCheck(storeIdNum, listofProductIds[i])
    }
    return total;
}

Graph.prototype.updatePrice = function (productIdNum, storeIdNum, newPrice) {
    for (var i = 0; i < this.edges.length; i++) {
        if(this.edges[i].productId === productIdNum && this.edges[i].storeId === storeIdNum) {
            this.edges[i].price = newPrice;
        }
    }
};

Graph.prototype.updateAvailability = function (productIdNum, storeIdNum) {
    for (var i = 0; i < this.edges.length; i++) {
        if(this.edges[i].productId === productIdNum && this.edges[i].storeId === storeIdNum && this.edges[i].price !== 0) {
            this.edges.splice(i, 1);
        }
    }
};

Graph.prototype.findAvailableProducts = function(storeIdNum) {
    let availableProducts = [];

    for (let i = 0; i < this.edges.length; i ++){
        if (this.edges[i].storeId === storeIdNum && this.edges[i].price !== 0) {
            availableProducts.push(this.edges[i]);
        }
    }

    return availableProducts;
};

Graph.prototype.checkAvailability = function(storeIdNum, productIdNum) {

    for (let i = 0; i < this.edges.length; i ++){
        if (this.edges[i].storeId === storeIdNum && this.edges[i].productId === productIdNum && this.edges[i].price !== 0) {
            return true
        }
    }
    return false
};

Graph.prototype.findUnavailableProducts = function() {
    let unavailableProducts = [];
    for (var i = 0; i < this.nodes.length; i++) {
        if(this.nodes[i].type === 'store') {
            let storesProducts = this.findAvailableProducts(this.nodes[i].id);
            if (storesProducts.length === 0) {
                unavailableProducts.push(this.nodes[i]);
            }
        }
    }
    return unavailableProducts;
};


module.exports = {Graph}
