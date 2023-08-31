(function () {
  const temperatureInput = document.querySelector("#temperature");
  const toCelsiusButton = document.querySelector("#toCelsius");
  const toFahrenheitButton = document.querySelector("#toFahrenheit");
  const outputDiv = document.querySelector("#output");

  // Convert to Celsius
  toCelsiusButton.addEventListener("click", function () {
    const value = parseFloat(temperatureInput.value);
    const celsius = ((value - 32) * 5) / 9;
    outputDiv.textContent = `${value}F is ${celsius.toFixed(2)}C`;
  });

  // Convert to Fahrenheit
  toFahrenheitButton.addEventListener("click", function () {
    const value = parseFloat(temperatureInput.value);
    const fahrenheit = (value * 9) / 5 + 32;
    outputDiv.textContent = `${value}F is ${fahrenheit.toFixed(2)}F`;
  });
})();
