let colorBtn = document.getElementById('colorBtn');
let colorText = document.querySelector('.color');
let keys = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
colorBtn.addEventListener('click',function(){
let key = "#";
for(let i = 0; i < 6 ; i++){
key += keys[getRandomKey()];
}
colorText.innerHTML = key;
document.body.style.backgroundColor = key;

});

function getRandomKey() {
    return Math.floor(Math.random() * keys.length);
};
