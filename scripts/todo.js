function findTotal(){
  var arr = document.getElementsByClassName('input');
  var tot = 0;
  for (var i = 0; i < arr.length; i++) {
    if (parseInt(arr[i].value)) {
      tot += parseInt(arr[i].value);
    }
  }
  document.getElementById('total').textContent = tot;
}


function remove(elem){
  className = elem.className;
  var arr = document.getElementsByClassName(className);
  for (var i = 0; i < arr.length; i++) {
    arr[i].style.display="none";
  }
  tot = document.getElementById('total').textContent;
  if (tot > 0) {
    document.getElementById('total').textContent = tot - 1;
  }

  price = document.getElementById('totalPrice').textContent;
  if (className == "original") {
    price = price.slice(1) - 18;
  } else {
    price = price.slice(1) - 12;
  }

  document.getElementById('totalPrice').textContent = "$"+price;
}
