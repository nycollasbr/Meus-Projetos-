 var dolar = 5.1
 
 var usdinput = document.querySelector("#usd")
 var brlinput = document.querySelector("#brl")

usdinput.addEventListener("keyup",() => {
    convert("usd-to-brl")
})


brlinput.addEventListener("keyup",() => {
convert("brl-to-usd")
    
})

// usdinput.value ="1000,00"
//convert("usd-to-brl")


// funções
function formatCurrency(value) {
    var fixedValue = fixValue(value)
    var options = {
        useGrouping: false,
        minimumFractionDigits: 2
    }
    var formatter = new Intl.NumberFormat("pr-BR", options)
    return formatter.format(fixedValue)

}

function fixValue(value) {
    var fixedValue = value.replace(",", ".")
    var floatValue = parseFloat (fixedValue)
    if(floatValue == NaN){
        floatValue = 0
    }
    return floatValue
}

function convert(type){
    if(type == "usd-to-brl") {
        var fixedValue = fixValue (usdinput.value)
        var result = fixedValue * dolar
        result = result.toFixed(2)

        brlinput.value = formatCurrency(result)
        
    }

     if(type == "brl-to-usd") {
        var fixedValue = fixValue(brlinput.value)

        var result = fixedValue / dolar
        result = result.toFixed(2)

        usdinput.value = formatCurrency(result)
    }
}