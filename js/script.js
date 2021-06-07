
document.getElementById('controlla').addEventListener('click' , calcoli);


function calcoli(){
    alert("inizio calc");
    var input ="";
    input = document.getElementById("input").value;
    var pali = isPali(input);
    var risultato;
    if(pali){
        risultato = 'Palindromaaaa!';
    }
    else{
        risultato = 'Non palindroma';
    }
    document.getElementById("output").innerHTML = risultato;
}

function isPali(input){
    var arrParola = input.split('');
    var numChar = arrParola.length;
    var parolaMezzi =Math.ceil(numChar / 2);
    console.log(parolaMezzi , numChar);
    for (var i = 0; i <= parolaMezzi; i++){
        var iDec = (numChar - i) - 1;
        console.log(arrParola[i] , arrParola[iDec])
        
        if (arrParola[i] != arrParola[iDec]){
            return false;
        }
    }
    return true;
}