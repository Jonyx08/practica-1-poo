// 2. Crear una clase CuentaBancaria con los atributos titular y saldo. 
// Implementar métodos para depositar, retirar y mostrar el saldo actual

class CuentaBancaria {
    titular: string;
    saldo: number;
    
    constructor(titular: string, saldoInicial: number) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    depositar(monto: number): void {
        if (monto > 0) {
            this.saldo += monto;
            console.log(`Depósito exitoso de $${monto}. Nuevo saldo: $${this.saldo}`);
        } else {
            console.log("Error: El monto a depositar debe ser mayor a 0.");
        }
    }

    retirar(monto: number): void {
        // Verificamos que el monto sea válido y que haya suficientes fondos
        if (monto > 0 && this.saldo >= monto) {
            console.log(`Retiro exitoso de $${monto}. Nuevo saldo: $${this.saldo}`);
        } else if (monto <= 0) {
            console.log("Error: El monto a retirar debe ser mayor a 0.");
        } else {
            console.log("Error: Fondos insuficientes para realizar este retiro.");
        }
    }

    mostrarSaldo(): void {
        console.log(`El saldo actual de la cuenta de ${this.titular} es: $${this.saldo}`);
    }
}

// Probando la clase
const cuenta1 = new CuentaBancaria("Jonathan", 150);

cuenta1.mostrarSaldo();  // Muestra $150
cuenta1.depositar(50);   // Deposita $50, saldo $200
cuenta1.retirar(30);     // Retira $30, saldo $170
cuenta1.retirar(500);    // Tira error de fondos insuficientes