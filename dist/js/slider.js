var slider = tns({
  container: ".client__slider",
  items: 1,
  gutter: 200,
  slideBy: 1,
  autoplay: true,
  nav: false,
  autoplayButtonOutput: false,


  
  responsive: {
    1250: {
      items: 1,
    },
    200: {
      items: 1,
    },
  },
});