"use strict";

//color box//

var myBoxes = document.getElementsByClassName('button1');

function loopThrough() {
    var _this = this;

    var changeColor = function changeColor() {
        return _this.classList.toggle("red");
    };

    changeColor();

    for (var i = 0; i < this.textContent.length * 2; i++) {
        setTimeout(changeColor, i * 1000);
    }this.textContent.length;
};

//take away color buttons//


function changeLayer() {
    var swapLayers = function swapLayers() {

        var layerOne = document.getElementById("layerOne");
        layerOne.classList.add("hide");

        var layerTwo = document.getElementById("layerTwo");
        layerTwo.classList.remove("hide");
    };

    setTimeout(swapLayers, this.textContent.length * 2000);
};

//take away number buttons//

function changeLayerNum() {
    var swapLayersNum = function swapLayersNum() {

        var layerTwo = document.getElementById("layerTwo");
        layerTwo.classList.add("hide");

        var span = document.getElementById("fortune");
        span.classList.remove("hide");
    };

    setTimeout(swapLayersNum, this.textContent.length * 4000);
};

for (var i = 0; i < myBoxes.length; i++) {

    myBoxes[i].addEventListener("click", loopThrough);

    myBoxes[i].addEventListener("click", changeLayer);

    myBoxes[i].addEventListener("click", changeLayerNum);
};