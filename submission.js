const form = document.querySelector("form");
const inputs = document.querySelectorAll("form input");
const submit = document.querySelector(".btn-submit");
const email = document.querySelector("#email");
const cep = document.querySelector("#cep");

email.addEventListener('focus', () => {
  email.style.borderColor = "magenta";
  email.style.borderWidth = "3px";
})

submit.addEventListener('click', (e) => {
  e.preventDefault();
  
  for(let i = 0; i < inputs.length; i++){
    const input = inputs[i];
    const dados = input.value;
    console.log(dados);
  }
  console.log('funcionou');
})

cep.addEventListener('blur', e => {   //perdeu o foco, saiu do campo do input
  let search = cep.value.replace("-", "");
  const options = {
    method: 'GET',
    mode: 'cors',  //cross domain, um origem de servidor diferente - forma educada de dá licença posso entrar na sua casa
    cache: 'default'
  }

  fetch(`viacep.com.br/ws/${search}/json/`, options)   // acesse essa url com essas opções 
  .then(response => {  //quero saber a resposta, faz uma arrow function, traz a reposta no formato json, já é um tratamento da resposta
    response.json()      //deu certo? o json tb retorna uma promessa, e novamente o then
    .then(data => console.log(data)) //retorna os dados pra mim, e mostra num console.log
  })
  .catch(e => console.log('deu ruim', e.message))  //se der algum problema, captura a msg
})

//fetch api é um método que consulta uma url remota, e precisamos passar ums parametros
//justamente porque estamos trabalhando com servidores diferentes, por isso os options

//toda vez que ele acessa um api, ele retorna uma promisse, é asincrono
//como não sabemos como volta, coloca o .then se der certo, senão é um .catch
