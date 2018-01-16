export class Gallery{
  constructor (node, data){
    this.index = 0
    this.node = node
    this.elements = {}

    this.setShell()
    this.setUI(data)
    this.updateArrowsState()

  }

  static get states () {
    return {
      imageSelected: "gallery__images-item",
      dotSelected: 'gallery__dot-button--selected',
      arrowDisabled: 'gallery__control--disabled'
    }
  }

  static get templates (){
    return {
      shell: (
        `<div class="gallery__images">
           <ul class="gallery__images-list"></ul>
         </div>
         <div class ="gallery__control">
           <button class="gallery__control gallery__control-left"><--</button>
           <button class="gallery__control gallery__control-right">--></button> 
         </div>
         <ul class ="gallery__dots"></ul>`  
      ),
      dot: (
        `<li class="gallery__dot"> 
           <button class="gallery__dot-button"></button>
        </li>`
      )
    }
  }

  static toGalleryItemHTML ({url}) {
    return (
      `<li class="gallery__images-item">
         <img class="gallery__images-item-img " src="${url}"> 
      </li>`
    )
  }

  static toGalleryDotHTML () {
    return Gallery.templates.dot
  }

  setShell () {
    this.node.tabIndex = 0
    this.node.innerHTML = Gallery.templates.shell
    this.elements.imagesContainer = this.node.querySelector('.gallery__images')
    this.elements.leftBtn = this.node.querySelector('.gallery__control-left')
    this.elements.rightBtn = this.node.querySelector('.gallery__control-right')
    this.elements.dotsContainer = this.node.querySelector('.gallery__dots')
  }

  setUI (data) {
    this.setDots(data)
    this.setImages(data)
  }

  setDots (data) {
    const dotsHTML = data.map(Gallery.toGalleryDotHTML).join('')
    this.elements.dotsContainer.innerHTML = dotsHTML
    this.elements.dots = this.elements.dotsContainer.querySelectorAll('.gallery__dot-button')
    this.elements.dots[this.index].classList.add(Gallery.states.dotSelected)
  }

  setImages (data) {
    const imagesHTML = data.map(Gallery.toGalleryItemHTML).join('')
    this.elements.imagesContainer.innerHTML = imagesHTML
    this.elements.galleryItems = this.node.querySelectorAll('.gallery__images')
    this.elements.galleryItems[this.index].classList.add(Gallery.states.imageSelected)
  }

  updateArrowsState () {

    if (this.index === 0) {
       this.elements.leftBtn.classList.add(Gallery.states.arrowDisabled)
      } else if (this.index === this.elements.galleryItems.length - 1) {
       this.elements.rightBtn.classList.add(Gallery.states.arrowDisabled)
      } else {
       this.elements.leftBtn.classList.remove(Gallery.states.arrowDisabled)
       this.elements.rightBtn.classList.remove(Gallery.states.arrowDisabled)
      }
    }

  setEvents () {
    this.elements.rightBtn.addEventListener('click', this.next.bind(this))
    this.elements.leftBtn.addEventListener('click', this.back.bind(this))
    this.elements.dotsContainer.addEventListener('click', this.dotSelect.bind(this))
    this.node.addEventListener('keyup', this.selectImageByKey.bind(this))
  }
  
  next () {
    if (index >= 0 && index < this.elements.galleryItems.length - 1) {
      clear()
      this.index = index + 1
      select(index)
      this.updateArrowsState()
    }
  }

  back () {
    if (index > 0 && index <= this.elements.galleryItems.length - 1) {
      clear()
      this.index =index - 1
      select(index)
      this.updateArrowsState()
    }
  }

  clear () {
    galleryItems[this.index].classList.remove(Gallery.states.imageSelected)
    dots[this.index].classList.remove(Gallery.states.dotSelected)
  }

  select ( index ) {
    galleryItems[this.index].classList.add(Gallery.states.imageSelected)
    dots[this.index].classList.add(Gallery.states.dotSelected)
  }

  dotSelect ({target}) {
    clear()
    index = Array.from(this.elements.dots).indexOf(target)
    select(index)
    disabledBtn()
  }
  
  selectImageByKey ( {keyCode} ) {
    clear()
    index = keyCode == 37 ? this.index - 1 : keyCode == 39 ? this.index + 1 : index
    select(index)
    disabledBtn()
  }
}
export default Gallery
/*var position = 0
var images = document.querySelectorAll('.gallery__images-item') 
images[position].classList.add('gallery__images-item--selected')
var rightBtn = document.querySelector('.gallery__control-right')
rightBtn.addEventListener('click', next)
var leftBtn = document.querySelector('.gallery__control-left')
leftBtn.addEventListener('click', back)
disabledBtn()
const node = document.querySelector('body')
node.addEventListener("keyup", selectImageByKey)
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
}*/