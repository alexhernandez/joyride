
(function () {
  const slides = document.getElementById('carousel__slides');
  const controls = document.getElementById('carousel__controls');

  function slidePosition(event) {
    const scrollPos = event.target.scrollLeft;
    slides.style.backgroundPosition = `${scrollPos}px 0px`;
  }

  function goToSlide(event) {
    slides.scrollLeft = (event.target.innerText * slides.offsetWidth) - slides.offsetWidth;
  }

  slides.addEventListener('scroll', slidePosition);

  for (let i = 0; i < controls.children.length; i += 1) {
    controls.children[i].addEventListener('click', goToSlide);
  }
}());
