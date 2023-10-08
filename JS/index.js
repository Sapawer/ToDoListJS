
var toDo = document.querySelector("input");
const list = document.getElementById("list");
const todaysDate = document.getElementById("date");
const dayName =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"]
var currentDate = new Date();
var dateToday = currentDate.getDay();
var monthToday = currentDate.getMonth();
var yearToday = currentDate.getFullYear();
todaysDate.innerHTML = `${dayName[dateToday]}  , ${monthName[monthToday]} , ${yearToday}`;

function addToDo(toDo){
const text = `<li class="item">
<i class="fa fa-circle-thin fa-2x" job = "complete"></i>
<p class="text" > ${toDo}.</p>
<i class="fa fa-trash-o fa-2x" job ="delete"></i>
</li>`
const position ="beforeend";

list.insertAdjacentHTML(position,text);
}
const refreshPage = document.querySelector(".fa-refresh");
refreshPage.addEventListener("click",function(){
        location.reload();
})

document.addEventListener("keydown",function(event){
    toDo = input.value;
        if( event.key =="Enter"){

            addToDo(toDo);
            input.value = "";
        }
    
});

const plusButton = document.querySelector(".fa-plus");

plusButton.addEventListener("click", function(){
    toDo = input.value;
    
        addToDo(toDo);
        input.value = "";

})
