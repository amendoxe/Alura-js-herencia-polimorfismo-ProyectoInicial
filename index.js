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

const empleado = new Empleado("Jaimic", "39483");
const gerente = new Gerente("Not Jaimib", "329048");
const director = new Director("Other than Jaimic", "39980");

console.log(empleado);
console.log(gerente);
console.log(director);
empleado.showName();
gerente.showName();
director.showName();
