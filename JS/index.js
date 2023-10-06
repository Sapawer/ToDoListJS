
const addButton = document.querySelector(".fa-arrow-circle-down");

addButton.addEventListener("click", function(){
const toDo = document.querySelector("#input").value; //todo text 
const addElement = document.getElementById("stack"); //ul
const addList = document.createElement("li"); //li
    addList.innerText = toDo; 
    addElement.append(Object.assign( addList,  { textContent : toDo}));
    input.value = "";
    toDo = input.value;
  //  console.log(toDo);        
});

document.addEventListener("keypress", function (event){
        
   // console.log(event.key);
    if ( event.key === "Enter"){
        const toDo = document.querySelector("#input").value; //todo text 
        const addElement = document.getElementById("stack"); //ul
        const addList = document.createElement("li"); //li
        addList.innerText = toDo; 
        addElement.append(Object.assign( addList,  { textContent : toDo}));
    
        console.log(input.value);        
     input.value = "";
     toDo = input.value;
    }
      
      
})


const addButton = document.querySelector(".fa-arrow-circle-down");

addButton.addEventListener("click", function(){
const toDo = document.querySelector("#input").value; //todo text 
const addElement = document.getElementById("stack"); //ul
const addList = document.createElement("li"); //li
    addList.innerText = toDo; 
    addElement.append(Object.assign( addList,  { textContent : toDo}));
    input.value = "";
    toDo = input.value;
  //  console.log(toDo);        
});

document.addEventListener("keypress", function (event){
        
   // console.log(event.key);
    if ( event.key === "Enter"){
        const toDo = document.querySelector("#input").value; //todo text 
        const addElement = document.getElementById("stack"); //ul
        const addList = document.createElement("li"); //li
        addList.innerText = toDo; 
        addElement.append(Object.assign( addList,  { textContent : toDo}));
    
        console.log(input.value);        
     input.value = "";
     toDo = input.value;
    }
      
      
})