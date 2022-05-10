function cadastrarProfessor () {
    // Resgatar valores digitados nos inputs
    const nome = document.getElementById("input-nome").value;
    const materia = document.getElementById("input-materia").value;
    
    // Criando novas colunas
    let colunaNome = document.createElement("td");
    let colunaMateria = document.createElement("td");

    // Adicinando valores digitados nas colunas
    colunaNome.innerText = nome;
    colunaMateria.innerText = materia;

    // Criando linha e adicionando colunas (filhos)
    const linha = document.createElement("tr");
    linha.appendChild(colunaNome);
    linha.appendChild(colunaMateria);

    // Adicionando linha na tabela
    document.querySelector("#conteudo-tabela").appendChild(linha);
}