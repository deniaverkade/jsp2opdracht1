let winkelmand = [];
//producten toevoegen aan array
winkelmand.push("Bananen");
winkelmand.push("Whiskey");
winkelmand.push("Chips");
winkelmand.push("Bonen");
winkelmand.push("Aardappelen");

//opdracht 1
producten = winkelmand.length;

document.getElementById("opdr1").textContent = "Er zijn "+ producten +" producten in uw winkelmand.";
//opdracht 2
document.getElementById("opdr2").textContent = "Uw producten zijn: " + winkelmand;
//opdracht 3
vierdeplek = winkelmand[3];
document.getElementById("opdr3").textContent = vierdeplek + ", staat op de vierde plek in uw winkelmand.";
//opdracht 4
winkelmand[1] = "Bier";
//opdracht 5
function nieuwproduct () {
    product = document.getElementById("toevoeging").value;
    winkelmand.push(product)
    document.getElementById("opdr5").textContent = "Uw huidige winkelmand: " + winkelmand + ".";
}
//opdracht 6
function productcheck() {
    if (producten <= 1) {
        document.getElementById("opdr6").textContent = "U heeft niets om te kopen.";
    } else {document.getElementById("opdr6").textContent = "U kunt boodschappen doen.";}
}
//opdracht 7
function dropchecker() {
    if (winkelmand[5] == "Drop") {
        document.getElementById("opdr7").textContent = "De producten: "+ winkelmand +".";
    } else {
        document.getElementById("opdr7").textContent = "U heeft geen drop.";}
}
//opdracht 8
document.getElementById("opdr8").textContent = "Producten: " + winkelmand.join(" ");
//opdracht 9
document.getElementById("opdr9d1").textContent = winkelmand;
//winkelmand.splice(0, 1);
//winkelmand.splice(0, 1);
// verwijder de commentaar van hierboven om de splice te laten werken 
document.getElementById("opdr9d2").textContent = winkelmand;
//opdracht 10
winkelmand.sort()
document.getElementById("opdr10").textContent = winkelmand;





