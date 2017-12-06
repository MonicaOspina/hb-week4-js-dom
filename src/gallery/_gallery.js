export default [
  { url: 'https://github.com/MonicaOspina/hb-week4-js-dom/blob/master/src/gallery/Images/1.jpg' },
  { url: 'https://github.com/MonicaOspina/hb-week4-js-dom/blob/master/src/gallery/Images/2.jpg' },
  { url: 'https://github.com/MonicaOspina/hb-week4-js-dom/blob/master/src/gallery/Images/3.jpg' },
  { url: 'https://github.com/MonicaOspina/hb-week4-js-dom/blob/master/src/gallery/Images/4.jpg' },
  { url: 'https://github.com/MonicaOspina/hb-week4-js-dom/blob/master/src/gallery/Images/5.jpg' },
  { url: 'https://github.com/MonicaOspina/hb-week4-js-dom/blob/master/src/gallery/Images/6.jpg' },
  { url: 'https://github.com/MonicaOspina/hb-week4-js-dom/blob/master/src/gallery/Images/7.jpg' },
  { url: 'https://github.com/MonicaOspina/hb-week4-js-dom/blob/master/src/gallery/Images/8.jpg' },
  { url: 'https://github.com/MonicaOspina/hb-week4-js-dom/blob/master/src/gallery/Images/9.jpg' },
  { url: 'https://github.com/MonicaOspina/hb-week4-js-dom/blob/master/src/gallery/Images/10.jpg' }
]
export class gallery {
  constructor (node, data) {
    this.index = 0
    this.node = node
    this.elements = {}

    this.setShell()
    this.setDomReferences()
    // this.setDots(data)
    this.setImages(data)
    // this.updateArrowsState()
    // this.setEvents()
  }
  static get templates () {
    return {
      shell: (
        `<div class="gallery__images">
         </div>
         <div class ="gallery__control">
          <button class="gallery__control gallery__control-left"><--</button>
          <button class="gallery__control gallery__control-right">--></button>
         </div>
         <div class="gallery__dots-container">
           <ul class ="gallery__dots">  
           </ul>
        </div>`
      ),
      dot: (
        `<li class="gallery__dots-button ">
          <button class="gallery__dot-button"></button>
        </li>`
      )
    }
  }

  static get states () {
    return {
      imageSelected: 'gallery__image-container--selected',
      dotSelected: 'gallery__dot-button--selected',
      arrowDisabled: 'gallery__arrow--disabled'
    }
  }
  static togalleryItemHTML ({url}, index) {
    console.log(url)
    const selectedClass = index === 0
      ? gallery.states.imageSelected
      : ''

    return (
      `<li class="gallery__images-item ${selectedClass}">
        <img class="gallery__images-item-img " src="${url}"/>
      </li>`
    )
  }
  setShell () {
    this.node.innerHTML = gallery.templates.shell
    this.node.tabIndex = 0
  }
  setDomReferences () {
    this.elements.imagesContainer = this.node.querySelector('.gallery__images')
    this.elements.leftBtn = this.node.querySelector('.gallery__control-left')
    this.elements.rightBtn = this.node.querySelector('.ggallery__control-right')
    this.elements.dotsContainer = this.node.querySelector('.gallery__dots-container')
  }
  setImages (data) {
    const imagesHTML = data.map(gallery.togalleryItemHTML).join('')
    this.elements.imagesContainer.innerHTML = imagesHTML
    this.elements.galleryItems = this.node.querySelectorAll('.gallery__images')
    console.log(imagesHTML)
  }
}
