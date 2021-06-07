
document.getElementById('controlla').addEventListener('click' , calcoli);

document.getElementById('gioca').addEventListener('click' , pariODispari);

function calcoli(){
    var input ="";
    input = document.getElementById("input").value;
    if (input == '' || !isNaN()){
        alert('inserire input')
    }
    else{
        input = input.trim();
        input = input.toLocaleLowerCase();
        input = input.replace(/ /g, "");
        
        var pos = input.search("locate");
        var pali = isPali(input);
        var risultato;
        if(pali){
            risultato = 'Palindromaaaa!';
        }
        else{
            risultato = 'Non palindroma';
        }
    }
    document.getElementById("output").innerHTML = risultato;
}

function isPali(input){
    var arrParola = input.split('');
    var numChar = arrParola.length;
    var parolaMezzi =Math.ceil(numChar / 2);
    console.log(numChar);
    for (var i = 0; i <= parolaMezzi; i++){

        iDec = (numChar - i) -1;
        iCre = i;
        if (arrParola[i] != arrParola[iDec]){
            
            return false;
        }
    }
    
    return true;
}

function pariODispari(){
    var giocatore = document.getElementById('PoD').value;
    var num1 = (Math.floor(Math.random()*4))+1;
    var num2 = (Math.floor(Math.random()*4))+1;
    console.log(num1 , num2);
    console.log(num1 + num2);
    sum = num1 + num2;
    var vince;
    if (sum % 2 == 0 ){
        var vince = "pari";
    }
    else{
        vince = "dispari"; 
    }
    if (giocatore == vince){
        document.getElementById("vincitore").innerHTML = "hai vinto!";
    }
    else{
        document.getElementById("vincitore").innerHTML = "ha vinto lui mi disp";
    }

}