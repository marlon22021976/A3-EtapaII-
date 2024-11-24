const link = document.getElementById("w");
link.addEventListener("https://wa.me/5548996080617", function (event) {
    event.preventDefault();
alert("Você clicou no link!");

link.addEventListener("click", function (event) {
    event.preventDefault(); 
    link.style.color = "red"; 
    alert("Você clicou no link!");
});
    console.log("O link foi clicado!");
});
