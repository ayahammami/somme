function somme() {
    var numm1 = document.getElementById("num1").value;
    var numm2 = document.getElementById("num2").value;
    var somme = "la somme est ";
    var TT = parseFloat(numm1) + parseFloat(numm2);

    document.getElementById("som").value = somme + " " + TT;

}