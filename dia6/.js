var francielli = {
    nome: "francielli",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  }
  
  var diego ={
    nome: "diego",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  }
  
  
  
  francielli.pontos = calculaPontos(francielli)
  diego.pontos = calculaPontos(diego)
  
  function calculaPontos(jogador){
    var pontos =(jogador.vitorias * 3) + jogador.empates
    return pontos
  }
  
  var jogadores =[francielli, diego]
  
  exibirJogadoresNaTela(jogadores)
  
  function exibirJogadoresNaTela(jogadores){
    var html = "" 
    for(var i=0;i < jogadores.length; i++){
      html += "<tr><td>"+ jogadores[i].nome+"</td>"
       html += "<td>"+ jogadores[i].vitorias+"</td>"
       html += "<td>"+ jogadores[i].empates+"</td>"
       html += "<td>"+ jogadores[i].derrotas+"</td>"
       html += "<td>"+ jogadores[i].pontos+"</td>"
     html += " <td><button onClick='adicionarVitoria("+ i + ")'>Vitória</button></td>"
     html += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
    html +=  "<td><button onClick='adicionarDerrota(" +i +")'>Derrota</button></td></tr>"
      
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = html
  
  }
  
  function adicionarVitoria(i){
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
    
  }
  function adicionarEmpate(i){
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
  }
  function adicionarDerrota(i){
    var jogador = jogadores[i]
    jogador.derrotas++
    exibirJogadoresNaTela(jogadores)
  }