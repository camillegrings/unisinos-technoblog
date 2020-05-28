var vnome,vendereco,vtelefone,vemail,User_json;


const guardavalores = () =>{
    vnome = document.getElementById('nome').value;
    venderoco = document.getElementById('endereco').value;
    vtelefone = document.getElementById('telefone').value;
    vemail = document.getElementById('email').value;
    user_json = JSON.stringify("Nome: " + vnome +" Endereço: " + vendereco +" Telefone: " + vtelefone +" Email: " +vemail);

    localStorage.json = user_json;
    console.log(user_json);

    localStorage.setItem('hasFilledForm', true)
}

const carregavalores = () => {
    var user = json.parse(localStorage.User_json)




}

const deletavalores = () =>{
    localStorage.removeItem('user_json');
 
   }