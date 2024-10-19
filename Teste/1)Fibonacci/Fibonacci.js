function verificarFibonacci() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
    //Validação do numero 
    if (isNaN(numero) || numero < 0) {
      resultado.textContent = "Por favor, digite um número válido!";
      return;
    }
    
    if (pertenceFibonacci(numero)) {
      resultado.textContent = `O número ${numero} pertence à sequência de Fibonacci!`;
    } else {
      resultado.textContent = `O número ${numero} não pertence à sequência de Fibonacci.`;
    }
  }
  
  function pertenceFibonacci(n) {
    let a = 0, b = 1;
    //Se b=1 e n=2
    while (b < n) {
    //Enquanto b for menor que 2 vamos fazendo a operação
      const temp = b;
    //Somando b+a 
      b = a + b;
      //Guardo o valor para proxima iteraçaõ
      a = temp;
    }
    //se meu valor for igual o valor fornecido volta true ou false 
    return b === n || a === n;
  }
  