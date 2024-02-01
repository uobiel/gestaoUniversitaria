const sair = document.querySelector('#sair');
const pessoas = document.querySelector('#pessoas');
const professores = document.querySelector('#professores');
const alunos = document.querySelector('#alunos');
const fornecedores = document.querySelector('#fornecedores');

sair.addEventListener('click', function(){
    window.location.href = '../../index.html'
})

pessoas.addEventListener('click', function(){
    window.location.href = '../pessoas/pessoas.html'
})

professores.addEventListener('click', function(){
    window.location.href = '../professores/professores.html'
})

alunos.addEventListener('click', function(){
    window.location.href = '../alunos/alunos.html'
})

fornecedores.addEventListener('click', function(){
    window.location.href = '../fornecedores/fornecedores.html'
})

function voltarHome(){
    window.location.href = '../home/home.html'
}