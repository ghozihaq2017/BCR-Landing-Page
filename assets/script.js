$('.owl-carousel').owlCarousel({
  center: true,
  stagePadding: 50,
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});
