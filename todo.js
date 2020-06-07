var elements = [];
const addTxt = document.querySelector(".addTxt");
const list = document.querySelector(".list")

window.onload = function(){
  if(JSON.parse(localStorage.getItem("to-do-elements")) != null){
    elements = JSON.parse(localStorage.getItem("to-do-elements"))
    this.display();
  }
}

function addElement() {
  if(addTxt.value.trim() != ""){
    elements.push(addTxt.value.trim());
    if(localStorage.getItem("to-do-elements") == null){
      localStorage.setItem("to-do-elements", JSON.stringify(elements))
    }
    else{
      localStorage.setItem("to-do-elements", JSON.stringify(elements))
    }
   
    display();
  }
  addTxt.value = "";

}

function display() {
list.innerHTML = "";
for(var i = 0; i < elements.length; i++)
  list.innerHTML += "<center><div class='element'>" + elements[i] + 
  "<img class='tick' src='./ttickk.jpg' onclick='strike("+i+")'><img class='trashbin' src='./trash.png' onclick='del("+i+")'></div></center>"; 


}

function del(param) {
elements.splice(param, 1);
if(localStorage.getItem("to-do-elements") == null){
  localStorage.setItem("to-do-elements", JSON.stringify(elements))
}
else{
  localStorage.setItem("to-do-elements", JSON.stringify(elements))
}
display();
}

function strike(param) {
  if(elements[param].includes("<strike>")){
    elements[param] = elements[param].replace("<strike>", '');
    elements[param] = elements[param].replace("</strike>", '');
  }
 else {
   elements[param] = '<strike>' + elements[param] + '</strike>';
 }
 if(localStorage.getItem("to-do-elements") == null){
  localStorage.setItem("to-do-elements", JSON.stringify(elements))
}
else{
  localStorage.setItem("to-do-elements", JSON.stringify(elements))
}
display();
}