// Get Input Field Value
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);

    return inputValue;
}

// Set the value
function setValue(elementId, result){
    const element = document.getElementById(elementId);
    element.innerText = result;
}

// Triangle 
document.getElementById("btn-triangle").addEventListener("click",function(){
    const baseValue = getInputValue("t-base");
    const heightValue = getInputValue("t-height");

    const result = 0.5 * baseValue * heightValue;

    setValue("t-area", result);
})

// Rectangle 
document.getElementById("btn-rectangle").addEventListener("click",function(){
    const baseValue = getInputValue("r-base");
    const heightValue = getInputValue("r-height");

    const result =  baseValue * heightValue;

    setValue("r-area", result);
})

// Parallelogram
document.getElementById("btn-parallelogram").addEventListener("click",function(){
    const baseValue = getInputValue("p-base");
    const heightValue = getInputValue("p-height");

    const result =  baseValue * heightValue;

    setValue("p-area", result);
})

// Rhombus
document.getElementById("btn-rhombus").addEventListener("click",function(){
    const baseValue = getInputValue("rh-base");
    const heightValue = getInputValue("rh-height");

    const result = 0.5 * baseValue * heightValue;

    setValue("rh-area", result);
})

// Pentagon
document.getElementById("btn-pentagon").addEventListener("click",function(){
    const baseValue = getInputValue("pen-base");
    const heightValue = getInputValue("pen-height");

    const result = 0.5 * baseValue * heightValue;

    setValue("pen-area", result);
})

// Ellipse
document.getElementById("btn-ellipse").addEventListener("click",function(){
    const baseValue = getInputValue("e-base");
    const heightValue = getInputValue("e-height");

    const result = 3.1416 * baseValue * heightValue;

    setValue("e-area", result);
})