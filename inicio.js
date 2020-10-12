function validacaoEmail() {
    var formulario = document.getElementById("register");
    var email = formulario.email;
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        alert("Insira um email válido");
        return false;
    }
}
function validacaoNome() {
    var formulario = document.getElementById("register");
     var nome = formulario.nome; 
   if (nome.value == ""){
        alert("Insira um nome válido.");
        return false;
    }
	
}

function validacaoCPF() {
var valor = document.getElementById("register");
var cpf = formulario.cpf; 
if( (cpf.value.length<8)&&( "[a-z\s]+$") ) {
        alert("CPF inválido.");
		document.getElementById("register");
        return false;
    }
}
function formatar(src, mask){
  var i = src.value.length;
  var saida = mask.substring(0,1);
  var texto = mask.substring(i)
if (texto.substring(0,1) != saida)
  {
    src.value += texto.substring(0,1);
  }
}

function validar() {
var valor = document.getElementById("register");
if (valor.value!== "") {
        alert('Seus dados foram enviados com sucesso!');
    }
}