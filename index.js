'use strict'
const prompt = require("prompt-sync")();

const deposit=()=>{
    while(true){
        const moneydeposit =prompt("Enter the deposit amount: ");
        const depomoney = parseFloat(moneydeposit);
        if(isNaN(depomoney) || depomoney<=0){
            console.log("invalid deposit amount");
        }
        else{
            return depomoney;
        }
    }
}
const lines = ()=>{
    while(true){
        const numofline = prompt("enter the number of lines to bet (1-3): ");
        const line = parseInt(numofline);
        if(isNaN(line) || line<= 0){
            console.log("invalid input");
        }
        else{
            return line;
        }
    }
}
const betting = (depositAmount,numberOfLines)=>{
    while(true){
        const amounttobet = prompt("enter the amount to bet per line: ");
        const inputbet = parseFloat(amounttobet);
        if(isNaN(inputbet) || inputbet<=0 || inputbet > (depositAmount/numberOfLines)){
            console.log("Unavailable balance, deposit amount");
        }
        else{
            return inputbet;
        }
    }
}
const variablescount ={
    A:2,
    B:4,
    C:6,
    D:8
}
const variablesvalue = {
    A:5,
    B:4,
    c:3,
    D:2
}

const spin = ()=>{
    const arrvary = [];
    for(const [sym,val] of Object.entries(variablescount)){
        for(let i=0;i<val;i++){
            arrvary.push(sym);
        }
    }
    const spining=[];
    for(let i=0;i<3;i++){
        spining.push([]);
        const clonevary = arrvary;
        for(let j=0; j<3;j++){
            let random = Math.floor(Math.random()*clonevary.length);
            spining[i].push(clonevary[random]);
            clonevary.splice(clonevary[random],1);
        }
    }
    return spining;
}


