
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var color3 = document.getElementById("color3");
var colorName1 = document.getElementById("label1");
var colorName2 = document.getElementById("label2");
var colorName3 = document.getElementById("label3");
var generateButton = document.getElementById("buttonGen");
var code = document.getElementById("code");
var randomize = document.getElementById("random");
var direction = document.getElementById("direction-select");



/* ------------------------------------ */
/* generate random gradient for start the page */
/* this work perfectly. I like the idea, but sometimes is a mess with the colors and it can be really ogly */

/* function getRandomColor() {
    const hexLetters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexLetters[Math.floor(Math.random() * 16)];
    }
    return color;
}

colorGenerated_1 = getRandomColor();
colorGenerated_2 = getRandomColor();
colorGenerated_3 = getRandomColor();

document.body.style.background = "linear-gradient(to right," + colorGenerated_1 +"," + colorGenerated_2 +","+colorGenerated_3 + " )";
color1.value = colorGenerated_1;
color2.value = colorGenerated_2;
color3.value = colorGenerated_3;
colorName1.textContent = colorGenerated_1;
colorName2.textContent = colorGenerated_2;
colorName3.textContent = colorGenerated_3; */


/* ---------------------------------------- */
/* picking  colors */

color1.addEventListener("input", changeColorName_1);
color2.addEventListener("input", changeColorName_2);
color3.addEventListener("input", changeColorName_3);

function changeColorName_1(){
    colorName1.textContent = color1.value;
}
function changeColorName_2(){
    colorName2.textContent = color2.value;
}
function changeColorName_3(){
    colorName3.textContent = color3.value;
}

/* ---------------------------------------- */
/* generated with the buttom */
generateButton.addEventListener("click", generate);

function directionSelection(){
    return direction.options[direction.selectedIndex].value;
}


function generate(){
    
    var dir = directionSelection();
    var codeGenerated = "linear-gradient( to " + dir + ", "  + color1.value + ", " + color2.value + ", " + color3.value + " )";
    document.body.style.backgroundImage = codeGenerated;

    /* creating code in the code box*/
    code.textContent = codeGenerated;
    code.classList.add("code-box");
}

/* --------------------------------- */
/* button randomize */
randomize.addEventListener("click", generateRandomColors);

/* select a random direction of the gradient */
function randomDirection(){
    var g = direction.options[Math.floor(Math.random() * direction.length)].value;
    //console.log(g)
    
    /* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
    /* update select input*/
    for(let i=0;i<direction.length;i++){
        /* if it is selected , deselect */
        if(direction[i].getAttribute("selected")){
            direction[i].removeAttribute("selected");
        }

        /*select a new element in the selec input*/ 
        if(direction[i].value === g){
            direction[i].setAttribute("selected", "_self");
            
        }
    }

    return g;
}

function getRandomColor() {
    const hexLetters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexLetters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/* generating liniar-gradient */
function generateRandomColors(){

    colorGenerated_1 = getRandomColor();
    colorGenerated_2 = getRandomColor();
    colorGenerated_3 = getRandomColor();

    
    var codeGenerated = "linear-gradient( to " + randomDirection() + ", " + colorGenerated_1 +", " + colorGenerated_2 +", "+colorGenerated_3 + " )";
    
    document.body.style.background = codeGenerated;
    color1.value = colorGenerated_1;
    color2.value = colorGenerated_2;
    color3.value = colorGenerated_3;
    colorName1.textContent = colorGenerated_1;
    colorName2.textContent = colorGenerated_2;
    colorName3.textContent = colorGenerated_3;

    document.body.classList.remove("start-background");
    /*  generate(); */
   
    /* creating code in the code box*/
    code.textContent = codeGenerated;
    code.classList.add("code-box");

}



/* --------------------------------- */


