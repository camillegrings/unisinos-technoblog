var vnome,vidade,vescola,vcurso,vemail;


const guardavalores = () =>{
    vnome = document.getElementById('nome').value;
    vidade = document.getElementById('idade').value;
    vescola = document.getElementById('escola').value;
    vcurso = document.getElementById('curso').value;
    vemail = document.getElementById('email').value;


    localStorage.nome= vnome;
    localStorage.idade = vidade;
    localStorage.escola = vescola;
    localStorage.curso = vcurso;
    localStorage.email = vemail;
}

const carregavalores = () =>{
 document.getElementById('nome').value = localStorage.nome;
 document.getElementById('idade').value = localStorage.idade;
 document.getElementById('escola').value = localStorage.escola;
 document.getElementById('curso').value =localStorage.curso ;
 document.getElementById('email').value =localStorage.email ; 
}