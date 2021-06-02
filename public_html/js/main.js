function clicou(){
    //vai buscar o id="agradecimento" la do <h3> 
    document.getElementById("agradecimento").innerHTML = "<b>Você clicou</b>";
    //alert("Você clicou");
}

//funcao para redirecionar página
function redirecionar(){
    //dessa forma abre em outra página
    //window.open("https://globoesporte.globo.com/futebol/times/sao-paulo/");
    //dessa forma abre na mesma página
    window.location.href = "https://globoesporte.globo.com/futebol/times/sao-paulo/";
}