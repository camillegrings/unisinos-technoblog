function submit() {
  const celsius = document.getElementById("temp").value;
  const fahrenheit = (9 * celsius) / 5 + 32;

  const resultText = document.getElementById("result");
  resultText.textContent = fahrenheit;
}
