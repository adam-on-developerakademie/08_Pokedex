function fLetterUp(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function findByName () {
  document.getElementById('findId').classList.toggle('displayNone')
  document.getElementById('findValueId').value=''
}

function closeFind(){
  document.getElementById('findValueId').value=''
  document.getElementById('findId').classList.toggle('displayNone')
}