//Exercício 1
function mostrar_dados(dados) {
  var temp_atual = dados.main.temp;
  $("#temp_atual").text(temp_atual);

  var temp_max = dados.main.temp_max;
  $("#temp_max").text(temp_max);

  var temp_min = dados.main.temp_min;
  $("#temp_min").text(temp_min);
}

function pegar_dados(callback) {
  $.ajax({
    url:
      "https://openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02",
    type: "GET",
    dataType: "json",
    success: function (data) {
      callback(data);
    },
    error: function () {
      console.log("Erro na requisição");
    },
  });
}

pegar_dados(mostrar_dados);

//Exercício 2*******************************************************************
function pegar_paises(callback) {
  $.ajax({
    url: "https://restcountries.eu/rest/v2/all",
    type: "GET",
    dataType: "json",
  })
    .done(function (data) {
      callback(data);
    })
    .fail(function () {
      console.log("Erro na requisição");
    });
}

function popular_paises(paises) {
  console.log(paises);
  for (let i = 0; i < paises.length; i++) {
    document.getElementById("paises").innerHTML +=
      '<option value="' +
      paises[i].alph3code +
      '">' +
      paises[i].name +
      "</option>";
  }
}

pegar_paises(popular_paises);

//Exercicio 3 ***************************************************************

let totalScore = 0;

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

$("#nova_pergunta").click(function () {
  $("#nova_pergunta").hide();
  $("#opcoes").html("");
  $("#erro_acerto").html("");
  $("#pergunta").html("");
  pegar_pergunta(gerar_pergunta);
});

function pegar_pergunta(callback) {
  $.ajax({
    url: "https://opentdb.com/api.php?amount=10",
    type: "GET",
    dataType: "json",
  })
    .done(function (data) {
      callback(data.results[0]);
    })
    .fail(function () {
      console.log("Erro na requisição");
    });
}

function gerar_pergunta(pergunta) {
  console.log(pergunta);
  $("#nova_pergunta").hide();
  $("#pergunta").html(pergunta.question);

  var resposta_correta = pergunta.correct_answer;
  var respostas = pergunta.incorrect_answers;
  respostas.push(resposta_correta);
  respostas = shuffle(respostas);

  for (let a = 0; a < respostas.length; a++) {
    $("#opcoes").append(
      '<input type="radio" name="opcao" value="' +
        respostas[a] +
        '"> ' +
        respostas[a] +
        "<br>"
    );
  }

  $("#opcoes input[name='opcao']").change(function () {
    $("#submeter").show();
  });

  $("#submeter").click(function () {
    $("#submeter").hide();
    $("#nova_pergunta").show();

    var resposta_escolhida = $("#opcoes input[name='opcao']:checked").val();

    if (resposta_escolhida == resposta_correta) {
      $("#erro_acerto").html("Parabéns, você acertou!");
      totalScore += 1;
      $("#score").html(totalScore);
    } else {
      $("#erro_acerto").html("Resposta incorreta!");
    }

    $("#opcoes input[name='opcao']").attr("disabled", true);
  });
}

pegar_pergunta(gerar_pergunta);

$("#score").html(totalScore);
