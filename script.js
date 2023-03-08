let add = document.querySelector("#add")
let subtract = document.querySelector("#subtract")

console.log(add, subtract)

add.addEventListener("click", function()
{
    // Every time the add button is pressed this code will execute.
    let output = document.querySelector("#op");
    let result = Number(output.innerText) + 1;

    output.innerText = result;
    
});


subtract.addEventListener("click", function()
{
    //Every time the minus button is pressed this code will execute.
    let output = document.querySelector("#op");
    let result = Number(output.innerText) - 1;

    if(result < 1){
        result = 0;
    }

    output.innerText = result;
});

