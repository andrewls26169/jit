function init(){
    var json = [
    {
        "data": {
            "text": "Scientific theories do not require large assumptions, so they are more reasonable and more likely to be true."
        },
        "name": "Most rational explanation",
        "id": "n1",
        "adjacencies": [
            {
                "data": {
                    "$arc_start": "n1",
                    "weight": 1,
                    "$arg_type": "support"
                },
                "nodeTo": "n9"
            },
            {
                "data": {
                    "$arc_start": "n2",
                    "weight": 1,
                    "$arg_type": "refute",
                    "$color": "#f00"
                },
                "nodeTo": "n2"
            }
        ]
    },
    {
        "data": {
            "text": "This does not automatically make them true."
        },
        "name": "not proof",
        "id": "n2",
        "adjacencies": [
            {
                "data": {
                    "$arc_start": "n2",
                    "weight": 1,
                    "$arg_type": "refute",
                    "$color": "#f00"
                },
                "nodeTo": "n1"
            }
        ]
    },
    {
        "data": {
            "text": "Science has always had more than its fair share of hate and scrutiny [evidence needed], however they still end up holding water and seeming true-er over time."
        },
        "name": " Victorious despite tradition",
        "id": "n3",
        "adjacencies": [
            {
                "data": {
                    "$arc_start": "n3",
                    "weight": 1,
                    "$arg_type": "support"
                },
                "nodeTo": "n9"
            }
        ]
    },
    {
        "data": {
            "text": "Physics, by nature, is all about correcting hypotheses, so we never get answers."
        },
        "name": "Always correcting itself...",
        "id": "n4",
        "adjacencies": [
            {
                "data": {
                    "$arc_start": "n4",
                    "weight": 1,
                    "$arg_type": "refute",
                    "$color": "#f00"
                },
                "nodeTo": "n9"
            }
        ]
    },
    {
        "data": {
            "text": "Physics FAILS to explain: how the big bang broke the laws of physics, all the totally-not-a-hoax paranormal activity, how a collection of particles (me) can perceive the universe around it, the answer to all the 'why's, or dark matter/energy."
        },
        "name": "can't explain everything",
        "id": "n5",
        "adjacencies": [
            {
                "data": {
                    "$arc_start": "n5",
                    "weight": 1,
                    "$arg_type": "refute",
                    "$color": "#f00"
                },
                "nodeTo": "n9"
            }
        ]
    },
    {
        "data": {
            "text": "Experiments often back up scientific theories [evidence needed]"
        },
        "name": "Empirical evidence",
        "id": "n6",
        "adjacencies": [
            {
                "data": {
                    "$arc_start": "n6",
                    "weight": 1,
                    "$arg_type": "support"
                },
                "nodeTo": "n9"
            },
            {
                "data": {
                    "$arc_start": "n7",
                    "weight": 1,
                    "$arg_type": "refute",
                    "$color": "#f00"
                },
                "nodeTo": "n7"
            }
        ]
    },
    {
        "data": {
            "text": "many experiments are biased toward the  hypothesis [examples needed], so evidence isn't always reliable"
        },
        "name": "Bad science",
        "id": "n7",
        "adjacencies": [
            {
                "data": {
                    "$arc_start": "n7",
                    "weight": 1,
                    "$arg_type": "refute",
                    "$color": "#f00"
                },
                "nodeTo": "n6"
            }
        ]
    },
    {
        "data": {
            "text": "Despite science's best efforts, it cannot completely rule out metaphysics, this could show that metaphysics may exist"
        },
        "name": "no disproof",
        "id": "n8",
        "adjacencies": [
            {
                "data": {
                    "$arc_start": "n8",
                    "weight": 1,
                    "$arg_type": "refute",
                    "$color": "#f00"
                },
                "nodeTo": "n9"
            }
        ]
    },
    {
        "data": {
            "text": "There is no metaphysics, just things that can be explained through science rationally"
        },
        "name": "base argument",
        "id": "n9",
        "adjacencies": [
            {
                "data": {
                    "$arc_start": "n1",
                    "weight": 1,
                    "$arg_type": "support"
                },
                "nodeTo": "n1"
            },
            {
                "data": {
                    "$arc_start": "n3",
                    "weight": 1,
                    "$arg_type": "support"
                },
                "nodeTo": "n3"
            },
            {
                "data": {
                    "$arc_start": "n4",
                    "weight": 1,
                    "$arg_type": "refute",
                    "$color": "#f00"
                },
                "nodeTo": "n4"
            },
            {
                "data": {
                    "$arc_start": "n5",
                    "weight": 1,
                    "$arg_type": "refute",
                    "$color": "#f00"
                },
                "nodeTo": "n5"
            },
            {
                "data": {
                    "$arc_start": "n6",
                    "weight": 1,
                    "$arg_type": "support"
                },
                "nodeTo": "n6"
            },
            {
                "data": {
                    "$arc_start": "n8",
                    "weight": 1,
                    "$arg_type": "refute",
                    "$color": "#f00"
                },
                "nodeTo": "n8"
            }
        ]
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
    
