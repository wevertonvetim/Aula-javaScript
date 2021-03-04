//alert("meu primeiro js")

//function botao(){
    //alert("obrigado por clicar")
//}
function botao(){
document.getElementById("agradecimento").innerHTML="obrigado por clicar";
}
/*function redirecionar(){
    //window.open("http://www.google.com");
    window.location.href="http://www.google.com";
}*/
function trocar(elemento){
    elemento.innerHTML="Obrigado po passar";
    //document.getElementById("mousemove").innerHTML="Obrigado por passar";
}
function voltar(elemento){
    elemento.innerHTML="Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML="Passe o mouse aqui";
}
function load(){
    alert("pagina carregada")
}
function funcaoChange(elemento){
    console.log(elemento.value);
}