// clase factura
class Factura {
    // constructor de la clase
    constructor(numero, cliente, divisa, subtotal, IVA) {
        this.numero = numero;
        this.cliente = cliente;
        this.divisa = divisa;
        this.subtotal = subtotal;
        this.IVA = IVA;
    }
    // getters
    get total() {
        // método get
        return this.subtotal + this.IVA;
    }
    // setters
    set nuevaDivisa(valor) {
        this.divisa = valor;
    }
    // métodos
    aplicarDescuento(porcentaje) {
        this.subtotal -= this.subtotal / 100 * porcentaje;
        62
    }
    static instrucciones() {
        console.log("Indica para cada factura su numero, cliente, divisa, subtotal e IVA en este orden");
    }
    static calcularDiferencia(factura1, factura2) {
        return factura1.total - factura2.total;
    }
}

// Invocar método de clase (static)
Factura.instrucciones();

// Crear dos objetos factura
const factura1 = new Factura(201, "Transportes SA", "eur", 542, 113);
const factura2 = new Factura(202, "Mudanzas SA", "eur", 100, 21);

// La factura 201 está en divisa eur
console.log("La factura " + factura1.numero + " está en divisa " + factura1.divisa);

// La factura 202 tiene un total de 121 eur
console.log("La factura " + factura2.numero + " tiene un total de " + factura2.total + " " + factura2.divisa);

// La factura 202 tiene ahora un total de 121 GBP
factura2.nuevaDivisa = "GBP";
console.log("La factura " + factura2.numero + " tiene ahora un total de " + factura2.total + " " + factura2.divisa);

// La factura 202 tiene ahora un total de 71 GBP
factura2.aplicarDescuento(50);
console.log("La factura " + factura2.numero + " tiene ahora un total de "+ factura2.total + " " + factura2.divisa);

// La diferencia entre las facturas es de 584
const diferencia = Factura.calcularDiferencia(factura1, factura2);
console.log("La diferencia entre las facturas es de " + diferencia);