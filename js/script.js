//alert('Olá mundo!');

var result = document.querySelector('#result-imc');
var valor = document.querySelector('#valor-imc');


function calcularImc(){
   //alert('Até aqui está carregando!')
   //console.log('Até aqui está carregando!')

   /*var altura = document.querySelector('#altura');
   var peso = document.querySelector('#peso');

   console.log(altura.value);
   console.log(peso.value);*/

   var altura = document.querySelector('#altura').value;
   var peso = document.querySelector('#peso').value;

   //console.log(altura);
   //console.log(peso);

    if(altura != '' && peso != ''){

        altura = parseFloat(altura);
        peso = parseFloat(peso);

        var imc = peso / (altura*altura);
        console.log(imc.toFixed(2));
        valor.innerHTML = imc.toFixed(2);
        result.style.visibility='visible';

        if(imc < 18.5 || imc > 29.9){

            result.style.background='red';
        }
        else if(imc >= 18.5 && imc <= 24.9){

            result.style.background='#0B4F00';
        }
        else{
            result.style.background='orange';
        }


    }else{
        alert('Preencha os campos!!');
    }




}

