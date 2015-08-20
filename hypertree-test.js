function init(){
    var json = [
    {
        "adjacencies": [
            {
                "nodeTo": "2",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "3",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "4",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "5",
                "data": {
                    "weight": 1
                }
            }
        ],
        "id": "1",
        "data": {
            "text": "Carbon"
        },
        "name": "c"
    },
    {
        "adjacencies": [
            {
                "nodeTo": "1",
                "data": {
                    "weight": 1
                }
            }
        ],
        "id": "2",
        "data": {
            "text": "H"
        },
        "name": "p"
    },
    {
        "adjacencies": [
            {
                "nodeTo": "1",
                "data": {
                    "weight": 1
                }
            }
        ],
        "id": "3",
        "data": {
            "text": "H2"
        },
        "name": "q"
    },
    {
        "adjacencies": [
            {
                "nodeTo": "1",
                "data": {
                    "weight": 1
                }
            }
        ],
        "id": "4",
        "data": {
            "text": "H3"
        },
        "name": "r"
    },
    {
        "adjacencies": [
            {
                "nodeTo": "1",
                "data": {
                    "weight": 1
                }
            },
            {
                "nodeTo": "6",
                "data": {
                    "$color": "#f00",
                    "weight": 1
                }
            }
        ],
        "id": "5",
        "data": {
            "text": "O"
        },
        "name": "s"
    },
    {
        "adjacencies": [
            {
                "nodeTo": "5",
                "data": {
                    "$color": "#f00",
                    "weight": 1
                }
            }
        ],
        "id": "6",
        "data": {
            "text": "H4"
        },
        "name": "t"
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
    
