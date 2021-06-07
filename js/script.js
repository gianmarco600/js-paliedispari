
document.getElementById('btn').addEventListener("click" , calcoli());


function calcoli(){
    var input ="";
    input = document.getElementById("input").value;
    var pali = isPali(input);
    if(pali){
        document.getElementById("output").innerHTML = 'Palindromaaaa!';
    }
    else{
        document.getElementById("output").innerHTML = 'non palindroma';
    }
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