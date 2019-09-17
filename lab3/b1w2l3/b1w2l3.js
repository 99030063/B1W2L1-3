// begin hier je JavaScript commandos

//Enkele keersom berekenen
    // var table = prompt("Welke tafel wilt u berekenen?");
    // var input = prompt("Welk meervoud wilt u berekenen");
    // var answer = table*input
    // alert(table + '*' + input + '=' + answer)

//volledige tafel uitschrijven op scherm
document.write("<h3><u>Opdracht3</u></h3>")
var i = 1;
var tafel = prompt("Welke tafel wilt u berekenen");
for (i == 1; i < 11; i++) {
    document.write(tafel+"x"+i+"="+(tafel*i)+"<br>"); 
}

setTimeout(function(){
    document.write("<br>")
    document.write("<h3><u>Opdracht4</u></h3>")
    var start=prompt("Geef uw startgetal")
    var startGetal = parseInt(start)
    var linebreak="<br>"

    document.write("begin getal: "+ startGetal+linebreak)

    var result1=startGetal +6;
    document.write(startGetal+" + "+6+" = "+ result1+linebreak)

    var result2=result1 *10;
    document.write(result1+" x "+10+" = "+ result2+linebreak)

    var result3=result2 /5;
    document.write(result2+" / "+5+" = "+ result3+linebreak)

    var result4=result3 -12;
    document.write(result3+" - "+12+" = "+ result4+linebreak)
    document.write("Eind getal: " + result4);
},1000);
