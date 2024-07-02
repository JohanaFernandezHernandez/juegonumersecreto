let intentos = 1;
let numeroSecreto = 0;
let numerosSorteados = [];
let numeroMaximo = 10

const asignarTextoElemento = (elemento, texto) => {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
};

function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
  console.log(intentos);
  if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //El usuario no aserto
    if (numeroUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El numero secreto es menor");
    } else {
      asignarTextoElemento("p", "El numero secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }

  return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

const generarNumeroSecreto = () => {
  let numeroGenerado =  Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroGenerado);
  console.log(numerosSorteados);
  if(numerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p', 'ya se sortearon todos los números posibles');
  }else	{
    // si el numero generado esta incluido en la lista 
    if( numerosSorteados.includes(numeroGenerado)){
      return generarNumeroSecreto();
    }else{
      numerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
};



function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego de numero secreto");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;

}

function reiniciarJuego() {
  //Limpiar la caja
  limpiarCaja();

  //Mensaje de inicio
  //generar el numero secreto
  //Inicializar el numero de intentos
  condicionesIniciales();

  //Deshabilitar el botón de nuevo juego
  document.getElementById("reiniciar").setAttribute('disabled', 'true');

}

condicionesIniciales();







































//EJERCICIO

// const calcularIMC = (altura, peso) => peso / (altura * altura);

// const altura = 1.60; // en metros
// const peso = 60; // en kilogramos
// const imc = calcularIMC(altura, peso);
// console.log(`El IMC es: ${imc}`);

// const factorialIterativo = (n) => {
//     if (n < 0) {
//       return "El factorial no está definido para números negativos.";
//     }
//     let resultado = 1;
//     for (let i = 1; i <= n; i++) {
//       resultado *= i;
//     }
//     return resultado;
//   };
  
//   // Ejemplo de uso
//   console.log(factorialIterativo(5)); // Output: 120
//   console.log(factorialIterativo(0)); // Output: 1
//   console.log(factorialIterativo(-3)); 

//   const usd = 4000;

//   const valorDolar = (dolar) => {

//     const pesosColombianos = dolar * usd
//     console.log(`son $${pesosColombianos} pesos colombianos`)

//   }

//   valorDolar(50);