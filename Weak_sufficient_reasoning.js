function init(){
    var json = [
    {
        "adjacencies": [
            {
                "nodeTo": "3", 
                "data": {
                    "$arc_start": "3", 
                    "$arg_type": "refute", 
                    "weight": 1, 
                    "$color": "#f00"
                }
            }, 
            {
                "nodeTo": "4", 
                "data": {
                    "$arc_start": "4", 
                    "$arg_type": "refute", 
                    "weight": 1, 
                    "$color": "#f00"
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
                "nodeTo": "7", 
                "data": {
                    "$arc_start": "7", 
                    "$arg_type": "support", 
                    "weight": 1
                }
            }
        ], 
        "data": {
            "text": "1) It is impossible to destroy an omnipotent being; 2) for all individuals\u00b8 if it is a fact that it either does or doesn't exist\u00b8 there can be an explaination for why it does(n't) exist. 3) God doesn't exist (assumption for disproof by contradiction). 4) It's possible that there is an explaination for why God doesn't exist (from 2 and 3). 5) It is impossible to find an explaination for God not existing (as that would destroy an omnipotent being\u00b8 contradicting 1). 6) It is and isn't possible to find an explaination for God's non-existance. 7) Therefore God exists (contradiction 6 arises because premise 3 is assumed; thus proving premise 3 false)."
        }, 
        "id": "1", 
        "name": "The weak sufficient reason version"
    }, 
    {
        "adjacencies": [
            {
                "nodeTo": "7", 
                "data": {
                    "$arc_start": "2", 
                    "$arg_type": "support", 
                    "weight": 1
                }
            }
        ], 
        "data": {
            "text": "Our conception of God is an omnipotent being. Because an omnipotent being is un-surpassable, it cannot be defeated, therefore, such a being cannot be destroyed by any means."
        }, 
        "id": "2", 
        "name": "Omnipotent=invincible"
    }, 
    {
        "adjacencies": [
            {
                "nodeTo": "1", 
                "data": {
                    "$arc_start": "3", 
                    "$arg_type": "refute", 
                    "weight": 1, 
                    "$color": "#f00"
                }
            }
        ], 
        "data": {
            "text": "Premise 1 implies that nothing can destroy a God that already exists, however reasoning step 5 assumes premise 1 means nothing can prevent a God that doesn't already exist from existing (by disproving it through an apriori argument such as the problem of evil). Therefore reasoning step 5 is out of context."
        }, 
        "id": "3", 
        "name": "A probematic inference"
    }, 
    {
        "adjacencies": [
            {
                "nodeTo": "1", 
                "data": {
                    "$arc_start": "4", 
                    "$arg_type": "refute", 
                    "weight": 1, 
                    "$color": "#f00"
                }
            }
        ], 
        "data": {
            "text": "Reasoning step 5 states that it is not actually possible for there to be an explaination for God's non-existence, but reasoning step 4 only states that it is hypothetically possible for such an explaination for God's non-existence. This means they do not directly clash as contradiction 6. For an example of this non-contradiction: it is hypothetically possible for me to create a perpetual motion machine, but it is not actually possibe as it would violate the law of conservation of matter and energy."
        }, 
        "id": "4", 
        "name": "A non-contradiction?"
    }, 
    {
        "adjacencies": [
            {
                "nodeTo": "1", 
                "data": {
                    "$arc_start": "5", 
                    "$arg_type": "refute", 
                    "weight": 1, 
                    "$color": "#f00"
                }
            }
        ], 
        "data": {
            "text": "Conclusion 7 is an explaination for God to exist, but it is logically impossibe for a non-omnipotent being to create an omnipotent being (as such an omnipotent being would be immortal and thus infinite in time scince creation). Therefore if 5 can be inferred from 1, then 7 being false can also be inferred from 1!"
        }, 
        "id": "5", 
        "name": "Unintended contradiction"
    }, 
    {
        "adjacencies": [
            {
                "nodeTo": "7", 
                "data": {
                    "$arc_start": "6", 
                    "$arg_type": "support", 
                    "weight": 1
                }
            }
        ], 
        "data": {
            "text": "The idea that everything can (note this isn't must) have an explaination, called the weak principle of sufficient reason, is shown to be true through induction (everything we have encountered has been exlained, so it is probable that everthing we will encounter can be explained), and the idea of causation (a cause is a type of explaination, and everything is shown to have a cause). Also: the idea of everything being explainable fits well with the scientific method. "
        }, 
        "id": "6", 
        "name": "Premise 2 holds water"
    }, 
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
                "nodeTo": "6", 
                "data": {
                    "$arc_start": "6", 
                    "$arg_type": "support", 
                    "weight": 1
                }
            }, 
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
            "text": "Both premises are shown to be accurate"
        }, 
        "id": "7", 
        "name": "The premises work"
    }, 
    {
        "adjacencies": [], 
        "data": {
            "text": ""
        }, 
        "id": "8", 
        "name": ""
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
    
