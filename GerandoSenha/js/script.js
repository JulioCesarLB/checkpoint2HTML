console.log("algo");
const btnGerar = document.querySelector("#gerar");
btnGerar.addEventListener("click", function () {

    document.querySelector("#texto").setText= getSenha();
});


function getSenha() {
    const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '&', '*'];
 //68
    let senha="";

    for(let i=0; i<20;i++){
        senha+= letras[(Math.round(Math.random()*letras.length))];
    }
    console.log("algo");
    return senha;

}