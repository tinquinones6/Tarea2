function convertirAMayusculas(texto) {
    return texto.toUpperCase();
  }
  
  function convertirAMinusculas(texto) {
    return texto.toLowerCase();
  }
  
  function restarNumeros(numero1, numero2) {
    return numero1 - numero2;
  }
  
  function dividirNumeros(numero1, numero2) {
    if (numero2 === 0) {
      return "No se puede dividir por cero";
    }
    return numero1 / numero2;
  }
  
  function multiplicarNumeros(numero1, numero2) {
    return numero1 * numero2;
  }
  
  function longitudDelString(texto) {
    return texto.length;
  }
  
  console.log(convertirAMayusculas("palabra"));
  console.log(convertirAMinusculas("PALABRA"));
  console.log(restarNumeros(50, 20));
  console.log(dividirNumeros(15, 3));
  console.log(multiplicarNumeros(7, 6));
  console.log(longitudDelString("palabra"));
  