function init(){
    var json = [
    {
        "name": "Cosmological argument",
        "adjacencies": [
            {
                "data": {
                    "weight": 1
                },
                "nodeTo": "2"
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
                "nodeTo": "9"
            }
        ],
        "data": {
            "text": "The universe needs a first cause, therefore God exists as said first cause."
        },
        "id": "1"
    },
    {
        "name": "Could not exist",
        "adjacencies": [
            {
                "data": {
                    "weight": 1
                },
                "nodeTo": "1"
            },
            {
                "data": {
                    "$color": "#f00",
                    "weight": 1
                },
                "nodeTo": "3"
            }
        ],
        "data": {
            "text": "Hypothetically, the universe could not exist, therefore there must be an explaination as to why it exists."
        },
        "id": "2"
    },
    {
        "name": "I think therefore I am",
        "adjacencies": [
            {
                "data": {
                    "$color": "#f00",
                    "weight": 1
                },
                "nodeTo": "2"
            }
        ],
        "data": {
            "text": "I know the universe must exist, otherwise I can't be part of it, therefore it isn't \u201chypothetically possible\u201d for there to be no universe."
        },
        "id": "3"
    },
    {
        "name": "Before the big bang",
        "adjacencies": [
            {
                "data": {
                    "$color": "#f00",
                    "weight": 1
                },
                "nodeTo": "1"
            }
        ],
        "data": {
            "text": "As the big bang is the start of time itself, to ask what caused it would be like asking \u201cwhat's north of north?\u201d (as such a cause would be before the biginning of time."
        },
        "id": "4"
    },
    {
        "name": "What caused God",
        "adjacencies": [
            {
                "data": {
                    "$color": "#f00",
                    "weight": 1
                },
                "nodeTo": "1"
            }
        ],
        "data": {
            "text": "If everything needs a cause, surely God would also need a cause himself. "
        },
        "id": "5"
    },
    {
        "name": "Dependance",
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
                "nodeTo": "7"
            },
            {
                "data": {
                    "$color": "#f00",
                    "weight": 1
                },
                "nodeTo": "10"
            }
        ],
        "data": {
            "text": "All beings are either dependant (have a cause) or independent (no cause). Therefore all beings are dependant OR there is at least one independent being. Not all beings are dependant; therefore there must be an independent being (God)."
        },
        "id": "6"
    },
    {
        "name": "explaination required",
        "adjacencies": [
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
        ],
        "data": {
            "text": "If all beings are dependant, there must be an explaination for the infinite regression of dependant beings. It also cannot be a part of the chain of dependant beings, so it must be independent"
        },
        "id": "7"
    },
    {
        "name": "Causal loops",
        "adjacencies": [
            {
                "data": {
                    "$color": "#f00",
                    "weight": 1
                },
                "nodeTo": "7"
            }
        ],
        "data": {
            "text": "If a being travels back in time, it could be able to cause it's own existance, meaning the \u201cinfinite regression\u201d could actually be finite."
        },
        "id": "8"
    },
    {
        "name": "Not ontological",
        "adjacencies": [
            {
                "data": {
                    "$color": "#f00",
                    "weight": 1
                },
                "nodeTo": "1"
            },
            {
                "data": {
                    "weight": 1
                },
                "nodeTo": "11"
            }
        ],
        "data": {
            "text": "The cosmological argument only shows thet there must be an ontological argument to prove God's existence, but said argument isn't showing up anywhere!"
        },
        "id": "9"
    },
    {
        "name": "A step too far?",
        "adjacencies": [
            {
                "data": {
                    "$color": "#f00",
                    "weight": 1
                },
                "nodeTo": "6"
            }
        ],
        "data": {
            "text": "An indepenant being does NOT necessarily have to be an omnipotent creator, he/she/it only has to be both immortal and powerful enough to generate a universe; which isn't quite omnipotence as the universe is NOT infinite in size."
        },
        "id": "10"
    },
    {
        "name": "Not shown isn't nonexistant",
        "adjacencies": [
            {
                "data": {
                    "weight": 1
                },
                "nodeTo": "9"
            }
        ],
        "data": {
            "text": "Just because the ontological argument we are looking for isn't showing up, doesn't mean it doesn't exist at all. "
        },
        "id": "11"
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
    
