//NOTA: Copiar solo uno de los ejercicios, o si los toma todos, comentar todos a excepción del ejercicio a utilizar.

/*Ejercicio 1: Utilizando un bucle, mostrar la suma y la media de los números introducidos hasta introducir un número negativo
y ahí mostrar el resultado.*/

alert("Hola, por favor ingrese numeros a la maldita sea: ");

let acumulado = 0;
let bucle = true;
let numeros = [];
let media;

while (bucle) 
{
    let numero = parseInt(prompt("Ingrese un número para sumar: "));

    if (numero < 0) 
    {
        bucle = false;
    }
    else
    {
        acumulado += numero;
        numeros.push(numero);
        media = acumulado / numeros.length;
    }
}

document.write("El resultado final de su suma es: " + acumulado);
document.write("<br> Media del array: " + media);

//--------------------------------------------------------------------------------------------------------------------------

//Ejercicio 2: Hacer un programa que muestre todos los números entre dos números introducidos por el usuario.

let numeros = [];
let bucle = true;

while (bucle) 
{
    let numero = parseInt(prompt("Ingrese números: "));

    if (numero < 0) 
    {
        bucle = false;
    }
    else
    {
        numeros.push(numero);
    }
}

for (let i = 0; i < numeros.length; i++) 
{
    if ((numeros[i] != numeros[0]) && (numeros[i] != numeros[(numeros.length) - 1])) 
    {
        document.write(numeros[i] + " ");
    }
}

//--------------------------------------------------------------------------------------------------------------------------

//Ejercicio 3: Mostrar todos los números IMPARES que hay entre dos números introducidos por el usuario.

let numeros = [];
let impares = [];
let bucle = true;

while (bucle) 
{
    let numero = parseInt(prompt("Ingrese números: "));

    if (numero < 0) 
    {
        bucle = false;
    }
    else
    {
        numeros.push(numero);
    }
}

for (let i = 0; i < numeros.length; i++) 
{
    if ((numeros[i] != numeros[0]) && (numeros[i] != numeros[(numeros.length) - 1])) 
    {
        if ((numeros[i] % 2) == 1) 
        {
            impares.push(numeros[i]);
        }
    }
}

document.write("Los números impares ingresados son: " + impares);

//--------------------------------------------------------------------------------------------------------------------------

//Ejercicio 4: Muestre todos los números divisores de un número (entre 1 y 50) de un número que igresa por un prompt.

let numero = parseInt(prompt("Ingrese su número: "));

console.log("Los numeros que pueden dividir a " + numero + " son:");
document.write("Los numeros que pueden dividir a " + numero + " son: ");

for (let i = 1; i <= 50; i++) 
{
    let resultado = numero / i;

    if (Number.isInteger(resultado)) 
    {
        console.log(i);
        document.write("<br>" + i);
    }
}

//--------------------------------------------------------------------------------------------------------------------------

//Ejercicio 5: Programa que nos diga si un número es par o impar.
let bucle = true;

while (bucle) 
{
    let numero = parseInt(prompt("Ingrese su número: "));

    if (Number.isInteger(numero)) 
    {
        if ((numero % 2) == 0) 
        {
            console.log("El número " + numero + " es un número par");
            document.write("El número " + numero + " es un número par");
            bucle = false;
        }
        else 
        {
            console.log("El número " + numero + " es un número impar");
            document.write("El número " + numero + " es un número impar");
            bucle = false;
        }
    }
    else 
    {
        alert("Valor ingresado incorrecto, por favor, intente nuevamente.");
    }
}

//--------------------------------------------------------------------------------------------------------------------------

//Ejercicio 6: Tabla de multiplicar de un número introducido por pantalla.

let numero = parseInt(prompt("Ingrese su número: "));

console.log("Tabla de multiplicar del número " + numero + ": ");
document.write("Tabla de multiplicar del número " + numero + ": ");

for (let i = 1; i <= 10; i++) 
{
    console.log(numero + " x " + i + " = " + (numero * i));
    document.write("<br>" + numero + " x " + i + " = " + (numero * i));
}

//--------------------------------------------------------------------------------------------------------------------------

/*Ejercicio 7: Calculadora:
- Que pida dos números por pantalla
- Mostrar en el cuerpo de la página, en una alerta y en la consola el resultado de la operación (+, -, *, /)
- Crear la máxima cantidad de funciones posible*/ 

let numeros = [];
let bucle = true;

//Pedimos por medio de prompt, dos números al usuario y los agregamos a un array.
function pedirNumeros()
{
    let x = parseInt(prompt("Ingrese 1er número: "));
    let y = parseInt(prompt("Ingrese 2do número: "));

    numeros.push(x, y);

    return numeros;
}

//Verificar si los dos valores ingresados son números enteros.
function verificarValores(x, y) 
{
    return (Number.isInteger(x) && Number.isInteger(y));
}

//Mostrar los resultados de las operaciones en el cuerpo de la página.
function resultadoPagina(x, y)
{
    //Si los valores son numeros enteros mostrar los resultados y desactivar el bucle, de lo contrario, pedir de nuevo los valores.
    if (verificarValores(x, y))
    {
        document.write("Los números ingresados son: " + numeros);
        document.write("<br>" + "El resultado de su suma es: " + "<span style='color:blue'>" + (x + y) + "</span>");
        document.write("<br>" + "El resultado de su resta es: " + "<span style='color:blue'>" + (x - y) + "</span>");
        document.write("<br>" + "El resultado de su multiplicación es: " + "<span style='color:blue'>" + (x * y) + "</span>");
        document.write("<br>" + "El resultado de su división es: " + "<span style='color:blue'>" + (x / y) + "</span>");
    }
    else
    {
        document.write("Ocurrió un error :(");
    }
}

function resultadoConsola(x, y)
{
    if (verificarValores(x, y))
    {
        console.log("Los números ingresados son: " + numeros);
        console.log("El resultado de su suma es: " + (x + y));
        console.log("El resultado de su resta es: " + (x - y));
        console.log("El resultado de su multiplicación es: " + (x * y));
        console.log("El resultado de su división es: " + (x / y));
    }
    else
    {
        console.log("Ocurrió un error :(");
    }
}

function resultadoAlerta(x, y)
{
    if (verificarValores(x, y))
    {
        alert("Los números ingresados son: " + numeros
        + "\n" + "El resultado de su suma es: " + (x + y)
        + "\n" + "El resultado de su resta es: " + (x - y)
        + "\n" + "El resultado de su multiplicación es: " + (x * y)
        + "\n" + "El resultado de su división es: " + (x / y));
    }
    else
    {
        alert("Ocurrió un error :(");
    }
}

//Ejecutar todas las funciones necesarias para el funcionamiento del programa.
function main()
{
    pedirNumeros();

    resultadoPagina(numeros[0], numeros[1]);
    resultadoConsola(numeros[0], numeros[1]);
    resultadoAlerta(numeros[0], numeros[1]);
}

//Llamar a la función principal.
main();

//--------------------------------------------------------------------------------------------------------------------------
//Ejercicio 8: Pedir 6 números por pantalla y ponerlos en un array.

let numeros = [];
alert("Hola, ingrese 6 numeros")

for (let i = 0; i < 6; i++) 
{
    let numero = parseInt(prompt("Ingrese el número (" + (i + 1) + "): "));
    numeros.push(numero);
}

document.write("Array creado: ", numeros);