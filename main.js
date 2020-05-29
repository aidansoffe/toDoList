
// creating a close button for old lists that doesnt have close icon
var myList = document.getElementsByTagName('li');
var index;
for(index = 0; index < myList.length; index++){
  var aSpanTag = document.createElement('SPAN')
  var someTxt = document.createTextNode('\u00D7');
  aSpanTag.className = 'close'
  aSpanTag.appendChild(someTxt);
  myList[index].appendChild(aSpanTag)

}



//close button
var closeButton = document.getElementsByClassName('close')
for(var i = 0 ; i < closeButton.length; i++ ){
  closeButton[i].onclick = function() {
    var theDiv = this.parentElement;
    theDiv.style.display = 'none'
  }
 }


//creating to do function
function createNewElement(){
  var li = document.createElement('li')
  var theInputValue = document.getElementById('the-input').value;
  var textNode = document.createTextNode(theInputValue);
  li.appendChild(textNode)

  if(theInputValue === '') {
    alert('hey its not empty')
  } else {
    document.getElementById('the-ul').appendChild(li);
  }

  document.getElementById('the-input').value = '';

  var theSpanTag = document.createElement('SPAN');
  var txt = document.createTextNode('\u00D7');
  theSpanTag.className = 'close';
  theSpanTag.appendChild(txt);
  li.appendChild(theSpanTag)



// removing item onclick 
for(var i = 0 ; i < closeButton.length; i++ ){
 closeButton[i].onclick = function() {
   var theDiv = this.parentElement;
   theDiv.style.display = 'none'
 }
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