function init(){
    var json = [
    {
        "name": "Most rational explanation",
        "data": {
            "text": "Scientific theories do not require large assumptions, so they are more reasonable and more likely to be true."
        },
        "id": "1",
        "adjacencies": [
            {
                "data": {
                    "weight": 1
                },
                "nodeTo": "9"
            },
            {
                "data": {
                    "$color": "#f00",
                    "weight": 1
                },
                "nodeTo": "2"
            }
        ]
    },
    {
        "name": "not proof",
        "data": {
            "text": "This does not automatically make them true."
        },
        "id": "2",
        "adjacencies": [
            {
                "data": {
                    "$color": "#f00",
                    "weight": 1
                },
                "nodeTo": "1"
            }
        ]
    },
    {
        "name": " Victorious despite tradition",
        "data": {
            "text": "Science has always had more than its fair share of hate and scrutiny [evidence needed], however they still end up holding water and seeming true-er over time."
        },
        "id": "3",
        "adjacencies": [
            {
                "data": {
                    "weight": 1
                },
                "nodeTo": "9"
            }
        ]
    },
    {
        "name": "Always correcting itself...",
        "data": {
            "text": "Physics, by nature, is all about correcting hypotheses, so we never get answers."
        },
        "id": "4",
        "adjacencies": [
            {
                "data": {
                    "$color": "#f00",
                    "weight": 1
                },
                "nodeTo": "9"
            }
        ]
    },
    {
        "name": "can't explain everything",
        "data": {
            "text": "Physics FAILS to explain: how the big bang broke the laws of physics, all the totally-not-a-hoax paranormal activity, how a collection of particles (me) can perceive the universe around it, the answer to all the 'why's, or dark matter/energy."
        },
        "id": "5",
        "adjacencies": [
            {
                "data": {
                    "$color": "#f00",
                    "weight": 1
                },
                "nodeTo": "9"
            }
        ]
    },
    {
        "name": "Empirical evidence",
        "data": {
            "text": "Experiments often back up scientific theories [evidence needed]"
        },
        "id": "6",
        "adjacencies": [
            {
                "data": {
                    "weight": 1
                },
                "nodeTo": "9"
            },
            {
                "data": {
                    "$color": "#f00",
                    "weight": 1
                },
                "nodeTo": "7"
            }
        ]
    },
    {
        "name": "Bad science",
        "data": {
            "text": "many experiments are biased toward the  hypothesis [examples needed], so evidence isn't always reliable"
        },
        "id": "7",
        "adjacencies": [
            {
                "data": {
                    "$color": "#f00",
                    "weight": 1
                },
                "nodeTo": "6"
            }
        ]
    },
    {
        "name": "no disproof",
        "data": {
            "text": "Despite science's best efforts, it cannot completely rule out metaphysics, this could show that metaphysics may exist"
        },
        "id": "8",
        "adjacencies": [
            {
                "data": {
                    "$color": "#f00",
                    "weight": 1
                },
                "nodeTo": "9"
            }
        ]
    },
    {
        "name": "base argument",
        "data": {
            "text": "There is no metaphysics, just things that can be explained through science rationally"
        },
        "id": "9",
        "adjacencies": [
            {
                "data": {
                    "weight": 1
                },
                "nodeTo": "1"
            },
            {
                "data": {
                    "weight": 1
                },
                "nodeTo": "3"
            },
            {
                "data": {
                    "$color": "#f00",
                    "weight": 1
                },
                "nodeTo": "4"
            },
            {
                "data": {
                    "$color": "#f00",
                    "weight": 1
                },
                "nodeTo": "5"
            },
            {
                "data": {
                    "weight": 1
                },
                "nodeTo": "6"
            },
            {
                "data": {
                    "$color": "#f00",
                    "weight": 1
                },
                "nodeTo": "8"
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
            html += "<ul>";
            node.eachAdjacency(function(adj){
                var child = adj.nodeTo;
                html += "<li>" + child.name + "</li>";
            });
            html += "</ul>";
            $jit.id('inner-details').innerHTML = html;
            // html = node text
            var html = "<p>" + node.data.text + "</p>"
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
    
