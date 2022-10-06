
const btnGerar = document.querySelector("#submit");
btnGerar.addEventListener("click",function(){

     let vetor =gerandoArray();
    document.querySelector("#gerandoArrays").value =vetor;
    document.querySelector("#arrayNegativo").value =geraArrayNegativo(vetor);
    document.querySelector("#numerosSucessores").value =geraSucessor(vetor);
    document.querySelector("#numerosPares").value =getPares(vetor);
    document.querySelector("#somatoria").value =getTotal(vetor);
});


function gerandoArray(){
    number=[];
    for(let i=0;i<20;i++){
        number.push(Math.round(Math.random()*100)+1);
    }
    return number ;
}

function geraArrayNegativo(vetor){
    let vetorNegado =[];
    vetor.forEach(num => {
        vetorNegado.push(num *-1);
    });

    return vetorNegado;
}
function geraSucessor(vetor){
    let vetorSucessor =[];
    vetor.forEach(num => {
        vetorSucessor.push(num +1);
    });

    return vetorSucessor;
}
function getPares(vetor){
    let vetorPares =[];
    let total=0;
    vetor.forEach(num => {
        if(num%2==0){
            vetorPares.push(num);
            total++;
        }
    });

    return vetorPares + "   total: "+total;
}
function getTotal(vetor){
    let total=0;
    vetor.forEach(num => {
        total=total+num;
    });

    return total;
}