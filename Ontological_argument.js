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
            }
        ], 
        "data": {
            "text": "If one thinks of a being where nothing greater could be imagined (an omnipotent God): then \u2013 as something that is real is greater than the same thing in the imagination (real food has more calories than imaginary food) \u2013 we can be certain that such a being must exist because, if God doesn't exist, then the person has imagined something that is greater than the thing where nothing greater could be imagined; a contradiction of the first statement."
        }, 
        "id": "1", 
        "name": "Anslem's Chapter 2 argument"
    }, 
    {
        "adjacencies": [
            {
                "nodeTo": "3", 
                "data": {
                    "$arc_start": "2", 
                    "$arg_type": "support", 
                    "weight": 1
                }
            }
        ], 
        "data": {
            "text": "If one claims that it is impossible to think of a being of which nothing greater can exist, they are, in that statement, referring to a being of which nothing greater can exist, and therefore thinking of him/her for the purpose of comparison and thus contradicting themselves!"
        }, 
        "id": "2", 
        "name": "The fool's comparison"
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
            "text": "The argument could also have the contradiction resolved by stating that the being of which nothing greater can be imagined can't actually be imagined. This makes the argument only prove we can't comprehent an omnipotent being, a fact we know as an omnipotent being is able to do things beyond the brain's comprehension (if it can't, it isn't omnipotent!), and is therefore incomprehensible."
        }, 
        "id": "3", 
        "name": "Implies thought is possible"
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
            "text": "The argument has a premise that something real is greater than something imaginary, BUT there are some cases where the imaginary version is the greater one, for example: a real mistake is worse than an imaginary one; and one could prefer psycology over biology (such as myself). Therefore something real isn't always greater than it's imaginary counterpart, so it could also apply to Gods."
        }, 
        "id": "4", 
        "name": "Existing doesn't imply greatness"
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
    
