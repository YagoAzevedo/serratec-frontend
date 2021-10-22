var cpf = '';

const alteraCPF = (e) => {
    cpf = e.target.value;
}

const validarCPF = (event) => {
    event.preventDefault();
    if (cpf.length < 11) {
        alert('O seu CPF é inválido')
        document.getElementById('titulo').innerHTML = 'O seu CPF é inválido';
        document.getElementById('titulo').setAttribute('class', 'cor-vermelha');
    }
}
