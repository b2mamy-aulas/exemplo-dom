const form = document.querySelector("form");
const inputs = document.querySelectorAll("form input");
const submit = document.querySelector(".btn-submit");

submit.addEventListener('click', (e) => {
  e.preventDefault();
  
  for(let i = 0; i < inputs.length; i++){
    const input = inputs[i];
    const dados = input.value;
    console.log(dados);
  }
  console.log('funcionou');
})