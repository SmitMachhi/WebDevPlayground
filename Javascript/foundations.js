/* var a = prompt("Enter Your Name: ");
var b = a.slice(0, 1);
var c = a.slice(1, a.length);
alert("Hello, " + b.toUpperCase() + c.toLowerCase()); */

/* var dogAge = prompt("Enter God Boy's age: ");
var humanAge = ((dogAge - 2) * 4) + 21;
alert("Your Good Boy is " + humanAge + " years old."); */


/* Welcome to the Stanford Karel IDE.
* This is a free space for you to 
* write any Karel program you want. */
/*
 function main(){
    endGoal();
 }
 
 function endGoal(){
 
    moveUp();
    moveUp();
    moveUp();
    moveUp();
    moveUp();
    moveUp();
 }
 
 function moveUp() {
 
    move();
    turnLeft();
    move();
    turnRight();
 } */

/**
* Welcome to the Stanford Karel IDE.
* This is a free space for you to 
* write any Karel program you want.
**/

/*  function main(){
    endGoal();
 }
 
 function endGoal(){
 
    moveUp();
    moveUp();
    moveUp();
    moveUp();
    moveUp();
    moveUp();
    putBeeper();
 
 }
 
 function moveUp() {
    
    putBeeper();
    turnLeft();
    move();
    turnRight();
    move();
 } */

/**
* Welcome to the Stanford Karel IDE.
* This is a free space for you to 
* write any Karel program you want.
**/
function main() {
    putBeeper();
    beeperUpRight();
    beeperUpLeft();
    beeperUpRight();
    beeperUpLeft();
    twoStepUp();
    resetLeft();
    putBeeper();
    beeperUpRight();
    beeperUpLeft();
    beeperUpRight();
    beeperUpLeft();
    twoStepUp();
    oneLine();
}

function beeperUpRight() {
    turnLeft();
    move();
    turnRight();
    move();
    putBeeper();
}

function beeperUpLeft() {
    turnRight();
    move();
    turnLeft();
    move();
    putBeeper();
}

function twoStepUp() {
    turnLeft();
    move();
    move();
    turnRight();
}

function resetLeft() {
    turnRight();
    turnRight();
    move();
    move();
    move();
    move();
    turnRight();
    turnRight();
}

function oneLine() {
    resetLeft();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
}
