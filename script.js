window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    var parallaxElement = document.querySelector('.parallax');
    parallaxElement.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
  });