function init(){
    var json = [
    {
        "Type1": "",
        "Node_from2": "",
        "name": "Most rational explanation",
        "argument": "Scientific theories do not require large assumptions, so they are more reasonable and more likely to be true.",
        "ID": "1",
        "node_to": "",
        "Node_from1": "",
        "type": "",
        "Type_2": ""
    },
    {
        "Type1": "",
        "Node_from2": "",
        "name": "not proof",
        "argument": "This does not automatically make them true.",
        "ID": "2",
        "node_to": "",
        "Node_from1": "",
        "type": "",
        "Type_2": ""
    },
    {
        "Type1": "",
        "Node_from2": "",
        "name": " Victorious despite tradition",
        "argument": "Science has always had more than its fair share of hate and scrutiny [evidence needed], however they still end up holding water and seeming true-er over time.",
        "ID": "3",
        "node_to": "",
        "Node_from1": "",
        "type": "",
        "Type_2": ""
    },
    {
        "Type1": "",
        "Node_from2": "",
        "name": "Always correcting itself...",
        "argument": "Physics, by nature, is all about correcting hypotheses, so we never get answers.",
        "ID": "4",
        "node_to": "",
        "Node_from1": "",
        "type": "",
        "Type_2": ""
    },
    {
        "Type1": " or dark matter/energy.\"",
        "Node_from2": "",
        "name": "can't explain everything",
        "argument": " \"Physics FAILS to explain: how the big bang broke the laws of physics",
        "ID": "5",
        "null": [
            "",
            "",
            "",
            ""
        ],
        "node_to": " all the totally-not-a-hoax paranormal activity",
        "Node_from1": " the answer to all the 'why's",
        "type": " how a collection of particles (me) can perceive the universe around it",
        "Type_2": ""
    },
    {
        "Type1": "",
        "Node_from2": "",
        "name": "Empirical evidence",
        "argument": "Experiments often back up scientific theories [evidence needed]",
        "ID": "6",
        "node_to": "",
        "Node_from1": "",
        "type": "",
        "Type_2": ""
    },
    {
        "Type1": "",
        "Node_from2": "",
        "name": "Bad science",
        "argument": "many experiments are biased toward the  hypothesis [examples needed], so evidence isn't always reliable",
        "ID": "7",
        "node_to": "",
        "Node_from1": "",
        "type": "",
        "Type_2": ""
    },
    {
        "Type1": "",
        "Node_from2": "",
        "name": "no disproof",
        "argument": "Despite science's best efforts, it cannot completely rule out metaphysics, this could show that metaphysics may exist",
        "ID": "8",
        "node_to": "",
        "Node_from1": "",
        "type": "",
        "Type_2": ""
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
    
