function init(){
    var json = [
    {
        "adjacencies": [
            {
                "nodeTo": "2", 
                "data": {
                    "$arc_start": "1", 
                    "$arg_type": "refute", 
                    "weight": 1, 
                    "$color": "#f00"
                }
            }, 
            {
                "nodeTo": "2", 
                "data": {
                    "$arc_start": "2", 
                    "$arg_type": "refute", 
                    "weight": 1, 
                    "$color": "#f00"
                }
            }
        ], 
        "data": {
            "text": "God knows all, and believes truth, the whole truth, and nothing but the truth. He also is completely unchangable. However there are some facts, like \u201cIt is now 15:31\u201d that go out of date. These so-called A-propositions (really? What does the A stand for?). It is thus impossible for an unchangable being (one who's knowledge does not change) to know one of these A-propositions as to know such a thing would require the change of knowledge. Therefore: an immutable God cannot be omniscient."
        }, 
        "id": "1", 
        "name": "The omniscience-immutability argument (map)"
    }, 
    {
        "adjacencies": [
            {
                "nodeTo": "1", 
                "data": {
                    "$arc_start": "1", 
                    "$arg_type": "refute", 
                    "weight": 1, 
                    "$color": "#f00"
                }
            }, 
            {
                "nodeTo": "1", 
                "data": {
                    "$arc_start": "2", 
                    "$arg_type": "refute", 
                    "weight": 1, 
                    "$color": "#f00"
                }
            }
        ], 
        "data": {
            "text": "This is a premise (and an extremely bold claim at that), and therefore needs an explaination."
        }, 
        "id": "2", 
        "name": "Conceptually possible?"
    }, 
    {
        "adjacencies": [], 
        "data": {
            "text": ""
        }, 
        "id": "3", 
        "name": ""
    }, 
    {
        "adjacencies": [], 
        "data": {
            "text": ""
        }, 
        "id": "4", 
        "name": ""
    }, 
    {
        "adjacencies": [], 
        "data": {
            "text": ""
        }, 
        "id": "5", 
        "name": ""
    }, 
    {
        "adjacencies": [], 
        "data": {
            "text": ""
        }, 
        "id": "6", 
        "name": ""
    }, 
    {
        "adjacencies": [], 
        "data": {
            "text": ""
        }, 
        "id": "7", 
        "name": ""
    }, 
    {
        "adjacencies": [], 
        "data": {
            "text": ""
        }, 
        "id": "8", 
        "name": ""
    }, 
    {
        "adjacencies": [], 
        "data": {
            "text": ""
        }, 
        "id": "9", 
        "name": ""
    }, 
    {
        "adjacencies": [], 
        "data": {
            "text": ""
        }, 
        "id": "10", 
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
    
