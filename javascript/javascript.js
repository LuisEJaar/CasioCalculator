window.onload = function() {

    const clear = document.querySelector("#clear");
    const equal = document.querySelector("#equal");
    const number = document.querySelectorAll(".number");
    const operator1 = document.querySelectorAll(".operator");
    const operator2 = document.querySelectorAll(".operator2");
    const memory = document.querySelectorAll(".memory");
    const power = document.querySelectorAll(".power");
    const decimal = document.querySelector(".decimal");
    const display = document.getElementById("display");

    const equation = {
        integer1: '',
        operator: '',
        integer2: '',
        equal: '',
        memory:'',
        syspower:'on'
    }

    //Clear the page initially

    function clearPage() {
        display.value = "";
    } 
    clearPage ();

    //Power Buttons

    for (const powerButtons of power) {
        powerButtons.addEventListener('click', function(e) {
            const clickedButton = e.target.value;
            equation.integer1 = '';
            equation.operator = '';
            equation.integer2 = '';
            equation.equal = '';
            equation.memory = '';
            if (clickedButton === 'on') {
                display.classList.add('on');
                display.classList.remove('off');
                display.value = '';
                equation.syspower = 'on';
            } else {
                display.classList.add('off');
                display.classList.remove('on');
                display.value = '';
                equation.syspower = 'off';
            };
        });
    };

    //memory buttons

    for (const memories of memory) {
        memories.addEventListener('click', function(e) {
            const clickedButton = e.target.value;
            if (equation.operator === ''){
                equation.equal = 'yes';
            };
            if (clickedButton === 'clear') {
                equation.memory = '';
            } else if (clickedButton === 'add') {
                
                if (equation.memory === ''){
                    equation.memory = display.value;
                } else {
                    equation.memory = Number(equation.memory) + Number(display.value);
                };
            } else if (clickedButton === 'subtract') {
                equation.memory = Number(equation.memory) - display.value;
            } else if (clickedButton === 'recall') { 
                if (equation.memory === '') {
                    display.value = "Tis blank Milord";
                    equation.equal = 'yes';
                } else if (equation.operator === '') {
                    equation.integer1 = equation.memory
                    display.value = `${equation.integer1}`;
                } else if(equation.integer2 === '') {
                    display.value = '';
                    equation.integer2 = equation.memory;
                    display.value = `${equation.integer2}`;
                } else {
                    equation.integer2 = equation.memory
                    display.value = `${equation.integer2}`;
                };
            };
        });
    };

   //number buttons

    for (const numbers of number){ 
        numbers.addEventListener('click', function(e) {
        const clickedButton = e.target.value;
        if (equation.syspower === 'on'){
            if(equation.equal === 'yes'){ 
                equation.equal = ''; 
                display.value = ''; 
            } 
            if (equation.operator === '') {
                let value = display.value;
                equation.integer1 = `${value}${clickedButton}`
                display.value = `${equation.integer1}`;
            } else if(equation.integer2 === '') {
                display.value = '';
                equation.integer2 = clickedButton;
                display.value = `${equation.integer2}`;
            } else {
                let value2 = clickedButton;
                equation.integer2 = `${value2}${clickedButton}`
                display.value = `${equation.integer2}`;
            };
        }
    });
    };

    //decimal button

    decimal.addEventListener('click', function(e){
        const display = display.value;
        console.log(display);
        if (display === ''){
            //let return value of 0.1 as equation.operator
        }
    });

    //operators affecting equation (+, -, /, *)

    for (const operators1 of operator1){ 
        operators1.addEventListener('click', function(e) {
        const clickedButton = e.target.value;
        if (equation.integer1 !== '' && equation.operator !== '' && equation.integer2 !== '') {
            equation.integer1 = operator(equation.integer1,equation.integer2,equation.operator);
            display.value = `${equation.integer1}`;
            equation.operator = clickedButton;
            equation.integer2 = '';
        } else if (equation.integer1 !== '') {
            equation.operator = clickedButton;
        };
        });
    }; 

    //Operators affecting present button (%, +/-, Square Root)
    
    for (const operators2 of operator2){ 
        operators2.addEventListener('click', function(e) {
        const clickedButton = e.target.value;
        if (equation.operator === '') {
          if (clickedButton === "percent") {
            equation.integer1 = equation.integer1 / 100;
          };
          if (clickedButton === "square") {
            equation.integer1 = equation.integer1 ** (1/2);
          };
          if (clickedButton === "signChange") {
            equation.integer1 = equation.integer1 * -1;
          };
          display.value = equation.integer1;
        } else {
            if (clickedButton === "percent") {
                equation.integer2 = equation.integer2/100;
              };
              if (clickedButton === "square") {
                equation.integer2 = equation.integer2 ** (0.5);
              };
              if (clickedButton === "signChange") {
                equation.integer2 = equation.integer2 * -1;
              };
              display.value = equation.integer2;
        };
    });
    };

   //Equal sign 
    
   equal.addEventListener('click', ()=> {
    if (equation.integer1 !== '' && equation.operator !== '' && equation.integer2 !== '') {
        equation.integer1 = operator(equation.integer1,equation.integer2,equation.operator)
            display.value = `${equation.integer1}`;
            equation.operator = '';
            equation.integer2 = '';
            equation.equal = 'yes'; 
            console.log(equation.integer1);
    };
   });

   //Function to evaluate equation
        
    function operator(value1,value2, action) {
        if (action === "+") {
            let answer = Number(value1) + Number(value2);
            return answer;
        } else if (action === "-") {
            let answer = Number(value1) - Number(value2);
            return answer;
        } else if (action === "*") {
            let answer = Number(value1) * Number(value2);
            return answer;
        } else if (action === "/") {
            let answer = Number(value1) / Number(value2);
            return answer;
        };
    };

    //Clear Button

    clear.addEventListener('click', () => {
        display.value = "";
        equation.integer1 = '';
        equation.operator = '';
        equation.integer2 = '';
        equation.equal = ''; 
    });
}