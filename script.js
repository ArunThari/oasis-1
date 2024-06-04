function convertTemperature() {
    // Get user input
    let temperatureInput = document.getElementById('temperature').value;
    let unit = document.getElementById('unit').value;

    // Validate input
    if (!temperatureInput || isNaN(temperatureInput)) {
        alert('Please enter a valid temperature.');
        return;
    }

    // Convert temperature
    let convertedTemperature;
    if (unit === 'celsius') {
        convertedTemperature = (parseFloat(temperatureInput) * 9/5) + 32;
        document.getElementById('result').innerHTML = `${temperatureInput}° Celsius is ${convertedTemperature.toFixed(2)}° Fahrenheit.`;
    } else if (unit === 'fahrenheit') {
        convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9;
        document.getElementById('result').innerHTML = `${temperatureInput}° Fahrenheit is ${convertedTemperature.toFixed(2)}° Celsius.`;
    } else if (unit === 'kelvin') {
        convertedTemperature = parseFloat(temperatureInput) + 273.15;
        document.getElementById('result').innerHTML = `${temperatureInput} Kelvin is ${convertedTemperature.toFixed(2)} Kelvin.`;
    }
}
