
//display each neuron's activation when hovered
var altText = document.getElementById("altText");

//generate nn visual
var visual = document.createElement("DIV");
    gridContainer.appendChild(visual);
    visual.id = "NNVisual";
    for (var Nlayer = 0; Nlayer < nodesByLayer.length; ++Nlayer){
        var thisLayer = visual.appendChild(document.createElement("DIV"));
            thisLayer.id = "L" + Nlayer;
            thisLayer.align = "center";
        for (var Nnode = 0; Nnode < nodesByLayer[Nlayer]; ++Nnode){
            var thisNode = thisLayer.appendChild(document.createElement("DIV"));
                thisNode.id = "L" + Nlayer + "_N" + Nnode;
                thisNode.addEventListener("mouseover",
                    function(){
                        altText.style.display = "block";
                        altText.style.left = event.clientX;
                        altText.style.top = event.clientY;
                        altText.innerText = this.getAttribute("activation")
                    }
                );
                thisNode.addEventListener("mouseout",
                    function(){
                        altText.style.display = "none";
                    }
                );
        }
    }


//1 - convert output value into output vector
// 1 -> [0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
for (var Ndatum = 0; Ndatum < trainingData.length; Ndatum += 2){
  var vectorOut = [];
  for (var Nnumeral = 0; Nnumeral < 10; ++Nnumeral){
    vectorOut.push(Nnumeral == trainingData[Ndatum]);
  }
  trainingData[Ndatum] = vectorOut;
}

//2 backpropagate
function backpropagate(){
  
}