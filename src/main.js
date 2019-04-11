
//blue box//

const myBoxes = document.getElementsByClassName('button1');


function loopThrough(){
   
    const changeColor = () => this.classList.toggle("red");
    
    changeColor();

   
   for (let i = 0; i< this.textContent.length * 2 ; i++){
       setTimeout(changeColor, i * 1000);
       
   
       
   } this.textContent.length;
   
};


for (let i = 0; i < myBoxes.length; i++){
    
    myBoxes[i].addEventListener("click", loopThrough);

    myBoxes[i].addEventListener("click", changeLayer);

};

//take away buttons//


function changeLayer (){
    const swapLayers = () => {

        var layerOne = document.getElementById("layerOne");
        layerOne.classList.add("hide");
        
        var layerTwo = document.getElementById("layerTwo");
        layerTwo.classList.remove("hide");
};
    
    

  setTimeout(swapLayers, this.textContent.length * 2000);
        
    };





/*
//green box//

const myBoxesGreen = document.getElementsByClassName('button2');


function loopThrough(){
   
    const changeColor = () => this.classList.toggle("red");
    
    changeColor();

   
   for (let i = 0; i< this.textContent.length * 2 ; i++){
       setTimeout(changeColor, i * 1000);
       
       
   } this.textContent.length;
    
    
};


for (let i = 0; i < myBoxesGreen.length; i++){
    
    myBoxesGreen[i].addEventListener("click", loopThrough);
};





//orange box//

const myBoxesOr = document.getElementsByClassName('button3');


function loopThrough(){
   
    const changeColor = () => this.classList.toggle("red");
    
    changeColor();

   
   for (let i = 0; i< this.textContent.length * 2 ; i++){
       setTimeout(changeColor, i * 1000);
       
       
   } this.textContent.length;
    
    
};


for (let i = 0; i < myBoxesOr.length; i++){
    
    myBoxesOr[i].addEventListener("click", loopThrough);
};

//red box//


const myBoxesRed = document.getElementsByClassName('button4');


function loopThrough(){
   
    const changeColor = () => this.classList.toggle("red");
    
    changeColor();

   
   for (let i = 0; i< this.textContent.length * 2 ; i++){
       setTimeout(changeColor, i * 1000);
       
       
   } this.textContent.length;
    
    
};


for (let i = 0; i < myBoxesRed.length; i++){
    
    myBoxesRed[i].addEventListener("click", loopThrough);
};



*/
