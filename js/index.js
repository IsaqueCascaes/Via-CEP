function consultaEndereco () {
    let cep = document.getElementById('cep').value;

if(cep.length !== 8) {
    alert("CEP INVALIDO! Verifique se a informacão que você colocou e tente novamente!");
    return;
}

    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url).then(function(response) {
        response.json().then(mostrarEndereco);
    });
}   

function mostrarEndereco (dados) {
let resultado  = document.getElementById('resultado');
if (dados.erro) {
    alert("Não foi possivel localizar o endereco!");
} else {
    console.log(dados);
    resultado.innerHTML = `
        <p>Complemento ${dados.complemento}</p>
        <p>Logradouro: ${dados.logradouro}</p>
        <p>Bairro: ${dados.bairro}</p>
        <p>Cidade: ${dados.localidade}</p>
        <p>UF: ${dados.uf}</p>`
}
}