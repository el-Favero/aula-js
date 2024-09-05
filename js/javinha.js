function entrar(){
var user = document.getElementById("cxuser").value;
var senha = document.getElementById("cxsenha").value; 

if(user == "ADM" && senha == "123"){ // "||" siginifica "ou"   e "&&" significa "e"
    alert("Acesso Permitido");
    }
    else{
    alert("Acesso Negado");
    }
    
}