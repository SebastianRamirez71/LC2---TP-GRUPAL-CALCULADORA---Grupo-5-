const conv = new Convertir(valores, zona)
debugger
const listZonas = ()=> {
    let optionZ
    for (distZona of valores) {
        optionZ += `<option value="${distZona.precio}">${distZona.distrito}</option>`
    }
    return optionZ
}


listZonas()

debugger
const listUser = ()=>{
    let optionU
    for (distUser of zona){
        optionU += `<option value="${distUser.precio}">${distUser.zona}</option>`
    }
    return optionU
}

listUser()


const convertir = ()=>{
    cs = parseFloat(costoServicio)
    kwh = parseFloat(kWhMes.value)
    u = parseFloat(tipoUsu.value)
    z = parseFloat(zonaDomicilio.value)
    valorConver = conv.calcularConversion(kwh, z, u, cs)
    if(valorConver == "NaN"){
        resultado.innerHTML = `<div>${hidden}</div>`
    }else{
    resultado.innerHTML = `<div class="resultadoFinal">$ ${valorConver}</div>`
    }
}

convertir()