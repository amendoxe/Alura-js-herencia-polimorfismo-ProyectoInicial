/*Importación de clases*/
import { Cliente } from "./Cliente.js";
import { CuentaCorriente } from "./cuentas/CuentaCorriente.js";
import { CuentaAhorro } from "./cuentas/CuentaAhorro.js";
import { CuentaNomina } from "./cuentas/CuentaNomina.js";
import { Empleado } from "./Empleados/Empleado.js";
import { Director } from "./Empleados/Director.js";
import { Gerente } from "./Empleados/Gerente.js";

const cliente = new Cliente("Leonardo", "13804050", "123224");
const cliente2 = new Cliente("María", "16979808", "8989");

const empleado = new Empleado("Jaimic", "39483", 200);
const gerente = new Gerente("Not Jaimib", "329048", 200);
const director = new Director("Other than Jaimic", "39980", 200);

console.log(empleado.verBonificacion());
console.log(gerente.verBonificacion());
console.log(director.verBonificacion());

// empleado.showName();
// gerente.showName();
// director.showName();
