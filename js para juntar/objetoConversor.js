class Convertir {
    constructor(val, zona) {
        this.val = val
        this.zona = zona
        
    }
    
    calcularConversion(cantWatt, zona, tipoZona, costServ) {
        const valorFinal = costServ + (cantWatt * zona) * (1 + tipoZona)
        return valorFinal.toFixed(2)
    }

}
