window.onload = function() {
    setTimeout(() => {
        document.querySelector("h1").innerText = "Meu novo texto via JS";
    }, 5000);

    let elementosFilhosHTML;
    for(let i = 1; i <= 10; i++){
        elementosFilhosHTML += `<div class="box">Teste ${i}</div>`;
    }

    document.getElementById("container").innerHTML = elementosFilhosHTML;    

    // const filho1 = document.createElement("div");
    // const filho2 = document.createElement("div");
    // filho1.setAttribute("class", "box");
    // filho2.setAttribute("class", "box");
    // filho1.innerText = "Teste 1";
    // filho2.innerText = "Teste 2";

    // document.getElementById("container").appendChild(filho1);
    // document.getElementById("container").appendChild(filho2);
}