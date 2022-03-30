let jugador1 = 0
let cpu = 0
let modojuego = "";
let isTableroselected = false
let btnplayer1 = document.getElementById('1player');
let btncpu = document.getElementById('cpu');
let btntbl1 = document.getElementById('btnTablero1');
let btntbl2 = document.getElementById('btnTablero2');
let btntbl3 = document.getElementById('btnTablero3');
let btnplay = document.getElementById('play');
let btnnext = document.getElementById('next');
let btnTablas = document.getElementById('masTablas');
let btnReiniciar = document.getElementById('Reiniciar');
let cartas = [];
let cartajugar = document.getElementById('mazo')
let frasesBaraja = ["","El que la cantó a San Pedro",
                "Pórtate bien cuatito, si no te lleva el coloradito.",
                "Puliendo el paso, por toda la calle real.",
                "Don Ferruco en la alameda, su bastón quería tirar.",
                "Para el sol y para el agua.",
                "Medio cuerpo de señora se divisa en altamar.",
                "Súbeme paso a pasito, no quieras pegar brinquitos.",
                "La herramienta del borracho.",
                "Tanto bebió el albañil, que quedó como barril.",
                "El que a buen árbol se arrima buena sombra le cobija.",
                "Me lo das o me lo quitas.",
                "Por qué le corres cobarde, trayendo tan buen puñal.",
                "Ponle su gorrito al nene, no se nos vaya a resfriar.",
                "La muerte siriqui siaca.La muerte tilica y flaca.",
                "El que espera desespera.",
                "Verde blanco y colorado, la bandera del soldado.",
                "Tocando su bandolón, está el mariachi Simón.",
                "Creciendo se fue hasta el cielo, y como no fue violín, tuvo que ser violoncello.",
                "Al otro lado del río tengo mi banco de arena, donde se sienta mi chata pico de garza morena.",
                "Tú me traes a puros brincos, como pájaro en la rama.",
                "La mano de un criminal.La mano de un escribano.",
                "Una bota igual que la otra.Bótala si no te sirve.",
                "El farol de los enamorados.","Cotorro cotorro saca la pata, y empiézame a platicar.",
                "¡Ah! qué borracho tan necio, ya no lo puedo aguantar.",
                "El que se comió el azúcar.",
                "No me extrañes corazón, que regresó en el camión.",
                "La barriga que Juan tenía, era empacho de sandía.",
                "No te arrugues cuero viejo, que te quiero pa tambor.",
                "Camarón que se duerme, se lo lleva la corriente.",
                "Las jaras del indio Adán, donde pegan, dan.",
                "El músico trompa de hule, ya no me quiere tocar.",
                "Atarántamela a palos, no me la dejes llegar.",
                "Uno, dos y tres el soldado pal cuartel.",
                "La estrella polar del norte",
                "El caso que te hago es poco.",
                "Este mundo es una bola, y nosotros un balón.",
                "Ah Chihuahua! cuánto apache con pantalón y huarache.",
                "Al nopal lo van a ver, nomás cuando tiene tunas.",
                "El que con la cola pica, le dan una paliza.",
                "Rosita, Rosaura, ven que te quiero ahora.",
                "Al pasar por el panteón, me encontré un calaverón.",
                "Tú con la campana y yo con tu hermana.",
                "El cantarito del pulque no se te vaya a quebrar pos lo quiere la patrona pa poderme enamorar.",
                "El que brinca los peñascos.",
                "La cobija de los pobres.",
                "El sombrero de los reyes.",
                "Rema rema va Lupita, sentada en su chalupita.",
                "Fresco y oloroso, en todo tiempo hermoso.",
                "El que por la boca muere, aunque mudo fuere.",
                "Palmero sube a la palma y bájame un coco real.",
                "El que nace pa maceta, no sale del corredor.",
                "Arpa vieja de mi suegra, ya no sirves pa tocar.",
                "Al ver a la verde rana, qué brinco pegó tu hermana."]




btnTablas.addEventListener("click", generarOtrasTablas)
btnReiniciar.addEventListener("click", reiniciarJuego)

btncpu.onclick = function () {
    modojuego = "CPU"
    iniciarJuego(modojuego)
}
btnplayer1.onclick = function () {
    modojuego = "1player"
    iniciarJuego(modojuego)
}
btntbl1.onclick = function () {
    elegirTabla('tablero1')
}
btntbl2.onclick = function () {
    elegirTabla('tablero2')
}
btntbl3.onclick = function () {
    elegirTabla('tablero3')
}
btnplay.onclick = function () {
    document.getElementById('textoBaraja').innerHTML = `<h4>"CORRE Y SE VA CORRIENDO CON..."</h4>`;
    this.style.display ="none"
    btnnext.style.display ="inline"
    btnReiniciar.style.display ="inline"
    setTimeout(function(){isTableroselected = true}, 2500);
}

function iniciarJuego() {
    document.getElementById("tableros").style.display = "block";
    document.getElementById("seleccion").style.display = "block";
    document.getElementById("inicio").style.display = "none";
    creartableros();
}

function reiniciarJuego() {
    location.reload();
}

function creartableros() {
    let tabla1 = document.getElementById('casillasTablero1');
    let tabla2 = document.getElementById('casillasTablero2');
    let tabla3 = document.getElementById('casillasTablero3');
    tablas(tabla1)
    tablas(tabla2)
    tablas(tabla3)

}
function crearTableroCPU() {
    let tablaCPU = document.getElementById('casillasCPU');
    let numerosTabla = random()
    for (let i = 0; i < numerosTabla.length; i++) {
        tablaCPU.insertAdjacentHTML('beforeend', `<div class="cuadrito" data-CPU-id="${numerosTabla[i]}" style="background-image:url(img/${numerosTabla[i]}.jpg); background-size: cover;" disabled></div>`)
    }
}
function tablas(numerotabla) {
    let numerosTabla = random()
    for (let i = 0; i < numerosTabla.length; i++) {
        numerotabla.insertAdjacentHTML('beforeend', `<div class="cuadrito" data-player1-id="${numerosTabla[i]}" style="background-image:url(img/${numerosTabla[i]}.jpg); background-size: cover;" disabled></div>`)
    }
}

function random() {
    let numeros = [];
    while (numeros.length < 16) {
        let num = Math.floor((Math.random() * (55 - 1)) + 1);
        if (numeros.indexOf(num) == -1) {
            numeros.push(num);
        }
    }
    return numeros;
}
function generarOtrasTablas() {
    document.getElementById('casillasTablero1').innerHTML = '';
    document.getElementById('casillasTablero2').innerHTML = '';
    document.getElementById('casillasTablero3').innerHTML = '';
    creartableros();
}
function elegirTabla(tabla) {
    let tableros = document.getElementById("tableros")
    let tablero1 = document.getElementById(tabla)
    document.getElementById('tablaSeleccionada').insertAdjacentElement('beforeend', document.getElementById(tabla));
    tableros.remove()
    tablero1.addEventListener('click', (e) => {
            if(e.target.className == "cuadrito"){
                if(!e.target.hasAttribute('disabled')){
                    e.target.insertAdjacentHTML('beforeend', `<span class='ficha'><img src='/img/ficha.png'></span>`)
                    jugador1 += 1;
                    verificar()
                    e.target.setAttribute('disabled')
                }
            }
        })
    tablero1.parentElement.classList.add("mx-auto")
    document.getElementById('seleccion').style.display = 'none'
    document.querySelector(".tablas").style.width = "30rem";
    document.getElementById("mazocartas").style.display = "block";
    document.getElementById("tablaSeleccionada").style.display = "block";
    if(modojuego =="CPU"){
        crearTableroCPU();
        document.getElementById("tablaCPU").style.display = "block";
        btnnext.onclick = function () {
            modoCPU()
        }
    }else{
        btnnext.onclick = function () {
            modo1Player()
        }
    }
}

function modo1Player() {
    let num = Math.floor((Math.random() * (55 - 1)) + 1);
    if(cartas.length == 54){
        isTableroselected = false
        swal({
            title: "Fin",
            text: "Fin del juego",
            icon: "warning",
        });
    }else if (cartas.indexOf(num) == -1) {
        cartas.push(num);
        cartajugar.src = `img/${num}.jpg`
        barajita = document.getElementById('yasalio')
        barajita.insertAdjacentHTML('beforeend', `<img src='img/${num}.jpg' class='barajita'>`)
        cambiarFrase(num)
        let casillaPlayer1 = document.querySelector(`[data-player1-id='${num}']`);
        if (casillaPlayer1 != null) {
            casillaPlayer1.removeAttribute('disabled');
        }
    } else {
        modo1Player();
    }

}

function modoCPU() {
    let num = Math.floor((Math.random() * (55 - 1)) + 1);
    if(cartas.length == 54){
        isTableroselected = false
        swal({
            title: "Fin",
            text: "Fin del juego",
            icon: "warning",
        });
    }else if (cartas.indexOf(num) == -1) {
        cartas.push(num);
        cartajugar.src = `img/${num}.jpg`
        barajita = document.getElementById('yasalio')
        barajita.insertAdjacentHTML('beforeend', `<img src='img/${num}.jpg' class='barajita'>`)
        cambiarFrase(num)
        let casillaPlayer1 = document.querySelector(`[data-player1-id='${num}']`);
        let casillaCPU = document.querySelector(`[data-CPU-id='${num}']`);
        if (casillaPlayer1 != null) {
            casillaPlayer1.removeAttribute('disabled');
        }
        if (casillaCPU != null) {
            seleccionar(casillaCPU)
        }
    } else {
        modoCPU();
    }

}

function cambiarFrase(numero){
    let frase = frasesBaraja[numero];
    document.getElementById('textoBaraja').innerHTML = '';
    document.getElementById('textoBaraja').innerHTML = `<strong>"${frase}"</strong>`;
}


function seleccionar(casilla) {
    casilla.insertAdjacentHTML('beforeend', `<span class='ficha'><img src='/img/ficha.png'></span>`)
    cpu += 1
    verificar();
}
function verificar() {
    if (jugador1 == 16 && cpu == 16) {
        isTableroselected = false
        swal({
            title: "Empate",
            text: "Empate",
            icon: "warning",
        });
    } else {
        if (jugador1 == 16) {
            isTableroselected = false
            swal({
                title: "Felicidades!",
                text: "Jugador 1 es el ganador",
                icon: "success",
            });
            document.getElementById("Reiniciar").style.display = "block";
            document.getElementById("next").style.display = "none";
        }
        if (cpu == 16) {
            isTableroselected = false
            swal({
                title: "Lo sentimos",
                text: "CPU es el ganador",
                icon: "error",
            });
            document.getElementById("Reiniciar").style.display = "block";
            document.getElementById("next").style.display = "none";
        }
    }
}
setInterval(function(){
    if(isTableroselected){
        cartajugar.classList.toggle('zoomIn')
        modojuego =="CPU" ? modoCPU() : modo1Player()
    }
},3000)


