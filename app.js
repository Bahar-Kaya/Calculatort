let subresult = document.querySelector('.screen-up');  
let result = document.querySelector('.screen-down');   
let ac = document.querySelector('.ac');                
let abs = document.querySelector('.abs');              
let modulus = document.querySelector('.modulus');       
let divide = document.querySelector('.divide');        
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let multiply = document.querySelector('.multiply');    
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');   
let minus = document.querySelector('.minus');           
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let plus = document.querySelector('.plus');             
let zero = document.querySelector('.zero');
let dot = document.querySelector('.dot');
let equal = document.querySelector('.equal');          
ac.addEventListener('click', ()=>{
    result.innerText = ' ';
    subresult.innerText = ' ';
});

abs.addEventListener('click', ()=>{
    if(result.innerText > 0 || result.innerText < 0){
        result.innerText *= -1;
        subresult.innerText = result.innerText;

    }else{
        result.innerText = subresult.innerText *= -1;
        subresult.innerText = ' ';
        subresult.innerText = result.innerText;
    }
})
modulus.addEventListener('click', ()=> {
    if(result.innerText > 0 || result.innerText < 0){
        result.innerText /= 100;
        subresult.innerText = result.innerText;
        

    }else{
    result.innerText = subresult.innerText / 100;
    subresult.innerText = result.innerText;
    }
})