var position = 0
var images = document.querySelectorAll('.gallery__images-item') // toma todos los elementos
images[position].classList.add('gallery__images-item--selected')

var rightBtn = document.querySelector('.gallery__control-right')
rightBtn.addEventListener('click', next)

var leftBtn = document.querySelector('.gallery__control-left')
leftBtn.addEventListener('click', back)
disabledBtn()

const body = document.querySelector('body')
body.addEventListener("keyup", selectImageByKey)

var dots = document.querySelectorAll('.gallery__dot-button')
dots[position].classList.add('gallery__dot-button--selected')

var dotsContainer = document.querySelector('.gallery__dots')
dotsContainer.addEventListener("click",dotSelect)

function selectImageByKey ( {keyCode} ) {
  clear()
  position = keyCode == 37 ? position - 1 : keyCode == 39 ? position + 1 : position
  select(position)
  disabledBtn()
}

function dotSelect ({target}) {
  clear()
  position = Array.from(dots).indexOf(target)
  select(position)
  disabledBtn()
}

function next () {
  if (position >= 0 && position < images.length - 1) {
    clear()
    position = position + 1
    select(position)
    disabledBtn()
  }
}

function back () {
  if (position > 0 && position <= images.length - 1) {
    clear()
    position = position - 1
    select(position)
    disabledBtn()
  }
}

function clear () {
  images[position].classList.remove('gallery__images-item--selected')
    dots[position].classList.remove('gallery__dot-button--selected')
}


function select ( position ) {
  images[position].classList.add('gallery__images-item--selected')
  dots[position].classList.add('gallery__dot-button--selected')
}

function disabledBtn () {
  if (position === 0) {
    leftBtn.classList.add('gallery__control--disabled')
  } else if (position === images.length - 1) {
    rightBtn.classList.add('gallery__control--disabled')
  } else {
    leftBtn.classList.remove('gallery__control--disabled')
    rightBtn.classList.remove('gallery__control--disabled')
  }
}
