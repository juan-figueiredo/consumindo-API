function consultar(){

  const cep = document.getElementById("cep").value
  const resultado = document.getElementById("result")
  
  if(cep.length !== 8){
    resultado.innerHTML = `CEP inválido, verifique os dados inseridos e tente novamente.`;
    return;
  }
  
  const url = `https://viacep.com.br/ws/${cep}/json/`

  fetch(url)
  .then(response =>{
    return response.json();
  })
  .then(data =>{
    resultado.innerHTML = 
    `
    CEP: ${data.cep}, Logradouro: ${data.logradouro}, Complemento: ${data.complemento}, Bairro: ${data.bairro}, Cidade: ${data.localidade},
    UF: ${data.uf}, DDD: ${data.ddd}
    `
  })

}