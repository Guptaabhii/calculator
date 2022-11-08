

let string = "";

let buttons = document.querySelectorAll('.bttn');

Array.from(buttons).forEach((calculate)=>{
    calculate.addEventListener('click', (result)=>{

        if(result.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('.input_values').value = string;
        }
        else if(result.target.innerHTML == 'AC'){
            string ="";
            document.querySelector('.input_values').value = string;
        }
        else if(result.target.innerHTML == 'X'){
            string = string.slice(0, string.length - 1);
            document.querySelector('.input_values').value = string;
        }
        else{
        console.log(result.target);
        string = string + result.target.innerHTML;
        document.querySelector('.input_values').value = string;
        }
    })
})