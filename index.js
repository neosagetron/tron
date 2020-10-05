var displayOthers = document.getElementById('others')
var menuBtn = document.getElementById('menu')
var closeBtn = document.getElementById('close')

menuBtn.onclick = function(){
  displayOthers.style.display = 'block'
  closeBtn.style.display = 'block'
  menuBtn.style.display = 'none'
}
closeBtn.onclick = function(){
  displayOthers.style.display = 'none'
  closeBtn.style.display = 'none'
  menuBtn.style.display = 'block'
}