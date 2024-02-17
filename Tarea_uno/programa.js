const readlineSync = require('readline-sync');

const cantidad_productos = +readlineSync.question(`Ingrese la cantidad de productos a transportar: `);

let costo_total_flete = 0;
let producto_mayor_dimensiones = null;
let costo_promedio_flete = 0;
let total_impuestos = 0;

for(let i = 0; i < cantidad_productos; i++){
    const nombre_producto = readlineSync.question(`Ingrese el nombre del producto ${i+1}: `);
    const largo = +readlineSync.question(`Ingrese el largo del producto en centímetros: `);
    const ancho = +readlineSync.question(`Ingrese el ancho del producto en centímetros: `);
    const profundidad = +readlineSync.question(`Ingrese la profundidad del producto en centímetros: `);

    const volumen = largo * ancho * profundidad;
    const costo_flete = volumen * 100; // $100 por centímetro
    let impuesto = 0;

    if (volumen > 1000 && volumen <= 10000) {
        impuesto = costo_flete * 0.1; // 10% de impuesto
    } else {
        impuesto = costo_flete * 0.2; // 20% de impuesto
    }

    const costo_total_producto = costo_flete + impuesto;
    costo_total_flete += costo_total_producto;
    total_impuestos += impuesto;

    // Para verificar si es el producto de mayores dimensiones
    if (!producto_mayor_dimensiones || volumen > producto_mayor_dimensiones.volumen) {
        producto_mayor_dimensiones = {
            nombre: nombre_producto,
            volumen: volumen
        };
    }
}

// Calcular promedio del costo de productos en el flete incluyendo impuestos
costo_promedio_flete = costo_total_flete / cantidad_productos;

console.log(`1. Costo total del flete: ${costo_total_flete}`);
console.log(`2. Producto de mayores dimensiones: ${producto_mayor_dimensiones.nombre}`);
console.log(`3. Promedio del costo de productos en el flete incluyendo impuestos: ${costo_promedio_flete}`);
console.log(`4. Total de impuestos por el flete: ${total_impuestos}`);