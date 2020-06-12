
//Exercício 1
function mostrar_dados(dados){
    console.log(dados);
    var temp_atual = dados.main.temp;
    $("#temp_atual").text(temp_atual);
    
    var temp_max = dados.main.temp_max;
    $("#temp_max").text(temp_max);
  
    var temp_min = dados.main.temp_min;
    $("#temp_min").text(temp_min);
    
}

function pegar_dados(callback){

    $.ajax({
        url : "https://openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02",
        type: "GET",
        dataType: "json",
        success: function(data){
            callback(data);
        },
        error: function(){
            console.log("Erro na requisição");
        }  
    });

}

pegar_dados(mostrar_dados);

