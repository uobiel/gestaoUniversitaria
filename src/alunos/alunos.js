const botaoAluno = document.querySelector('#aluno');
const modal = document.querySelector('.fade');
const botaoCadastrar = document.querySelector('#cadastrarAluno');
const fechaModal = document.querySelector('.close-modal');

fechaModal.addEventListener('click', function(){
    modal.style.display = 'none';    
})

function carregaPlanilha() {
    const tabela = document.querySelector('#tabela');

    for (let i = 1; i <= 20; i++) {
        tabela.innerHTML += `
            <tbody id="linhaTabela"</tbody>
        `;
    }
}
        
botaoAluno.addEventListener('click', function(){
        modal.style.display = 'flex';
})

botaoCadastrar.addEventListener('click', function(){
    const telefoneAluno = document.querySelector('#telefoneAluno');
    const emailAluno = document.querySelector('#emailAluno');
    const nomeAluno = document.querySelector('#nomeAluno');
    const enderecoAluno = document.querySelector('#enderecoAluno');
    const cursoAluno = document.querySelector('#cursoAluno');
    const cpfAluno = document.querySelector('#cpfAluno');

    const linhaTabela = document.querySelector('#linhaTabela');
    const numeroAleatorio = Math.floor(Math.random() * 999) + 1;
    linhaTabela.innerHTML += `
        <tr>
            <td>${numeroAleatorio}</td>
            <td>${nomeAluno.value}</td>
            <td>${emailAluno.value}</td>
            <td>${telefoneAluno.value}</td>
            <td>${enderecoAluno.value}</td>
            <td>${cursoAluno.value}</td>
            <td>${cpfAluno.value}</td>
        </tr>
    `;

    modal.style.display = 'none';    

    limpaCampos(telefoneAluno, emailAluno, nomeAluno, enderecoAluno, cursoAluno, cpfAluno);

    console.log('Aluno adicionado a tabela');
});

function limpaCampos(campo1, campo2, campo3, campo4, campo5, campo6){    
    campo1.value = '';
    campo2.value = '';
    campo3.value = '';
    campo4.value = '';
    campo5.value = '';
    campo6.value = '';
}

function aviso(texto){
    alert(texto);
}