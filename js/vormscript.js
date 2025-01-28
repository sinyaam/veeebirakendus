function lugemine() {
    document.getElementById("vastus").innerHTML =
        "Tere hommikust, " +
        document.getElementById("nimi").value+
        " "+document.getElementById("pnimi").value;
}
function lugemine2() {
    let nimi = document.getElementById("nimi").value;
    let pnimi = document.getElementById("pnimi").value;
    let vastus = document.getElementById("vastus");
    let varv = document.getElementById("vavr");

    vastus.innerHTML ="Tere hommikust, "+nimi+" "+pnimi+"!";
    vastus.style.color =varv.value;
}