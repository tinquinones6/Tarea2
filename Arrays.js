function sumarArray(numeros) {
    return numeros.reduce((acc, num) => acc + num, 0);
  }
  
  function promedioArray(numeros) {
    const suma = sumarArray(numeros);
    return suma / numeros.length;
  }
  
  function convertirArrayAMayusculas(strings) {
    return strings.map(str => str.toUpperCase());
  }
  
  function filtrarNumerosPares(numeros) {
    return numeros.filter(num => num % 2 === 0);
  }
  
  console.log(sumarArray([1, 2, 3, 4, 5])); // 15
  console.log(promedioArray([1, 2, 3, 4, 5])); // 3
  console.log(convertirArrayAMayusculas(["hola", "mundo"])); // ["HOLA", "MUNDO"]
  console.log(filtrarNumerosPares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
  