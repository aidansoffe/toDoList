
let savedTodos = [];



//creating to do function
function createNewElement(){
if(document.getElementById("the-input").value != ""){
  savedTodos.push(document.getElementById("the-input").value)
  display()
}
}

function display(){
  document.getElementById('the-input').innerHTML = '';
  for(var i = 0; i < savedTodos.length; i++)
  document.getElementById('the-input').innerHTML 
}


  var theSpanTag = document.createElement('SPAN');  // creating an inline container 
  var txt = document.createTextNode('\u00D7'); //creating X sign
  theSpanTag.className = 'close'; // naming X sign as a 'close'
  theSpanTag.appendChild(txt); // container + X sign
  li.appendChild(theSpanTag) // adding X sign to li 



// removing list onclick 
function removeButtonOnClick() {
  for(var i = 0 ; i < closeButton.length; i++ ){
    closeButton[i].onclick = function() {
      var theDiv = this.parentElement;
      theDiv.style.display = 'none'
    }
   }

//close button
var closeButton = document.getElementsByClassName('close')
for(var i = 0 ; i < closeButton.length; i++ ){
  closeButton[i].onclick = function() {
    var theDiv = this.parentElement;
    theDiv.style.display = 'none'
  }
 }


// Add a "checked" symbol when clicking on a list item
var ulList = document.querySelector('ul');
ulList.addEventListener('click', function(event){
  console.log(event)
  if(event.target.tagName = 'LI'){
    event.target.classList.toggle('checked')
  }


})

// document.getElementById("the-input").value
// document.getElementById('the-input').value = '';  // after adding the input box  gest cleared