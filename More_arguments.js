function init(){
    var json = [
    {
        "adjacencies": [
            {
                "nodeTo": "2", 
                "data": {
                    "$arc_start": "2", 
                    "$arg_type": "support", 
                    "weight": 1
                }
            }, 
            {
                "nodeTo": "4", 
                "data": {
                    "$arc_start": "4", 
                    "$arg_type": "support", 
                    "weight": 1
                }
            }, 
            {
                "nodeTo": "6", 
                "data": {
                    "$arc_start": "6", 
                    "$arg_type": "support", 
                    "weight": 1
                }
            }, 
            {
                "nodeTo": "7", 
                "data": {
                    "$arc_start": "7", 
                    "$arg_type": "support", 
                    "weight": 1
                }
            }, 
            {
                "nodeTo": "9", 
                "data": {
                    "$arc_start": "9", 
                    "$arg_type": "support", 
                    "weight": 1
                }
            }
        ], 
        "data": {
            "text": "This argument map contains some small extra arguments about God himself that show his existance to be contradictory."
        }, 
        "id": "1", 
        "name": "The nature of God (and why he probably doesn't exist)"
    }, 
    {
        "adjacencies": [
            {
                "nodeTo": "1", 
                "data": {
                    "$arc_start": "2", 
                    "$arg_type": "support", 
                    "weight": 1
                }
            }, 
            {
                "nodeTo": "3", 
                "data": {
                    "$arc_start": "3", 
                    "$arg_type": "refute", 
                    "weight": 1, 
                    "$color": "#f00"
                }
            }
        ], 
        "data": {
            "text": "If an omnipotent, benevolent God existed, it would want to end evil and be able to end evil... BUT evil exists so God either can't stop it (not omnipotent) or doesn't want to (not benevolent)"
        }, 
        "id": "2", 
        "name": "Omnipotence vs evil"
    }, 
    {
        "adjacencies": [
            {
                "nodeTo": "2", 
                "data": {
                    "$arc_start": "3", 
                    "$arg_type": "refute", 
                    "weight": 1, 
                    "$color": "#f00"
                }
            }
        ], 
        "data": {
            "text": "It can be said that eings with free will cause all evil, and to take away free will would be a greater evil."
        }, 
        "id": "3", 
        "name": "Free will defence"
    }, 
    {
        "adjacencies": [
            {
                "nodeTo": "1", 
                "data": {
                    "$arc_start": "4", 
                    "$arg_type": "support", 
                    "weight": 1
                }
            }, 
            {
                "nodeTo": "5", 
                "data": {
                    "$arc_start": "5", 
                    "$arg_type": "refute", 
                    "weight": 1, 
                    "$color": "#f00"
                }
            }, 
            {
                "nodeTo": "8", 
                "data": {
                    "$arc_start": "8", 
                    "$arg_type": "support", 
                    "weight": 1
                }
            }
        ], 
        "data": {
            "text": "If God is omniscient, he can foresee everything that will happen (except British weather; that can NEVER be foreseen!) including what I will do; however I have free will and can decide my own actions without relation to the visions (so I could do something literally unpredictable). Also: if God tells himself, or me what happens next and he/I changes the future, that change is not foreseen and therefore true foresight (and thus omniscience) is impossible."
        }, 
        "id": "4", 
        "name": "Omniscience (foresight) vs freedom"
    }, 
    {
        "adjacencies": [
            {
                "nodeTo": "4", 
                "data": {
                    "$arc_start": "5", 
                    "$arg_type": "refute", 
                    "weight": 1, 
                    "$color": "#f00"
                }
            }
        ], 
        "data": {
            "text": "The premise that the future is not predetermined and I have free will is not necessarily true (it's just a lack of it is extremely disturbing if one thinks about it for too long)"
        }, 
        "id": "5", 
        "name": "Determinalism"
    }, 
    {
        "adjacencies": [
            {
                "nodeTo": "1", 
                "data": {
                    "$arc_start": "6", 
                    "$arg_type": "support", 
                    "weight": 1
                }
            }
        ], 
        "data": {
            "text": "God is supposedly immutable and omniscient, but the facts of the universe are constantly changing so a truly omniscient being would also need to change over time to keep its knowledge correct (implying up-to-date)"
        }, 
        "id": "6", 
        "name": "Immutability vs time"
    }, 
    {
        "adjacencies": [
            {
                "nodeTo": "1", 
                "data": {
                    "$arc_start": "7", 
                    "$arg_type": "support", 
                    "weight": 1
                }
            }
        ], 
        "data": {
            "text": "All things either can or can't be done by any partiular being, and an omnipotent God can do all of these things. If a being can't set it's own limits, it isn't omnipotent because that is a thing it can't do. If it can set it's own limits, however, it can't surpass said limits later and is therefore still not omnipotent. Therefore omnipotence is impossible."
        }, 
        "id": "7", 
        "name": "Omnipotence vs control"
    }, 
    {
        "adjacencies": [
            {
                "nodeTo": "4", 
                "data": {
                    "$arc_start": "8", 
                    "$arg_type": "support", 
                    "weight": 1
                }
            }
        ], 
        "data": {
            "text": "If God is omnipotent, he is able to prevent any future he foresees; BUT if he is omniscient, the future he sees is always correct and thus immutable. This is a clear contratiction from the lone premise that God is omnipotent (if one can do anything, it has to know how to do everything, and therefore must know everything, i.e: omniscience)"
        }, 
        "id": "8", 
        "name": "Omnipotence vs foresight"
    }, 
    {
        "adjacencies": [
            {
                "nodeTo": "1", 
                "data": {
                    "$arc_start": "9", 
                    "$arg_type": "support", 
                    "weight": 1
                }
            }
        ], 
        "data": {
            "text": "If God is able to decide what is right and wrong (which is asserted by most (not all) monotheistic religions); and he is benevolent,then he must always do the right thing... Even before he decides what that \u201cright thing\u201d is. This means he is forced into following uncreated rules (which makes no sense whatsoever!)"
        }, 
        "id": "9", 
        "name": "Sovereignty vs benevolence "
    }
];
//end
    //init Hypertree
    var ht = new $jit.Hypertree({
        //id of the visualization container
        injectInto: 'infovis',
        //By setting overridable=true,
        //Node and Edge global properties can be
        //overriden for each node/edge.
        Node: {
            overridable: true,
            'transform': false,
            color: "#f00"
        },
        
        Edge: {
            overridable: true,
            color: "#0f0"
        },
        //calculate nodes offset
        offset: 0.2,
        //Change the animation transition type
        transition: $jit.Trans.Back.easeOut,
        //animation duration (in milliseconds)
        duration:1000,
        
        //This method is called right before plotting an
        //edge. This method is useful for adding individual
        //styles to edges.
        onBeforePlotLine: function(adj){
            //Set random lineWidth for edges.
            if (!adj.data.$lineWidth) 
                // adj.data.$lineWidth = Math.random() * 7 + 1;
                adj.data.$lineWidth = 1;
        },
        
        onBeforeCompute: function(node){
            Log.write("centering");
        },
        //Attach event handlers on label creation.
        onCreateLabel: function(domElement, node){
            domElement.innerHTML = node.name;
            domElement.style.cursor = "pointer";
            domElement.onclick = function () {
                ht.onClick(node.id, { 
                    hideLabels: false,
                    onComplete: function() {
                      ht.controller.onComplete();
                    }
                });
            };
        },
        //This method is called when moving/placing a label.
        //You can add some positioning offsets to the labels here.
        onPlaceLabel: function(domElement, node){
            var width = domElement.offsetWidth;
            var intX = parseInt(domElement.style.left);
            intX -= width / 2;
            domElement.style.left = intX + 'px';
        },
        
        onComplete: function(){
            Log.write("done");

            //Make the relations list shown in the right column.
            var node = ht.graph.getClosestNodeToOrigin("current");
            var html = "<h4>" + node.name + "</h4><b>Connections:</b>";

            // html += "<p>" + node.id + "</p>";

            // html += "<ol>";
            // node.eachAdjacency(function(adj){
            //     var child = adj.nodeTo;
            //     var arc_start = adj.getData('arc_start');
            //     var arg_type = adj.getData('arg_type');
            //     html += "<li>" + child.id + ": " + child.name + "; " + arc_start + "; " + arg_type + "</li>";
            // });
            // html += "</ol>";

            html += "<ul>";
            node.eachAdjacency(function(adj){
                var child = adj.nodeTo;
                var arc_start = adj.getData('arc_start');
                var arg_type = adj.getData('arg_type');
                if (arc_start != node.id && arg_type == "support") {
                    html += "<li> supported by " + child.name + "</li>";
                }
            });
            node.eachAdjacency(function(adj){
                var child = adj.nodeTo;
                var arc_start = adj.getData('arc_start');
                var arg_type = adj.getData('arg_type');
                if (arc_start != node.id && arg_type == "refute") {
                    html += "<li> refuted by " + child.name  + "</li>";
                }
            });
            node.eachAdjacency(function(adj){
                var child = adj.nodeTo;
                var arc_start = adj.getData('arc_start');
                var arg_type = adj.getData('arg_type');
                if (arc_start == node.id && arg_type == "support") {
                    html += "<li> supports " + child.name + "</li>";
                }
            });
            node.eachAdjacency(function(adj){
                var child = adj.nodeTo;
                var arc_start = adj.getData('arc_start');
                var arg_type = adj.getData('arg_type');
                if (arc_start == node.id && arg_type == "refute") {
                    html += "<li> refutes " + child.name + "</li>";
                }
            });
            html += "</ul>";
            $jit.id('inner-details').innerHTML = html;
            // html = node text
            var html = "<h4>" + node.name + "</h4><p>" + node.data.text + "</p>"
            $jit.id('id-list').innerHTML = html;
        }
    });
    //load JSON graph.
    ht.loadJSON(json, 2);
    //compute positions and plot
    ht.refresh();
    //end
    ht.controller.onBeforeCompute(ht.graph.getNode(ht.root));
    ht.controller.onComplete();
}
    
