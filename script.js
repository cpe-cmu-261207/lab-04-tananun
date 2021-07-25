/* Your code here */
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


// Add a "checked" symbol when clicking on a list item
const checkedItem = () => {
    var list = document.getElementById('myUL');
    console.log(list);
    list.addEventListener('click', function(ev) {
        // console.log(ev);
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked'); 
    }
    }, false);
}


// Create a new list item when clicking on the "Add" button
function addToDoList() {
    var li = document.createElement("li"); 
    var inputValue = document.getElementById("myInput").value; 
    var t = document.createTextNode(inputValue); 
    li.appendChild(t); 
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").prepend(li);
    }
    document.getElementById("myInput").value = "";
  
  
    var btnDelete = document.createElement("BUTTON");
    btnDelete.innerHTML = " \u00D7 Delete";
    btnDelete.className = "close";
    btnDelete.style.marginLeft = "10px";
    li.appendChild(btnDelete);
    btnDelete.style.visibility = "hidden";
    li.addEventListener('mouseout', () => { btnDelete.style.visibility = "hidden" })
    li.addEventListener('mouseover', () => { btnDelete.style.visibility = "visible" })
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  
  }
  