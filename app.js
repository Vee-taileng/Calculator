function getHistory(){
    return document.querySelector("#history-value").innerText
}
function printHistory(num){
     document.querySelector("#history-value").innerText=num
}

function getOutput(){
    return document.querySelector("#output-value").innerText
}
function printOuput(num){
    if(num === ""){
        document.querySelector("#output-value").innerText = num
    }else{
        document.querySelector("#output-value").innerText = getFormatedNumber(num)
    }
}

function getFormatedNumber(num){
    if(num === "-"){
        return ""
    }
    let n = Number(num);
    let value = n.toLocaleString("en")
    return value
}

function reverseNumberFormat(num){
    return Number(num.replace(/,/g,""))
}

let operators = document.querySelectorAll(".operator");
for(let operator of operators){
    operator.addEventListener("click", ()=>{
        if(operator.id === "clear"){
            printHistory("")
            printOuput("")
        }

        else if(operator.id === "backspace"){
           let output = reverseNumberFormat(getOutput()).toString()
           if(output){
            output = output.substring(0, output.length -1)
            printOuput(output)
           }
        }
        else {
            let output = getOutput();
            let history = getHistory();
            if(output === "" || history === ""){
                if(isNaN(history[history.length-1])){
                    history = history.substring(0, history.length -1
                        )
                }
            }
    
            if(output !== "" || history !== ""){
                output = output === ""?
                output : reverseNumberFormat(output);
                history = history + output
                if(operator.id === "="){
                    let result = eval(history)
                    printOuput(result)
                    printHistory("")
                }else{
                    history = history + operator.id;
                    printHistory(history)
                    printOuput("")
                }
            }
        }
    })
}

let numbers = document.querySelectorAll(".number")
for(let number of numbers){
    number.addEventListener("click", ()=>{
        let output = reverseNumberFormat(getOutput())
        if(output != NaN){
            output = output + number.id
            printOuput(output)
        }
    })
}

