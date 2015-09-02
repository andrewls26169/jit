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
            }
        ], 
        "data": {
            "text": "1) The world came into existence at a time (Big Bang) (premise) 2) The universe only exists because God willed it to (assumption for proof by contradiction) 3) God never changes (another assumption for proof by contradiction) 4) At Big Bang: God willed the universe into existence. (from 1 and 2) 5) There is a time before the big bang (Big Bang -1) where the universe didn't exist (from 1) 6) At Big Bang -1, God doesn't will the universe into existence (from 2 and 5) 7) God had a property at one time but not at another; therefore he/she is not immutable. This contradicts 3, therefore, God is impossible."
        }, 
        "id": "1", 
        "name": "Creation vs immutability argument"
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
            "text": "Before the big bang (which is a contradictory statement), time did not exist, therefore 5 cannot be inferred from 1."
        }, 
        "id": "2", 
        "name": "No time"
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
            "text": "There is a variation of the argument that stated that at t1 an object does not exist (God isn't willing it to) but at t2 it does (God DOES will it to exist), and it follows the same logic but only with that one object, not the whole universe. This version does not require reasoning step 5 at all."
        }, 
        "id": "3", 
        "name": "Doesn't matter"
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
            }
        ], 
        "data": {
            "text": "The comparison 7 doesn't hold water because it requires that we compare God and time. A comparison requires knowledge of both the things we are comparing (according to Augustine), but quantum physicists can't get a grip on how time works and some religions, such as Islam, state that we don't know how God works, either."
        }, 
        "id": "4", 
        "name": "We lack knowledge"
    }, 
    {
        "adjacencies": [
            {
                "nodeTo": "4", 
                "data": {
                    "$arc_start": "5", 
                    "$arg_type": "support", 
                    "weight": 1
                }
            }
        ], 
        "data": {
            "text": "Because God is immortal, his/her perception of time would, according to Augustine, is  that God percieves all time at once (which makes sense for an omniscient being; so he wills the universe to 'exist from Big Bang to End', NOT 'exist' from Big Bang to End. This means that although the objects change, God doesn't; he just sets objects to stop and start existing at specific times and doesn't change them afterwards."
        }, 
        "id": "5", 
        "name": "God's time is unlike ours"
    }, 
    {
        "adjacencies": [
            {
                "nodeTo": "4", 
                "data": {
                    "$arc_start": "6", 
                    "$arg_type": "support", 
                    "weight": 1
                }
            }
        ], 
        "data": {
            "text": "In our perception of time: the present has a duration of 0. Also, all beings that exist are in the present. However, because the present has no duration \u2013 and thus has a time-volume (or whatever you're supposed to call it) of 0m\u00b3s, it can't fit any objects that have volume and duration (i.e. anything that actually exists!) inside it. Therefore; unless our perception of time is flawed: nothing can exist, contradicting \u201cI think therefore I am\u201d."
        }, 
        "id": "6", 
        "name": "Present? More like Paradox"
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
    
