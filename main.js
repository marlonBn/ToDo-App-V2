var button = document.getElementById("button-add");
if (button !== null) {
    button.addEventListener("click", function () {
        var infoText = document.getElementById("p-paragraph");
        if (!infoText) {
            return;
        }
        var inputBox = document.getElementById("input-artikel");
        var liste = document.getElementById("ul-einkaufsliste");
        var neuerListenpunkt = document.createElement("li");
        if (liste == null) {
            infoText.innerHTML = "Fehler!";
        }
        else {
            liste.appendChild(neuerListenpunkt);
            infoText.innerHTML = "";
        }
        neuerListenpunkt.innerHTML = inputBox.value;
        inputBox.value = "";
    });
}
