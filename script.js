const boxElement = document.getElementById("input-field");
const btnElement = document.querySelector("button");
const divElement = document.getElementById("toDoContainer");

btnElement.addEventListener("click", function () {
  const itemList = document.createElement("p");
  itemList.classList.add("item-list-styling");
  itemList.innerText = boxElement.value;
  divElement.appendChild(itemList);
  boxElement.value = " ";
  itemList.addEventListener("click", function () {
    itemList.style.textDecoration = "line-through";
  });
  itemList.addEventListener("dblclick", function () {
    divElement.removeChild(itemList);
  });
  boxElement.focus();
});

boxElement.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});


// Changes before switching it up and removing boxes 

// const newDivElement = document.createElement("toDoContainer");
// const newBoxElement = document.createElement("input");
// newBoxElement.value = boxElement.value;
// const newBtnElement = document.createElement("button");
// newBtnElement.innerText = "delete";
// newDivElement.appendChild(newBoxElement);
// newDivElement.appendChild(newBtnElement);
// divElement.appendChild(newDivElement);

// newDivElement.addEventListener("dblclick", function () {
//   newDivElement.removeChild(newBoxElement);
// })
// newDivElement.addEventListener("dblclick", function () {
//   newDivElement.removeChild(newBtnElement);
// })
// newBtnElement.addEventListener("click", function () {
//   newDivElement.removeChild(newBoxElement);
// })
// newBtnElement.addEventListener("click", function () {
//   newDivElement.removeChild(newBtnElement);
// })



// Original code

// buttonElement.addEventListener("click", function () {
//   // container
//   const newDivElement = document.createElement("div");

//   // input element
//   const newInputElement = document.createElement("input");
//   newInputElement.value = inputElement.value;

//   // button element
//   const newButtonElement = document.createElement("button");
//   newButtonElement.innerText = "delete";

//   newButtonElement.onclick = function () {
//     console.log("clicked button");
//   };

//   // filling the container
//   newDivElement.appendChild(newInputElement);
//   newDivElement.appendChild(newButtonElement);

//   // add it to the DOM.
//   divElement.appendChild(newDivElement);
// });
