#! /usr/bin/env node
import inquirer from "inquirer";
async function Game(){
    console.log("\nWelcome To The Number Guessing Game\nGuess The Number Between 1 to 10..?\n");
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    const hint1 = randomNumber%2
    const extra1 = await inquirer.prompt([{
        message: "Due You Want Hint..?\n",
        type: "list",
        name: "extra_1",
        choices: ["Yes","No"]
    }]);
    if(extra1.extra_1==="Yes"){
        if(hint1===0){
            console.log('It is an "Even" number..!\n')
        }
        else{
            console.log('It is an "Odd" number..!\n')
        }
    }
    else{
    }
    const ans = await inquirer.prompt([{
        message: "Guess The Number Between 1 to 10..?\n",
        type: "number",
        name: "guessNumber"
    }]);
    if(ans.guessNumber===randomNumber){
        console.log('"Congratilations\nYou Won The Game"..,\n');
        
    }
    else{
        console.log('"Bad Luck\nYou Loss The Game"..,\n');
    }
    const replay = await inquirer.prompt([{
        message: "Due You Wanna Play Again..?\n",
        type: "list",
        name: "extra_2",
        choices: ["Yes","No"]
    }]);
    if(replay.extra_2==="Yes"){
        Game()
    }
    else{
        console.log('"Thank You"');   
    }
}
Game();