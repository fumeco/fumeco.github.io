//Espera carregar todo o conteúdo HTML
window.onload=
    function(){
        alert("O fabio é Lindo e a Aline é Bipolar o Luiz é gado e a kaylaine nunca vi ela falar nada");
        console.log("se quiser me ver, tem que pressionar F12! Console....");
        console.log("a = " + a + " b = " + b);
        console.log("a + b = " + parseInt(a+b) );
    };

    //Vaiavel global
    var a = 2;
    var b = 2;


    let entradas = document.querySelectorAll('input');
    let resposta = document.querySelector('.resposta');
    let botão = document.querySelector('#btnSomar');

    

    pegaNúmero1 = function(){
        return entradas [0].value;
    }

    pegaNúmero2 = function(){
        return entradas[1].value;
    }

    testarEntradasVazias = function(){
        if(pegaNúmero1() === '' || pegaNúmero2() === '')
        return true;
    else
        return false;
    }

    somar = function(){
        if(testarEntradasVazias()){
            resposta.textContent = "Erro Preencha os dois Campos numéricos";
            resposta.classList.remove('correta');
            resposta.classList.add('errada');
            return false;
        }else{
            atualizaResposta();
            resposta.classList.remove('errada');
            resposta.classList.
        }
    }

    atualizaResposta = function(){
        let num1 =  pegaNúmero1();
        let num2 = pegaNúmero2();
        var soma = num1 + num2;
        resposta.textContent = num1 + ' + ' + num2 + ' = ' + soma;
    }

    //Monitoramento do click no botão
    //Quando o botão for clicado, a função somar será chamada!
    botão.addEventListener('click',somar);