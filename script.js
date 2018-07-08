var forkWidth = 120;
var offset = -45;
var offsetAscending = true;
var forks = 4;
var branches = 4;
var branchLength = 40;

function setup(){
    createCanvas(500, 500);
    angleMode(DEGREES);
    fill("pink");
    ellipseMode(CENTER);
}

function draw(){
    background("lightblue");
    push();
    translate(width/2, height);
    rotate(180);
    rotate(offset/3 + 15);
    makeTree(true, forks);
    makeTree(false, forks);
    pop();
    if(offsetAscending && offset < -30){
        offset+=0.25;
    }
    else if(offsetAscending){
        offsetAscending = false;
    }
    else if(offset > -60){
        offset-=0.25;
    }
    else{
        offsetAscending = true;
    }
}

function makeTree(makeBranches, degree){
    //draws line
    strokeWeight(5 * degree);
    if(degree  > 0){
        push();

        if(makeBranches == true){
            stroke("blue");
            line(0, 0, 0, branchLength * degree);
        }
        else if(degree == 1){
            noStroke();
            ellipse(0, branchLength * degree, 25, 25);
        }
        translate(0, branchLength * degree);

        for(var i = 0; i < branches; i++){
            push();
            rotate(offset + forkWidth * i / branches);
            makeTree(makeBranches, degree - 1, offset);
            pop();
        }

        pop();
    }
}