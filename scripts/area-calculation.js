// Get Input Field Value
function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const inputValueString = inputField.value;
  const inputValue = parseFloat(inputValueString);

  return inputValue;
}

// Set the value
function setValue(elementId, result) {
  const element = document.getElementById(elementId);
  element.innerText = result;
}

// Triangle
document.getElementById("btn-triangle").addEventListener("click", function () {
  const baseValue = getInputValue("t-base");
  const heightValue = getInputValue("t-height");

  if(isNaN(baseValue) || isNaN(heightValue)) {
    alert("Invalid input value");
    return;
  }

  const result = 0.5 * baseValue * heightValue;

  setValue("t-area", result);
  addAreaCalculation("Triangle", result);
});

// Rectangle
document.getElementById("btn-rectangle").addEventListener("click", function () {
  const baseValue = getInputValue("r-base");
  const heightValue = getInputValue("r-height");

  if(isNaN(baseValue) || isNaN(heightValue)) {
    alert("Invalid input value");
    return;
  }

  const result = baseValue * heightValue;

  setValue("r-area", result);
  addAreaCalculation("Rectangle", result);
});

// Parallelogram
document
  .getElementById("btn-parallelogram")
  .addEventListener("click", function () {
    const baseValue = getInputValue("p-base");
    const heightValue = getInputValue("p-height");

    if(isNaN(baseValue) || isNaN(heightValue)) {
        alert("Invalid input value");
        return;
      }

    const result = baseValue * heightValue;

    setValue("p-area", result);
    addAreaCalculation("Parallelogram", result);
  });

// Rhombus
document.getElementById("btn-rhombus").addEventListener("click", function () {
  const baseValue = getInputValue("rh-base");
  const heightValue = getInputValue("rh-height");
  
  if(isNaN(baseValue) || isNaN(heightValue)) {
    alert("Invalid input value");
    return;
  }

  const result = 0.5 * baseValue * heightValue;

  setValue("rh-area", result);
  addAreaCalculation("Rhombus", result);
});

// Pentagon
document.getElementById("btn-pentagon").addEventListener("click", function () {
  const baseValue = getInputValue("pen-base");
  const heightValue = getInputValue("pen-height");

  if(isNaN(baseValue) || isNaN(heightValue)) {
    alert("Invalid input value");
    return;
  }

  const result = 0.5 * baseValue * heightValue;

  setValue("pen-area", result);
  addAreaCalculation("Pentagon", result);
});

// Ellipse
document.getElementById("btn-ellipse").addEventListener("click", function () {
  const baseValue = getInputValue("e-base");
  const heightValue = getInputValue("e-height");

  if(isNaN(baseValue) || isNaN(heightValue)) {
    alert("Invalid input value");
    return;
  }

  const result = 3.1416 * baseValue * heightValue;

  setValue("e-area", result);
  addAreaCalculation("Ellipse", result);
});

// Add the result to Area-Calculation
function addAreaCalculation(areaType, area) {
  const resultsArea = document.getElementById("area-calculation-results");
  const count = resultsArea.childElementCount;

  const result = document.createElement("p");
  result.classList.add("mt-6");
  result.innerHTML = `<div class="flex justify-between">
    <div>${count}. ${areaType}:   ${area}</div> <div> <button class="btn btn-primary btn-sm ml-10">Convert to m<sup>2</sup></button></div>
    </div>`;

  resultsArea.appendChild(result);
}
