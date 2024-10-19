function verificarLetra() {
  const entrada = document.getElementById("entrada").value;
  const resultado = document.getElementById("resultado");

  if (!entrada) {
    resultado.textContent = "Por favor, digite uma frase.";
    return;
  }
  //Posso utilizar um regex para diferenciar em A ou a 
  const regex = /a/gi; 
  const ocorrencias = entrada.match(regex); //Procuro a ocorrencia de a no regex 

  if (ocorrencias) {
    const quantidade = ocorrencias.length;
    resultado.textContent = `A letra 'A' aparece ${quantidade} vez(es).`;
  } else {
    resultado.textContent = "A letra 'A' não foi encontrada na frase.";
  }
}
