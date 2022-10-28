
// adds hoverClass to all instances of articleBox
function addHoverClasses(articleBox, hoverClass) {
  let arr = document.querySelectorAll('.' + articleBox)
  for (let i = 0; i < arr.length; i++) {
    arr[i].classList.add(hoverClass);
  }
};

// toggles article box hover states based on mouseover/mouseleave on parts of article box's footer with class of footer-green
function articleBoxHover (articleBoxSize, hoverClass) {
  for (var i = 0; i < document.querySelectorAll('.footer-green').length; i++) {
    document.querySelectorAll('.footer-green')[i].addEventListener('mouseover', function() {
      this.classList.add('underline');
      this.closest('.' + articleBoxSize).classList.remove(hoverClass);
    });
    document.querySelectorAll('.footer-green')[i].addEventListener('mouseleave', function() {
      this.classList.remove('underline');
      this.closest('.' + articleBoxSize).classList.add(hoverClass);
    });
  }
}

// toggles appropriate hover states on textElement based on mouseover/mouseleave on textImageWrapper and imageElement
function nestedArticleHover(imageElement, textImageWrapper, textElement) {
  document.querySelector('.' + imageElement).addEventListener('mouseover', function() {
    document.querySelector('.' + textElement).classList.add('hover-underline-color');
  });
  document.querySelector('.' + imageElement).addEventListener('mouseleave', function() {
    document.querySelector('.' + textElement).classList.remove('hover-underline-color');
  });
  document.querySelector('.' + textImageWrapper).addEventListener('mouseover', function() {
    document.querySelector('.' + textElement).classList.add('hover-underline-color');
  });
  document.querySelector('.' + textImageWrapper).addEventListener('mouseleave', function() {
    document.querySelector('.' + textElement).classList.remove('hover-underline-color');
  });
}

// preserves state of sister toggler buttons based on whether all-sport-dropdown (.all-sport-toggler-lg) is expanded or not
function allSportsToggler(togglerClass) {
  document.querySelector('.' + togglerClass).addEventListener('click', function () {
    var ariaExpanded = document.querySelector('.all-sport-toggler-lg').getAttribute('aria-expanded')
    if (ariaExpanded === 'false') {
      document.querySelector('.all-sport-toggler-div').classList.add('toggler-clicked');
      document.querySelector('.all-sport-toggler-sm').classList.add('collapsed-toggler-clicked');
      document.querySelector('.all-sport-toggler-lg').classList.add('button-toggler-clicked');
    } else {
      document.querySelector('.all-sport-toggler-div').classList.remove('toggler-clicked');
      document.querySelector('.all-sport-toggler-sm').classList.remove('collapsed-toggler-clicked');
      document.querySelector('.all-sport-toggler-lg').classList.remove('button-toggler-clicked');
    }
  });
}


// adjusts height of main-right-watch-listen dependent on if football-scores-more-dropdown is currently expanded
function watchAndListenHeight() {
  document.querySelector('.football-scores-more-dropdown').addEventListener('click', function () {
    var x = this.getAttribute('aria-expanded');
    if (x === 'false') {
      document.querySelector('.main-right-watch-listen').classList.add('decreased-bottom');
    } else {
      document.querySelector('.main-right-watch-listen').classList.remove('decreased-bottom');
    }
  });
}

addHoverClasses('article-box', 'h-ul');
addHoverClasses('small-article-box', 'h-ul');
addHoverClasses('headline-article','hover-headline');
addHoverClasses('second-headline-box','h-ul');
addHoverClasses('top-stories-heading-column','hover-headline');

articleBoxHover('article-box','h-ul');
articleBoxHover('small-article-box','h-ul');
articleBoxHover('headline-article','hover-headline');
articleBoxHover('second-headline-box','h-ul');
articleBoxHover('top-stories-heading-column','hover-headline');

nestedArticleHover('headline-image-wrapper','headline-article','headline-heading');
nestedArticleHover('atp-finals-image-wrapper','atp-finals-text-wrapper', 'atp-finals-headline');
nestedArticleHover('in-case-you-missed-image-wrapper', 'in-case-you-missed-text-wrapper', 'in-case-you-missed-headline');
nestedArticleHover('insight-image-wrapper', 'insight-text-wrapper', 'insight-headline');
nestedArticleHover('watch-listen-fa-cup', 'watch-listen-fa-cup', 'fa-cup-text')

allSportsToggler('all-sport-toggler-div');
allSportsToggler('all-sport-toggler-sm');

watchAndListenHeight();
