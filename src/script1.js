var result = document.getElementById('estrangeiro')
var pergunta = document.getElementById('pergunta')
var input = document.createElement('input')
var br = document.createElement('br')
input.type = "text"
input.placeholder = "Pais de Origem"
var sim = document.getElementById('sim')
var nao = document.getElementById('nao')
var input = document.createElement('input')
input.type = "text"
input.placeholder = "Pais de Origem"
input.classList.add('text-sm', 'border')
input.name = 'contry'
input.id = 'contry'
var br = document.createElement('br')

function pais(){
   
    
        
    if(sim.checked){
        pergunta.insertAdjacentElement('beforebegin', br)
        result.style.display = 'block'
        pergunta.innerHTML = 'Qual seu País de Origem?'
        result.insertBefore(input, pergunta.nextSibling)

    } else if (nao.checked) {

        result.style.display = 'none'

    }

    }


//verificação de documentos

const form = document.getElementById('form')
const spans = document.querySelectorAll('#err')
var nam = document.getElementById('name')
var ema = document.getElementById('email')
var tel = document.getElementById('telephone')


var regemail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
var regtell = /^\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)? ?(?:[2-8]|9[0-9])[0-9]{3}\-?[0-9]{4}$/

function setError(index){
    spans[index].classList.remove('hidden')
}
function removeError(index){

    spans[index].classList.add('hidden')
}

function nameValidate(){
    if(nam.value.length < 3){
        setError(0)
        nam.classList.add('border-4','border-red-600')
        return true
    }else{
        removeError(0)
        nam.classList.remove('border-4','border-red-600')
        return false

    }
}

function emailValidate(){
    if(!regemail.test(ema.value)){
        setError(1)
        ema.classList.add('border-4','border-red-600')
        return true
    }else{
        removeError(1)
        ema.classList.remove('border-4','border-red-600')
        return false

    }
}

function telephoneValidate(){
    if (!regtell.test(tel.value)) {
        setError(2)
        tel.classList.add('border-4','border-red-600')
        return true
    }else{
        removeError(2)
        tel.classList.remove('border-4','border-red-600')
        return false
    }
}


function simOuNao(){
    if(sim.checked){
        if(input.value == ""){
            window.alert('pais não selecionado')
            return true
        }else{
            return false
        }
    }else if(nao.checked){
        return false
    }
}

//Coleta de dados java script


//verivicar se esta tudo preenchido
function verificacao(){
    if(tel.value == '' || nam.value == '' || ema.value == '' || simOuNao()){
        window.alert('erro os dados estão vazios')
        
    }else if(telephoneValidate() || nameValidate() || emailValidate() || simOuNao()){
        window.alert('erro os dados não preenchidos corretamente')
       
    }else{
        form.addEventListener('submit', evento => {
            evento.preventDefault()
            const formData = new FormData(form)
            const data = Object.fromEntries(formData)
            
            fetch('https://reqres.in/api/users/2', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(res => res.json()).then(data => console.log(data));
        });
        window.alert('os dados foram enviados com exito')
    }

}