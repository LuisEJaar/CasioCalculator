window.onload = function() {

    function clearPage() {
        document.getElementById('display').value = "";
    } 
    clearPage ();

    const clear = document.querySelector("#clear");
    const equal = document.querySelector("#equal");
    const number = document.querySelectorAll(".number");
    const operator1 = document.querySelectorAll(".operator");
    const operator2 = document.querySelectorAll(".operator2");
    const memory = document.querySelectorAll(".memory");

    const mem = [''];

    for (const memories of memory) {
        memories.addEventListener('click', function(e) {
            const clickedButton = e.target.value;
            if (clickedButton === 'clear') {
                mem[0] = '';
            } else if (clickedButton === 'add') {
                if (mem[0] === ''){
                    mem[0] = document.getElementById('display').value;
                } else {
                    mem[0] = Number(mem[0]) + Number(document.getElementById('display').value);
                };
            } else if (clickedButton === 'subtract') {
                mem[0] = Number(mem[0]) - document.getElementById('display').value;
            } else if (clickedButton === 'recall') { 
                if (mem[0] === '') {
                    console.log("Tis blank Milord");
                } else if (val[1] === '') {
                    val[0] = mem[0]
                    document.getElementById('display').value = `${val[0]}`;
                } else if(val[2] === '') {
                    document.getElementById('display').value = '';
                    val[2] = mem[0];
                    document.getElementById('display').value = `${val[2]}`;
                } else {
                    val[2] = mem[0]
                    document.getElementById('display').value = `${val[2]}`;
                };
            };
        });
    };

    const val = ['','',''];

    for (const numbers of number){ 
        numbers.addEventListener('click', function(e) {
        const clickedButton = e.target.value;
        if(val[3] === 'yes'){ 
            val[3] = ''; 
            document.getElementById('display').value = ''; 
        } 
        if (val[1] === '') {
            let value = document.querySelector('input').value;
            val[0] = `${value}${clickedButton}`
            document.getElementById('display').value = `${val[0]}`;
        } else if(val[2] === '') {
            document.getElementById('display').value = '';
            val[2] = clickedButton;
            document.getElementById('display').value = `${val[2]}`;
        } else {
            let value2 = clickedButton;
            val[2] = `${value2}${clickedButton}`
            document.getElementById('display').value = `${val[2]}`;
        };
    });
    };
    
    for (const operators2 of operator2){ 
        operators2.addEventListener('click', function(e) {
        const clickedButton = e.target.value;
        if (val[1] === '') {
          if (clickedButton === "percent") {
            val[0] = val[0]/100;
          };
          if (clickedButton === "square") {
            val[0] = val[0] ** (1/2);
          };
          if (clickedButton === "signChange") {
            val[0] = val[0] * -1;
          };
          document.getElementById('display').value = val[0];
        } else {
            if (clickedButton === "percent") {
                val[2] = val[2]/100;
              };
              if (clickedButton === "square") {
                val[2] = val[2] ** (0.5);
              };
              if (clickedButton === "signChange") {
                val[2] = val[2] * -1;
              };
              document.getElementById('display').value = val[2];
        };
    });
    };

    for (const operators1 of operator1){ 
        operators1.addEventListener('click', function(e) {
        const clickedButton = e.target.value;
        if (val[0] !== '' && val[1] !== '' && val[2] !== '') {
            val[0] = operator(val[0],val[2],val[1]);
            document.getElementById('display').value = `${val[0]}`;
            val[1] = clickedButton;
            val[2] = '';
        } else if (val [0] !== '') {
            val[1] = clickedButton;
        };
        });
    };  
    
   equal.addEventListener('click', ()=> {
    if (val[0] !== '' && val[1] !== '' && val[2] !== '') {
            val[0] = operator(val[0],val[2],val[1])
            document.getElementById('display').value = `${val[0]}`;
            val[1] = '';
            val[2] = '';
            val[3] = 'yes'; 
            console.log(val[0]);
    };
   });
        
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

    clear.addEventListener('click', () => {
        document.getElementById('display').value = "";
        val[0] = '';
        val[1] = '';
        val[2] = '';
        val[3] = ''; 
    });

}