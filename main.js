const input = require('sync-input')
const espressoCoffee = { name: " espresso", water: 250, milk: 0, beans: 16, price: 4};
const latteCoffee = {name: "latte",water: 350, milk: 75, beans: 20 , price: 7};
const cappuccinoCoffee = {name: "cappuccino", water: 200, milk: 100, beans: 12, price: 6};
let machineWater = 400;
let machineMilk =540;
let machineBeans = 120;
let machineCups = 9;
let machineMoney =550;

function makeCoffe(coffeType){
   let  makedCoffe = coffeType;
   if (machineWater >= makedCoffe.water){
       if (machineMilk >= makedCoffe.milk) {
           if (machineBeans >= makedCoffe.beans) {
               if (machineCups > 0) {
                   console.log("I have enough resources, making you a coffee!");
                   machineWater = machineWater - makedCoffe.water;
                   machineMilk = machineMilk - makedCoffe.milk;
                   machineBeans = machineBeans - makedCoffe.beans;
                   machineCups = machineCups - 1;
                   machineMoney = machineMoney + makedCoffe.price;
               } else {
                   console.log("Sorry, not enough cups!");
               }
           } else {
               console.log("Sorry, not enough coffee beans!");
           }
       } else {
           console.log("Sorry, not enough milk!");
       }
   } else {
       console.log("Sorry, not enough water!");
   }
}

function choseAction() {
    let success = true;    
    while (success === true){        
        console.log();
        console.log("Write action (buy, fill, take, remaining, exit):")
        let action = input().toUpperCase();
        console.log();
        switch (action) {
            case "BUY": {                
                choseCoffeeType();
                success = true;
                break;
            }
            case "FILL": {                
                fillMachine();
                success = true;
                break;
            }
            case "TAKE": {                
                console.log(`I gave you $${machineMoney}`);
                machineMoney = 0;
                success = true;
                break;
            }
            case "REMAINING": {                
                machineStatus();
                success = true;
                break;
            }
            case "EXIT": {
                success = false;
                break;
            }
            default: {
                success = false;
                break;
            }
        }
    };
}

function choseCoffeeType(){
    let success = true;
    console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:")
    let coffee ;
    do {
        let  chose =  input();
        switch (chose) {
            case "1": {
                //coffee = "espressoCoffee";
                makeCoffe(espressoCoffee);
                break;
            }
            case "2": {
                //coffee = "latteCoffee";
                makeCoffe(latteCoffee);
                break;
            }
            case "3":{
                //coffee = "cappuccinoCoffee";
                makeCoffe(cappuccinoCoffee);
                break;
                }
            case "back": {
                success = true;
                break;
            }
            default: {
                success = false;
            }
        }

    } while (!success === true);
    return coffee;
}

function checkInputIsNaN(){
    do {
        let i = false;
        quantity = input();
        if (!isNaN(quantity)) {
            return Number(quantity);
        }
    } while (!isNaN(quantity));
}

function machineStatus(){
   console.log(`The coffee machine has:
${machineWater} ml of water
${machineMilk} ml of milk
${machineBeans} g of coffee beans
${machineCups} disposable cups
$${machineMoney} of money`)
}

function fillMachine(){
    console.log("Write how many ml of water you want to add:");
    machineWater += checkInputIsNaN();
    console.log("Write how many ml of milk you want to add:");
    machineMilk += checkInputIsNaN();
    console.log("Write how many grams of coffee beans you want to add:");
    machineBeans += checkInputIsNaN();
    console.log("Write how many disposable coffee cups you want to add:");
    machineCups += checkInputIsNaN();
}
//compute
choseAction();


