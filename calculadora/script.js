function calcular(operador) {
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = 0;
  
    if (operador === 'SUMAR') {
      resultado = numero1 + numero2;
    } else if (operador === 'RESTAR') {
      resultado = numero1 - numero2;
    } else if (operador === 'MULTIPLICAR') {
      resultado = numero1 * numero2;
    } else if (operador === 'DIVIDIR') {
      if (numero2 !== 0) {
        resultado = numero1 / numero2;
      } else {
        alert('No se puede dividir por cero');
        return;
      }
    }
  
    document.getElementById('resultado').textContent = resultado;
  }
  