let five = document.getElementById('five');
let ten = document.getElementById('ten');
let fifteen = document.getElementById('fifteen');
let twentyFive = document.getElementById('twenty-five');
let fifty = document.getElementById('fifty');

let total = document.getElementById('total');
let Tip = document.getElementById('tip');
let btn = document.getElementById('btn');
var text = null;
var tip = null;


five.addEventListener('click', ()=>{

    calculator(5)
});

ten.addEventListener('click', ()=>{

    calculator(10)
});

fifteen.addEventListener('click', ()=>{

    calculator(15)
});

twentyFive.addEventListener('click', ()=>{

    calculator(25)
});

fifty.addEventListener('click', ()=>{

    calculator(50)
});

function calculator(number){

    let Dollar = document.getElementById('dollar');
    Dollar = Dollar.value;

    let person = document.getElementById('person');
    person = person.value;


     if (Dollar != '' && person != ''){

        document.getElementById('invisible').
        classList.remove("ativo")

        document.getElementById('Invisible').
        classList.remove("ativo")

        document.getElementById('person')
        .classList.remove("erro");

        document.getElementById('person')
        .classList.add("success");

        document.getElementById('dollar')
        .classList.remove("erro");

        document.getElementById('dollar')
        .classList.add("success");

        btn.classList.add("ativo")

        person = parseFloat(person);

        text = Dollar / person ;
        text = parseFloat(text.toFixed(2));

        total.innerHTML = `$${text}` ;

        tip = (number / 100) * text ;

        Tip.innerHTML = `$${tip}` ;

    } else if (person == '' && Dollar == '') {

        document.getElementById('person')
        .classList.add("erro");

        document.getElementById('invisible').
        classList.add("ativo");

        document.getElementById('Invisible').
        classList.add("ativo");

        document.getElementById('dollar')
        .classList.add("erro");

    }  else if (Dollar == ''){

        document.getElementById('dollar')
        .classList.add("erro");

        document.getElementById('Invisible').
        classList.add("ativo");

        if (person != ''){

            document.getElementById('person')
            .classList.remove("erro");

            document.getElementById('person')
            .classList.add("success");

            document.getElementById('invisible').
            classList.remove("ativo");
    
        }

    } else if (Dollar =! ''){

        document.getElementById('dollar')
        .classList.remove("erro");

        document.getElementById('dollar')
        .classList.add("success");

        document.getElementById('Invisible').
        classList.remove("ativo")

        if (person == '') {

            document.getElementById('person')
            .classList.add("erro");

            document.getElementById('invisible').
            classList.add("ativo")
    
        } 

    } else if (person == '') {

        document.getElementById('person')
        .classList.add("erro");

        document.getElementById('invisible').
        classList.add("ativo")

    } else if (person != ''){

        document.getElementById('person')
        .classList.remove("erro");

        document.getElementById('person')
        .classList.add("success");

        document.getElementById('invisible').
        classList.remove("ativo")

    };
}

btn.addEventListener('click', ()=>{

    total.innerHTML = "$0.00"
    Tip.innerHTML = `$0.00`

    btn.classList.remove("ativo")
})