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
    let varv = document.getElementById("varv");
    let mees =document.getElementById("mees");
    let naine=document.getElementById("naine");
    let paev= document.getElementById("synnipaev").value;
    let GBRAM=document.getElementById("GBRAM").value;
    let email=document.getElementById("email").value;
    let tel=document.getElementById("tel").value;
    let url=document.getElementById("url").value;

    if (mees.checked) {
        vastus.innerHTML ="Tere hommikust, mees "+nimi+" "+pnimi+"!"+
        " Sinu sünnipäev on "+paev+"<br>GB RAM-i teil on:"+GBRAM+"<br>teil email on:"
            +email+"<br>teil tel number on:"+tel+"<br>url, mille kirjutasid:"+url;
        vastus.style.color =varv.value;

    }
    else if (naine.checked) {
        vastus.innerHTML ="Tere hommikust, naine "+nimi+" "+pnimi+"!"+
        " Sinu sünnipäev on "+paev+"<br>GB RAM-i teil on:"+GBRAM+"<br>teil email on:"
            +email+"<br>teil tel number on:"+tel+"<br>url, mille kirjutasid:"+url;
        vastus.style.color =varv.value;
    }
    else {
        vastus.innerHTML ="täitke andmed"
    }
}