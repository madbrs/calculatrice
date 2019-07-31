let btn = document.querySelectorAll('.btn');
let screen = document.querySelector('.screen');
let btnEqual = document.querySelector('.btn--equal');
let btnAllClear = document.querySelector('.btn--ac');
let btnReturn = document.querySelector('.btn--c');

for (let i = 0; i < btn.length; i++){
      btn[i].addEventListener('click', function(){
      let number = btn[i].getAttribute('data');
      screen.value += number;
      })  
}
btnEqual.addEventListener('click', function(){
   let result = eval(screen.value);
   screen.value = result;
})


btnAllClear.addEventListener('click', function(){
   screen.value= '';
}
)

// RETURN BUTTON