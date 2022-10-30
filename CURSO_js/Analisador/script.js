let num = document.getElementById('txtn')
let res = document.getElementByID('res')
let valores = []
let lista = document.getElementById('num_select')

function isNumero(n) {
    if(Number(n) >=1 && Number(n) <=100){
        return true
    }
    else{
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        window.alert("tudo ok")
    }
    else{
        alert("Valor inválido ou já encontrado na lista")
    }
}
function finalizar() {
    
}
/*var num = Number(numero.value)
        if(lista.indexOf(num)>=0){
            alert('Esse número já está na lista')
        }
        else{
            lista.push(num)
            let item = document.createElement('option')
            item.text = `Valor ${num} foi adicionado`
            tab.appendChild(item)
        }
        
        if(isNumero(num.value) && !inLista(num.value, valores)){
        alert("OK")
    }*/
