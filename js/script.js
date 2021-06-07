
document.getElementById('controlla').addEventListener('click' , calcoli);


function calcoli(){
    var input ="";
    input = document.getElementById("input").value;
    if (input == '' || !isNaN()){
        alert('inserire input')
    }
    else{
        input = input.trim();
        input = input.toLocaleLowerCase()
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
    var scartoDx = 0;
    var scartoSx = 0;
    for (var i = 0; i <= parolaMezzi; i++){

        iDec = (numChar - i) - scartoDx -1;
        iCre = i + scartoSx;
        

        if(arrParola[i] == ' ' ){
            scartoSx ++;
        }
        iCre = iCre + scartoSx;


        if(arrParola[iDec] == ' ' ){
            scartoDx ++;
        }
        iDec = iDec - scartoDx;
        console.log(arrParola[iCre] + arrParola[iDec]);
        
        if (arrParola[i] != arrParola[iDec]){
            
            return false;
        }
    }
    scartoDx = 0;
    scartoSx = 0;
    return true;
    
}