function createNewElement(){
  var li = document.createElement('li')
  var theInput = document.getElementById('the-input').value;
  var textNode = document.createTextNode(theInputValue);
  li.appendChild(textNode)
  if(theInputValue === '') {
    alert('hey its not empty')
  } else {
    document.getElementById('the-ul').append(li);
  }
}