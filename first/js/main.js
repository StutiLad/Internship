// Image carousel

var myCarousel = document.querySelector("#myCarousel");
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false,
});

// Image Glider

gliderAutoplay(
  new Glider(document.querySelector(".glider"), {
    slidesToShow: 4,
    draggable: true,
    dots: "#dots",
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },

    responsive: [
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  }),
  {
    interval: 2000,
    onPause: function () {
      document.getElementById("status").innerHTML = "PAUSE";
    },
    onRestart: function () {
      document.getElementById("status").innerHTML = "RUN";
    },
  }
);
