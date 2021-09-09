
const cardContainer = document.getElementById("cardContainer")
const sortLog = document.getElementById("sortLog")
const input = document.getElementById("input")
const draw = document.getElementById("draw")
const sort = document.getElementById("sort")

let cartas = []

function generadorCartasRandom(num = []) {
    const listaNumero = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    const listaPinta = ["♥", "♦", "♣", "♠"];
    for (let i = 0; i < num; i++) {
        const carta = document.createElement("div")
        const numero = document.createElement("div")
        const pinta1 = document.createElement("div")
        const pinta2 = document.createElement("div")
        numero.className = "d-flex align-items-center numero"
        pinta1.className = "pinta"
        pinta2.className = "pinta d-flex align-items-end"
        carta.className = "carta d-flex justify-content-around"
        const generadorPinta = listaPinta[Math.floor(Math.random() * listaPinta.length)]
        if (generadorPinta === "♦" || generadorPinta === "♥") {
            carta.classList.add("text-danger")
        }
        const numeroRand = Math.floor(Math.random() * listaNumero.length)
        const generadorValor = listaNumero[numeroRand]
        pinta1.innerHTML = generadorPinta
        pinta2.innerHTML = generadorPinta
        numero.innerHTML = generadorValor
        carta.appendChild(pinta1)
        carta.appendChild(numero)
        carta.appendChild(pinta2)
        cartas.push({ valor: numeroRand, pinta: generadorPinta })
        cardContainer.appendChild(carta)
        console.log(carta)
    }
    return cartas
}

function impresorCartas(arr = [], i) {
    const listaNumero = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    const contCarta = document.createElement("div");
    contCarta.className = "d-flex contCarta"
    sortLog.appendChild(contCarta);
    for (let i = 0; i < arr.length; i++) {
        const carta = document.createElement("div")
        const numero = document.createElement("div")
        const pinta1 = document.createElement("div")
        const pinta2 = document.createElement("div")
        carta.className = "d-flex carta justify-content-around"
        pinta1.className = "pinta"
        pinta2.className = "pinta d-flex align-items-end"
        numero.className = "d-flex align-items-center numero"
        const generadorValor = listaNumero[arr[i].valor]
        const generadorPinta = arr[i].pinta
        if (generadorPinta === "♦" || generadorPinta === "♥") {
            carta.classList.add("text-danger")
        }
        pinta1.innerHTML = generadorPinta
        pinta2.innerHTML = generadorPinta
        numero.innerHTML = generadorValor
        carta.appendChild(pinta1)
        carta.appendChild(numero)
        carta.appendChild(pinta2)
        contCarta.appendChild(carta)
    }
}
window.onload = function () {
    draw.addEventListener("click", () => {
        cardContainer.innerHTML = "";
        sortLog.innerHTML = "";
        generadorCartasRandom(input.value)
    })

    sort.addEventListener("click", () => {
        sortLog.innerHTML = "";
        selectionSort(cartas)
        console.log(selectionSort(cartas))
        cartas=[]
    })
}

function selectionSort(inputArr) { 
    let n = inputArr.length;
    let count = 0
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){ 
            if(inputArr[j].valor < inputArr[min].valor) {
                min=j;
            }
         }
         if (min != i) {
             // Swapping the elements
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;
             count += 1
             const p = document.createElement("p")
             p.innerHTML = count;
             sortLog.appendChild(p)
             impresorCartas(inputArr)
        }
    }
    return inputArr;
}