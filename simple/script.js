let colorBtn = document.getElementById('colorBtn');
let bcgColor = document.querySelector('.color');
let simpleColor = ["green","red","blue","yellow","rgba(215,56,95)","pink"]

colorBtn.addEventListener('click',function(){
    let random = randomKey();
    bcgColor.innerHTML = simpleColor[random];
    document.body.style.backgroundColor = simpleColor[random];
    
});



function randomKey(){
    return Math.floor(Math.random() * simpleColor.length);
}



