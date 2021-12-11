window.addEventListener('keydown', function(e){
  let audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  if(!audio) return ;
  key.classList.add('playing');
  audio.play();
});

let keys = document.querySelectorAll('.key');
let keysArr = Array.from(keys);


keysArr.forEach(function(e){
  e.addEventListener('transitionend', removedTranstition);
}
)
function removedTranstition(e){
  if(e.propertyName != 'transform')return
  this.classList.remove('playing')
}