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

function parimpar(){
    var n1 = document.getElementById("cx1").value;
    
    if (n1%2 == 0){
        alert("par");
    }
    else{
        alert("impar");
    }
}