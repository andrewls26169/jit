function init(){
    var json = [
    {
        "name": "The Teleoloogical argument",
        "id": "1",
        "data": {
            "text": "The universe shows evidence of design, therefore someone must have designed it"
        },
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
                "nodeTo": "6"
            },
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
                "nodeTo": "13"
            },
            {
                "data": {
                    "weight": 1
                },
                "nodeTo": "14"
            },
            {
                "data": {
                    "weight": 1
                },
                "nodeTo": "15"
            }
        ]
    },
    {
        "name": "Biology shows design",
        "id": "2",
        "data": {
            "text": "There is some evidence of design in the intricasy of biological organisms"
        },
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
            }
        ]
    },
    {
        "name": "Origin of life",
        "id": "3",
        "data": {
            "text": "The origin of life is still completely unnown to science"
        },
        "adjacencies": [
            {
                "data": {
                    "weight": 1
                },
                "nodeTo": "2"
            },
            {
                "data": {
                    "weight": 1
                },
                "nodeTo": "16"
            }
        ]
    },
    {
        "name": "Evolution",
        "id": "4",
        "data": {
            "text": "Life seems to be able to design itself, as \u201cgood\u201d life forms are more likely to survive."
        },
        "adjacencies": [
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
        "name": "No comparison",
        "id": "5",
        "data": {
            "text": "There is only one universe we know of, so there is no other universe to compare the complexity to (so how can we call the universe *complex*)."
        },
        "adjacencies": [
            {
                "data": {
                    "$color": "#f00",
                    "weight": 1
                },
                "nodeTo": "15"
            }
        ]
    },
    {
        "name": "Weak proof",
        "id": "6",
        "data": {
            "text": "The universe is finite, so it isn't a like effect for an infinite God"
        },
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
                    "$color": "#f00",
                    "weight": 1
                },
                "nodeTo": "7"
            }
        ]
    },
    {
        "name": "Imperfect",
        "id": "7",
        "data": {
            "text": "The universe is imperfect, therefore God is also imperfect (perfection can only cause more perfection)"
        },
        "adjacencies": [
            {
                "data": {
                    "$color": "#f00",
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
    },
    {
        "name": "Many Gods",
        "id": "8",
        "data": {
            "text": "Many Imperfect Gods could create a universe by combining forces"
        },
        "adjacencies": [
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
        "name": "Discovery",
        "id": "9",
        "data": {
            "text": "We have discovered many new things about the universe"
        },
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
                "nodeTo": "10"
            },
            {
                "data": {
                    "$color": "#f00",
                    "weight": 1
                },
                "nodeTo": "11"
            }
        ]
    },
    {
        "name": "Complexity increase",
        "id": "10",
        "data": {
            "text": "These new discoveries have increased the complexity of the nown universe, thus giving more evidence of design"
        },
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
        "name": "No need for God",
        "id": "11",
        "data": {
            "text": "The new discoveries explain some of the universe's mysteries without need of a God, sosurely the universe is explainable through these discoveries"
        },
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
        "name": "Multiverses",
        "id": "12",
        "data": {
            "text": "There is no reason to discount the possibility of universes with different physics, that we don't know about."
        },
        "adjacencies": [
            {
                "data": {
                    "$color": "#f00",
                    "weight": 1
                },
                "nodeTo": "14"
            }
        ]
    },
    {
        "name": "Illusion of design",
        "id": "13",
        "data": {
            "text": "We could be seeing design and/or purpose when there actually is none. e.g: A lightning strike can be seen as a work of art."
        },
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
        "name": "Physics",
        "id": "14",
        "data": {
            "text": "There is only one set of laws of physics, and they seem perfect for planets like Earth to form."
        },
        "adjacencies": [
            {
                "data": {
                    "$color": "#f00",
                    "weight": 1
                },
                "nodeTo": "12"
            },
            {
                "data": {
                    "weight": 1
                },
                "nodeTo": "1"
            }
        ]
    },
    {
        "name": "Induction",
        "id": "15",
        "data": {
            "text": "All complex things we have checked for a designer have had one, the world is complex, so it is probable that the world has a designer."
        },
        "adjacencies": [
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
                "nodeTo": "1"
            }
        ]
    },
    {
        "name": "Carbon",
        "id": "16",
        "data": {
            "text": "Carbon's chemical properties (specifically, it's ability to form complex molecules) is vital to life, and yet unique on the periodic table, potentially hinting at design?"
        },
        "adjacencies": [
            {
                "data": {
                    "weight": 1
                },
                "nodeTo": "3"
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
    
