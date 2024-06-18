let stopBoton = document.getElementById("parar");
let slowBoton = document.getElementById("reduir");
let goBoton = document.getElementById("arrencar");

let colorStop = document.querySelector(".luz_red"); 
let colorSlow = document.querySelector(".luz_yellow"); 
let colorGo = document.querySelector(".luz_green"); 


// stopBoton.addEventListener("click", ()=> {

//     colorStop.style.opacity = 1;
//     colorSlow.style.opacity = 0;
//     colorGo.style.opacity = 0;


// });

// slowBoton.addEventListener("click", ()=> {

//     colorStop.style.opacity = 0;
//     colorSlow.style.opacity = 1;
//     colorGo.style.opacity = 0;



// });

// goBoton.addEventListener("click", ()=> {

//     colorStop.style.opacity = 0;
//     colorSlow.style.opacity = 0;
//     colorGo.style.opacity = 1;


// });

function stop(){

    colorStop.style.opacity = 1;
    colorSlow.style.opacity = 0;
    colorGo.style.opacity = 0;

};

stopBoton.addEventListener("click", stop)

function slow(){

    colorStop.style.opacity = 0;
    colorSlow.style.opacity = 1;
    colorGo.style.opacity = 0;

};

slowBoton.addEventListener("click", slow)

function go(){

    colorStop.style.opacity = 0;
    colorSlow.style.opacity = 0;
    colorGo.style.opacity = 1;

};

goBoton.addEventListener("click", go)



