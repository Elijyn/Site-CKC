/**CODE POUR LES SLIDERS**/

const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 50;

const rangeInput2 = document.querySelectorAll(".range-input2 input"),
priceInput2 = document.querySelectorAll(".price-input2 input"),
range2 = document.querySelector(".slider2 .progress2");
let priceGap2 = 1000;

const rangeInput3 = document.querySelectorAll(".range-input3 input"),
priceInput3 = document.querySelectorAll(".price-input3 input"),
range3 = document.querySelector(".slider3 .progress3");
let priceGap3 = 1;

console.log(priceInput[0].value);
console.log(priceInput[1].value);
console.log(priceInput2[0].value);
console.log(priceInput2[1].value);

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";               
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
        console.log(minVal);
        console.log(maxVal);

        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});

priceInput2.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput2[0].value),
        maxPrice = parseInt(priceInput2[1].value);
        
        if((maxPrice - minPrice >= priceGap2) && maxPrice <= rangeInput2[1].max){
            if(e.target.className === "input-min"){
                rangeInput2[2].value = minPrice;
                range2.style.left = ((minPrice / rangeInput2[0].max) * 100) + "%";
            }else{
                rangeInput2[3].value = maxPrice;
                range2.style.right = 100 - (maxPrice / rangeInput2[1].max) * 100 + "%";               
            }
        }
    });
});

rangeInput2.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput2[0].value),
        maxVal = parseInt(rangeInput2[1].value);
        console.log(minVal);
        console.log(maxVal);

        if((maxVal - minVal) < priceGap2){
            if(e.target.className === "range-min"){
                rangeInput2[0].value = maxVal - priceGap
            }else{
                rangeInput2[1].value = minVal + priceGap;
            }
        }else{
            priceInput2[0].value = minVal;
            priceInput2[1].value = maxVal;
            range2.style.left = ((minVal / rangeInput2[0].max) * 100) + "%";
            range2.style.right = 100 - (maxVal / rangeInput2[1].max) * 100 + "%";
        }
    });
});

priceInput3.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput3[0].value),
        maxPrice = parseInt(priceInput3[1].value);
        
        if((maxPrice - minPrice >= priceGap3) && maxPrice <= rangeInput3[1].max){
            if(e.target.className === "input-min"){
                rangeInput2[2].value = minPrice;
                range2.style.left = ((minPrice / rangeInput3[0].max) * 100) + "%";
            }else{
                rangeInput3[3].value = maxPrice;
                range3.style.right = 100 - (maxPrice / rangeInput3[1].max) * 100 + "%";               
            }
        }
    });
});

rangeInput3.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput3[0].value),
        maxVal = parseInt(rangeInput3[1].value);
        console.log(minVal);
        console.log(maxVal);

        if((maxVal - minVal) < priceGap3){
            if(e.target.className === "range-min"){
                rangeInput3[0].value = maxVal - priceGap
            }else{
                rangeInput3[1].value = minVal + priceGap;
            }
        }else{
            priceInput3[0].value = minVal;
            priceInput3[1].value = maxVal;
            range3.style.left = ((minVal / rangeInput3[0].max) * 100) + "%";
            range3.style.right = 100 - (maxVal / rangeInput3[1].max) * 100 + "%";
        }
    });
});

/**CODE POUR CHANGER LA CATEGORIE AVEC LES SLIDERS**/

var maDiv = document.getElementById("T1");
var maDiv2 = document.getElementById("T2");
var maDiv3 = document.getElementById("T3");
var cat1 = document.getElementById("b1");
var cat2 = document.getElementById("b2");
var cat3 = document.getElementById("b3");

document.getElementById("b1").addEventListener("click", function() {

    if (maDiv.classList.contains("caché")) {
        maDiv.classList.remove("caché");
        maDiv2.classList.add("caché");
        maDiv3.classList.add("caché");
        cat1.classList.add("activation");
        cat2.classList.remove("activation");
        cat3.classList.remove("activation");
    }
});

document.getElementById("b2").addEventListener("click", function() {

    if (maDiv2.classList.contains("caché")) {
        maDiv2.classList.remove("caché");
        maDiv.classList.add("caché");
        maDiv3.classList.add("caché");
        cat2.classList.add("activation");
        cat1.classList.remove("activation");
        cat3.classList.remove("activation");
    }
});

document.getElementById("b3").addEventListener("click", function() {

    if (maDiv3.classList.contains("caché")) {
        maDiv3.classList.remove("caché");
        maDiv2.classList.add("caché");
        maDiv.classList.add("caché");
        cat3.classList.add("activation");
        cat1.classList.remove("activation");
        cat2.classList.remove("activation");
    }
});