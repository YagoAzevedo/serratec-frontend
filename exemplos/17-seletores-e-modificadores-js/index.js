window.onload = function() {
    carregarProfessores();
}

function carregarProfessores() {
    fetch("https://randomuser.me/api/?results=5").then(resultado => {
        return resultado.json();
    }).then(response => {
        response.results.forEach(professor => {
            let colunaNome = document.createElement("td");
        
            // Adicinando valores digitados nas colunas
            colunaNome.innerText = professor.name.first;
        
            // Criando linha e adicionando colunas (filhos)
            const linha = document.createElement("tr");
            linha.appendChild(colunaNome);
        
            // Adicionando linha na tabela
            document.querySelector("#conteudo-tabela").appendChild(linha);
        });
    })
}

function cadastrarProfessor (event) {
    event.preventDefault();
    // Resgatar valores digitados nos inputs
    const nome = document.getElementById("input-nome").value;
    const materia = document.getElementById("input-materia").value;

    if (validarNome(nome)) {
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
    
        limparCampos();
        document.getElementById("input-nome").focus();
    }
}

function limparCampos() {
    document.getElementById("input-nome").value = "";
    document.getElementById("input-materia").value = "";
}

function validarNome(nome) {
    // validação nome vazio
    if (!nome) {
        // colocando o input com borda vermelha
        document.getElementById("input-nome").setAttribute('class', 'input-com-erro form-control');
        document.querySelector(".campo-obrigatorio").style.display = "block";
        return false;
    } else {
        return true;
    }
}