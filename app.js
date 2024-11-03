const fechaActual = new Date()
const opciones = {year: "numeric", month: "long", day: "numeric"}
document.getElementById("fecha").innerHTML = fechaActual.toLocaleDateString("es-Es", opciones)

const btn = document.querySelector("#confirmar")

btn.addEventListener("click", () => {
    const rangoSuperior = document.querySelector("#rangoSuperior").value
    const rangoSuperiorFloat = parseFloat(rangoSuperior)
    const rangoCentral = document.querySelector("#rangoCentral").value
    const rangoCentralFloat = parseFloat(rangoCentral)
    const rangoInferior = document.querySelector("#rangoInferior").value 
    const rangoInferiorFloat = parseFloat(rangoInferior)
    const lotajeCuentaReal = 10 / ((rangoSuperiorFloat - rangoCentralFloat) * 100000)
    const lotajeDarwinex = 2000 / ((rangoSuperiorFloat - rangoCentralFloat) * 100000)
    const StopSize = (rangoSuperiorFloat - rangoCentralFloat)*10000
    const takeProfitBuy = (rangoSuperiorFloat - rangoCentralFloat) + rangoSuperiorFloat
    const takeProfitSell = rangoInferiorFloat - (rangoCentralFloat - rangoInferiorFloat)
    console.log(takeProfitSell.toFixed(5));
    
    const body = document.querySelector("body")
    const div = document.createElement("div")
    const divOperaciones = document.createElement("div")
    const footer = document.createElement("h4")
    footer.innerText = "Powered by JulioVLHZ"
    divOperaciones.classList.add("operaciones")
    div.classList.add("lotaje")
    body.appendChild(div)
    body.appendChild(divOperaciones)
    body.appendChild(footer)

    document.querySelector(".lotaje").innerHTML = `
        <div id = "cuentaReal">
            <h3>
                Cuenta Real:
            </h3>
            <h3>
                ${lotajeCuentaReal.toFixed(2)}
            </h3>
        </div>

         <div id = "cuentaDarwinex">
            <h3>
                Cuenta Darwinex:
            </h3>
            <h3>
                ${lotajeDarwinex.toFixed(2)}
            </h3>
        </div>
        <div id = "Stop">
            <h3>
                Tamaño de Stop
            </h3>
            <h3>
                ${StopSize.toFixed(1)}  pips
            </h3>
        </div>
    `
    document.querySelector(".operaciones").innerHTML = `
        <div id = "compra">
            <h2>Compra</h2>
            <div>
                <h3>Entrada</h3>
                <h3>${rangoCentralFloat}</h3>
            </div>
            <div>
                <h3>Stop Loss</h3>
                <h3>${rangoInferiorFloat}</h3>
            </div>
            <div>
                <h3>Take Profit</h3>
                <h3>${takeProfitBuy.toFixed(5)}</h3>
            </div>
        </div>
        <div id = "venta">
            <h2>Venta</h2>
            <div>
                <h3>Entrada</h3>
                <h3>${rangoCentralFloat}</h3>
            </div>
            <div>
                <h3>Stop Loss</h3>
                <h3>${rangoSuperiorFloat}</h3>
            </div>
            <div>
                <h3>Take Profit</h3>
                <h3>${takeProfitSell.toFixed(5)}</h3>
            </div>
        </div>
    `
})


