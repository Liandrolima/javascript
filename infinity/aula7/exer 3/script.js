//Atividade 03
//Crie uma função chamada converterTemperatura que recebe uma
//temperatura em graus Celsius e uma função de callback para conversão
//como argumentos. A função deve aplicar a função de callback à
//temperatura e retornar o resultado.

//# temperatura de °C para °F

//c = float(input('informe a temperatura Celsius°C '))
//F = (c * 9 / 5) + 32
//print(f'A temperatura de {c:.2f}°C corresponde a {F:.2f}°F!')

//# temperatura de °C para °F

//F = float(input('informe a temperatura em Fahrenheit °F '))
//C = (F - 32) * 5 / 9
//print(f'A temperatura de {F:.2f}°F corresponde a {C:.2f}°C!')

// Função principal que recebe uma temperatura e uma função de callback
function converterTemperatura(celsius, callback) {
    return callback(celsius);
}

// Função de callback para converter Celsius para Fahrenheit
const celsiusParaFahrenheit = (celsius) => (celsius * 9/5) + 32;

// Função de callback para converter Celsius para Kelvin
const celsiusParaKelvin = (celsius) => celsius + 273.15;

// Exemplo de uso:
const tempEmCelsius = 25;

const tempEmFahrenheit = converterTemperatura(tempEmCelsius, celsiusParaFahrenheit);
console.log(`Temperatura em Fahrenheit: ${tempEmFahrenheit}°F`);

const tempEmKelvin = converterTemperatura(tempEmCelsius, celsiusParaKelvin);
console.log(`Temperatura em Kelvin: ${tempEmKelvin}K`);
