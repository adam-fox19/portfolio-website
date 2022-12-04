let instance = new TypeIt("#type-effect", {
  strings: "Hi, I'm Adam.",
  lifelike: true,
  cursorSpeed: 1250
}).go();

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  wrapAround:true,
  friction: 0.3,
  selectedAttraction: 0.02,
  imagesLoaded: true,
  watchCSS: true
});
