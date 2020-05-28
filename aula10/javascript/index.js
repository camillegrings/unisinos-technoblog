var vnome,vendereco,vtelefone,vemail,User_json;


const guardavalores = () =>{
    vnome = document.getElementById('nome').value;
    vendereco = document.getElementById('endereco').value;
    vtelefone = document.getElementById('telefone').value;
    vemail = document.getElementById('email').value;

    user_json = JSON.stringify("Nome: " + vnome +" Endereco: " + vendereco +" Telefone: " + vtelefone +" Email: " +vemail);

    localStorage.json = user_json;
    console.log(user_json);

    localStorage.setItem('hasFilledForm', true)
}

const carregavalores = () => {
 document.write(user_json).innerhtml;



}

const deletavalores = () =>{
    localStorage.removeItem('user_json');
 
   }