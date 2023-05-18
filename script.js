const num1 = document.getElementById("ingreso1");
const num2 = document.getElementById("ingreso2");
const num3 = document.getElementById("ingreso3");
const result = document.getElementById("resultado");
const ref = document.getElementById("refran");

const ejecutar = document.querySelector(".ejecutar");
ejecutar.addEventListener("click", () => {
  const valor1 = parseInt(num1.value);
  const valor2 = parseInt(num2.value);
  const valor3 = parseInt(num3.value);

  if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
    ref.textContent = "Error: Ingrese solo números válidos.";
    result.textContent = "";

  } else if (valor1 < valor2 && valor2 < valor3) {
    ref.textContent = "Los números están ordenados. Mostrando su suma:";
    const suma = valor1 + valor2 + valor3;
    result.textContent = suma;

  } else {
    ref.textContent = "Los números no están en orden. Mostrando su producto:";
    const producto = valor1 * valor2 * valor3;
    result.textContent = producto;
  }
  
});
