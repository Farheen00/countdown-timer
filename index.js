#! /usr/bin/env node
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
console.log("\t Welcome to COUNTDOWN TIMER \t");
let ans = await inquirer.prompt([
    {
        name: "timer",
        type: "number",
        message: "Enter the amount of seconds",
        validate: (input) => {
            if (isNaN(input)) {
                return "Please enter a valid number";
            }
            else if (input > 60) {
                return "Seconds must be in 60";
            }
            else {
                return true;
            }
        },
    },
]);
let input = ans.timer + 1;
function countDown(val) {
    let intTime = new Date().setSeconds(new Date().getSeconds() + val);
    let intervalTime = new Date(intTime);
    setInterval(() => {
        let currentTime = new Date();
        let timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log("Timer Expired");
            process.exit();
        }
        let minute = Math.floor((timeDiff % (3600 * 24)) / 3600);
        let second = Math.floor(timeDiff % 60);
        console.log(`${minute}:${second}`);
    }, 1000);
}
countDown(input);
