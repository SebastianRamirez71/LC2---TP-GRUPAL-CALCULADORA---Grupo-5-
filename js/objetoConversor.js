class Convertir {
    constructor(val, zona) {
        this.val = val
        this.zona = zona


    }

    calcularConversion(cantWatt, zona, tipoZona, costServ) {
        if (cantWatt <= 0 || cantWatt == "") {
            alert("Error, no puede ser negativo ni cero")
            resultado.innerHTML = `<div>${hidden}</div>`
        } else {
            const valorFinal = costServ + (cantWatt * zona) * (1 + tipoZona)
            return valorFinal.toFixed(2)
        }

    }

}
