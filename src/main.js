
//color box//

const myBoxes = document.getElementsByClassName('button1');


function loopThrough(){
   
    const changeColor = () => this.classList.toggle("red");
    
    changeColor();

   
   for (let i = 0; i< this.textContent.length * 2 ; i++){
       setTimeout(changeColor, i * 500);
       
   
       
   } this.textContent.length;
   
};




//take away color buttons//


function changeLayer (){
    const swapLayers = () => {

        var layerOne = document.getElementById("layerOne");
        layerOne.classList.add("hide");
        
        var layerTwo = document.getElementById("layerTwo");
        layerTwo.classList.remove("hide");
};
    
    

  setTimeout(swapLayers, this.textContent.length * 1000);
        
    };


//take away number buttons//

function changeLayerNum (){
    const swapLayersNum = () => {

        var layerTwo = document.getElementById("layerTwo");
        layerTwo.classList.add("hide");
        
        
        //randomized fortunes//
        var addPara= document.createElement("p")
        var randomize = document.getElementById("fortune");
        
        
        var fortuneItems = ["Life is like a box of Chocolates", "A body makes his own luck, be it good or bad", "Change yourself and fortune will change", "Good things come when you least expect them", "Great actions are not always true sons of great and mighty resolutions", "It is possible to have too much of a good thing", "Lightning never strikes the same place twice", "May the wind be always at your back"];
        
        fortuneItems.sort(function(a){return 0.5 - Math.random()});
        
        var textNode = document.createTextNode(fortuneItems[0]);
        
        randomize.appendChild(textNode);
        
        
        
        
        var span = document.getElementById("fortune");
        span.classList.remove("hide");
};
    
    

  setTimeout(swapLayersNum, this.textContent.length * 3000);
        
    };



for (let i = 0; i < myBoxes.length; i++){
    
    myBoxes[i].addEventListener("click", loopThrough);

    myBoxes[i].addEventListener("click", changeLayer);
    
    myBoxes[i].addEventListener("click", changeLayerNum);
    
   // myBoxes[i].addEventListener("click", showFortune);

};




